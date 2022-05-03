// import express from "express";
// import mongoose from "mongoose";
// import cors from "cors";
// import mongoData from "./mongoData.js";
// import Pusher from "pusher";

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const mongoData = require('./mongoData');
const Pusher = require('pusher');
const path = require("path");

// app config
const app = express();
const PORT = process.env.PORT || 3001;

const pusher = new Pusher({
  appId: "1404447",
  key: "3a3001939979161ff763",
  secret: "e7453abeb329e1c678e0",
  cluster: "us2",
  useTLS: true,
});

// middlewares
app.use(express.json());
app.use(cors());

// db config
const mongoURI =
  "mongodb+srv://admin:wqdYFZdv2GIsgT4c@cluster0.zev23.mongodb.net/accordDB?retryWrites=true&w=majority";

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost:27017/accordDB",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

mongoose.connection.once("open", () => {
  console.log("DB Connected");

  const changeStream = mongoose.connection.collection("conversations").watch();

  changeStream.on("change", (change) => {
    if (change.operationType === "insert") {
      pusher.trigger("channels", "newChannel", {
        change: change,
      });
    } else if (change.operationType === "update") {
      pusher.trigger("conversation", "newMessage", {
        change: change,
      });
    } else {
      console.log("Error triggering Pusher");
    }
  });
});

// api routes

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/public/index.html'));
  });
  
// app.get('/',(req,res)=> res.status(200));

app.post("/new/channel", (req, res) => {
  const dbData = req.body;

  mongoData.create(dbData, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(data);
    }
  });
});


app.get("/get/channelList", (req, res) => {
  mongoData.find((err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      let channels = [];

      data.map((channelData) => {
        const channelInfo = {
          id: channelData._id,
          name: channelData.channelName,
        };
        channels.push(channelInfo);
      });

      res.status(200).send(channels);
    }
  });
});

app.delete('/delete/channelList', (req,res) => {
    mongoData.findByIdAndDelete(
        {_id: req.query.id},
        (err) => {
            if (err) {
              console.log(err);
              res.status(500).send(err);
            } else {
              res.status(201).send("Channel deleted!");
            }
        }
    )
});

app.post("/new/message", (req, res) => {
  const newMessage = req.body;

  mongoData.updateOne(
    { _id: req.query.id },
    { $push: { conversation: req.body } },
    (err, data) => {
      if (err) {
        console.log("Error saving Message...");
        console.log(err);

        res.status(500).send(err);
      } else {
        res.status(201).send(data);
      }
    }
  );
});

app.get("/get/data", (req, res) => {
  mongoData.find((err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});

app.get("/get/conversation", (req, res) => {
  const id = req.query.id;

  mongoData.find({ _id: id }, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});

// listend
app.listen(PORT, () => {
  console.log(`API server running on port ${PORT}!`);
  // console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
});
