const express = require('express');
const app = express();
const http = require('http');
const { Server } = require('socket.io');
const cors = require('cors');
const bodyParser = require('body-parser');

const sequelize = require('./config/connection');

//apollo
const { ApolloServer } = require('apollo-server-express');
const path = require('path');
const { typeDefs, resolvers } = require('./schemas');
const db = require('./config/connection');

//port
const PORT = process.env.PORT || 3001;

//socket
const socketServer = http.createServer(app);

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

// middlewares
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(cors());
app.use(bodyParser.json());

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

// Listen

const startApolloServer = async (typeDefs, resolvers, socketServer) => {
  const io = new Server(socketServer, {
    cors: {
      origin: 'http://localhost:3001',
    },
  });
  io.sockets.on('connection', function (client) {
    client.on('subscribe', function (room) {
      console.log('joining room', room);
      client.join(room);
    });

    client.on('unsubscribe', function (room) {
      console.log('leaving room', room);
      client.leave(room);
    });

    client.on('send', function (data) {
      console.log('sending message');
      io.sockets.in(data.room).emit('message', data);
    });
  });
  await server.start();
  server.applyMiddleware({ app });

  sequelize.sync({ force: false }).then(() => {
    socketServer.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
      console.log(
        `Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`
      );
    });
  });
};

// Call the async function to start the server
startApolloServer(typeDefs, resolvers, socketServer);
