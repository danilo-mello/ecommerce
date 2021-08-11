import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from './global'
import { theme } from './app/theme'

import Home from './pages/home/Home'
import VerifiedHome from './pages/verified-home/VerifiedHome'
import DeniedHome from './pages/denied-home/DeniedHome'
import ProductPage from './pages/product/ProductPage';
import StoreListPage from './pages/store/StoreListPage';
import Cart from './features/cart/Cart';


function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/verified-home">
            <VerifiedHome />
          </Route>
          <Route path="/denied-home">
            <DeniedHome />
          </Route>

          <Route path="/products">
            <ProductPage />
          </Route>

          <Route path="/cart">
            <Cart />
          </Route>

          <Route path="/stores">
            <StoreListPage />
          </Route>

        </Switch>

      </ThemeProvider>
    </Router>
  );
}

export default App;
