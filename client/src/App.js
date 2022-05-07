import React from 'react';
import './App.css';

import { useEffect } from 'react';
import { auth } from './firebase';
import { login, logout } from './features/userSlice';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Container from 'react-bootstrap/Container';

import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage'; //blog
import LoginPage from './pages/LoginPage';
import ChatPage from './pages/ChatPage';
import ProfilePage from './pages/ProfilePage';

//apollo
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
  from,
} from '@apollo/client';
import { onError } from '@apollo/client/link/error';

//to check errors from graphql
const errorLink = onError(({ graphqlErrors, networkError }) => {
  if (graphqlErrors) {
    graphqlErrors.map(({ message, location, path }) => {
      alert(`Graphql error ${message}`);
    });
  }
});

const link = from([
  errorLink,
  new HttpLink({ uri: 'http://localhost:3001/graphql' }),
]);

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
  link: link,
});

function App() {
  // const dispatch = useDispatch();
  // const user = useSelector(selectUser);

  // useEffect(() => {
  //   auth.onAuthStateChanged((authUser) => {
  //     console.log(authUser);

  //     if (authUser) {
  //       dispatch(
  //         login({
  //           uid: authUser.uid,
  //           photo: authUser.photoURL,
  //           email: authUser.email,
  //           displayName: authUser.displayName,
  //         })
  //       );
  //     } else {
  //       dispatch(logout());
  //     }
  //   });
  // }, [dispatch]);

  // console.log(user);

  return (
    // <div className="app">
    //   {user ? (
      <ApolloProvider client={client}>
    <Container fluid className="blog-app">
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<LoginPage />} />
          <Route exact path="/homepage" element={<HomePage />} />
          <Route exact path="/page/profile" element={<ProfilePage />} />
          <Route exact path="/page/chat" element={<ChatPage />} />
        </Routes>
        <Footer />
      </Router>
    </Container>
    </ApolloProvider>

  );
  
}

export default App;
