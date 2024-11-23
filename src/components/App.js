//SGN
import React, { useState } from "react";
import {BrowserRouter as Router, Routes, Route, Link, Navigate, Outlet} from "react-router-dom";
import "./../styles/App.css";

const Home = () => <p>Home</p>;
const Shirt = () => <p>Shirt</p>;
const Trouser = () => <p>Trouser</p>;
const Jewellery = () => <p>Jewellery</p>;


const Layout = () => {
  return(
    <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/women">Women</Link>
            </li>
          </ul>
        </nav>
        <Outlet />
    </div>
  )
}

const Women= () => {
  return(
    <div>
    <p>Women Items:</p>
    <ul>
        <li>
          <Link to="grooming">Grooming</Link>
        </li>
        <li>
          <Link to="shirt">Shirt</Link>
        </li>
        <li>
          <Link to="trouser">Trouser</Link>
        </li>
        <li>
          <Link to="jewellery">Jewellery</Link>
        </li>
      </ul>
      {/* Nested Route Content */}
      <Outlet />

    </div>
  )
}

const Grooming = () => <p>Grooming</p>;
const App = () => {
  return (
    <div>
      {/* ONS Do not remove the main div */}
      <Router>


        <Routes>
          <Route path="/" element={<Layout />} >
          <Route path="/" element={<Home />} />
          {/* Parent Route for Women */}
          <Route path="/women" element={<Women />}>
            {/* Nested Route for Grooming */}
            <Route path="grooming" element={<Grooming />} />
            <Route path="shirt" element={<Shirt />} />
            <Route path="trouser" element={<Trouser />} />
            <Route path="jewellery" element={<Jewellery />} />
          </Route>
          </Route>
        </Routes>
      </Router>
    </div>
  );
};

export default App;