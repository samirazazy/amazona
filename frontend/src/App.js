import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";

import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";

function App() {
  const openMenu = () =>
    document.querySelector(".sidbare").classList.add("open");
  const closeMenu = () =>
    document.querySelector(".sidbare").classList.remove("open");
  return (
    <BrowserRouter>
      <div className="grid-container">
        <header className="header">
          <div className="brand">
            <button onClick={openMenu}>&#9776;</button>
            <Link to="/">Amazona</Link>
          </div>
          <div className="header-links">
            <a href="/cart">Cart</a>
            <a href="/signIn">SignIn</a>
          </div>
        </header>
        <aside className="sidbare">
          <h3>Shopping Cart</h3>
          <button className="sidbare-colose-button " onClick={closeMenu}>
            X
          </button>
          <ul>
            <li>
              <a href="/pants">Pants</a>
            </li>
            <li>
              <a href="/shirts">T Shirts</a>
            </li>
          </ul>
        </aside>
        <main className="main">
          <div className="content">
            <Route path="/" exact={true} component={HomeScreen} />
            <Route path="/product/:id" component={ProductScreen} />
          </div>
        </main>
        <footer className="footer">All rights reserved?</footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
