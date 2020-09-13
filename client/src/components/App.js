// Libraries
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// Components
import Home from './home-page/Home';
import Cart from './cart-page/Cart';
import Item from './item-page/Item';
import Error from './error-page/Error';
import SignIn from './signin-page/SignIn';
import Confirmation from './confirmation-page/Confirmation';
import Header from './Header';

// Styles
import GlobalStyles from './GlobalStyles';

function App() {
  const [bacon, setBacon] = useState(null);

  useEffect(() => {
    fetch('/bacon')
      .then((res) => res.json())
      .then((data) => setBacon(data));
  }, []);

  return (
    <>
      <Router>
        <Header />
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/item/:itemId">
          <Item />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
        <Route path="/confirmation">
          <Confirmation />
        </Route>
        <Route path="/signin">
          <SignIn />
        </Route>
        <Route path="/error">
          <Error />
        </Route>
        <div>{bacon ? bacon : `...LET's START?...`}</div>
        <GlobalStyles />
      </Router>
    </>
  );
}

export default App;
