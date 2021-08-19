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
import Categories from './pages/categories/Categories'
import DeniedHome from './pages/denied-home/DeniedHome'
import ProductPage from './pages/product/ProductPage';
import StoreListPage from './pages/store/StoreListPage';
import CartPage from './pages/cart/CartPage';


function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/stores/:storename/categories/">
            <Categories />
          </Route>
          <Route path="/denied-home">
            <DeniedHome />
          </Route>

          <Route path="/stores/categories/:categorie">
            <ProductPage />
          </Route>

          <Route path="/cart">
            <CartPage />
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
