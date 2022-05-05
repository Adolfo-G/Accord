import React from 'react';
import './App.css';
import Sidebar from './Sidebar';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Chat from './Chat';
import { selectUser } from './features/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import Login from './Login';
import { useEffect } from 'react';
import { auth } from './firebase';
import { login, logout } from './features/userSlice';

//apollo
import {ApolloClient, InMemoryCache, ApolloProvider, HttpLink, from} from '@apollo/client';
import {onError} from '@apollo/client/link/error';
import GetUsers from './components/GetUsers';

//to check errors from graphql 
const errorLink = onError(({graphqlErrors, networkError})=> {
  if (graphqlErrors) {
    graphqlErrors.map(({message, location, path}) => {
      alert(`Graphql error ${message}`);
    });
  }
});

const link = from([
  errorLink, 
  new HttpLink({uri: "http://localhost:3001/graphql"}),
])

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
  link: link
});

function App() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log(authUser);

      if (authUser) {
        dispatch(
          login({
            uid: authUser.uid,
            photo: authUser.photoURL,
            email: authUser.email,
            displayName: authUser.displayName,
          })
        );
      } else {
        dispatch(logout());
      }
    });
  }, [dispatch]);

  console.log(user);

  return (
    <ApolloProvider client={client}>
      <div className="app">
        {user ? (
          <>
            <Chat />
            <Sidebar />
            <GetUsers />
          </>
        ) : (
          <Login />
        )}
      </div>
    </ApolloProvider>
  );
}

export default App;
