//SGN
import React from "react";
import {BrowserRouter as Router, Routes, Route, Link, Outlet} from "react-router-dom";

const categories = ["Women", "Men", "Kids"];
const items = {
  Women: ["Shirt", "Trouser", "Jewellery"],
  Men: ["Shirt", "Trouser", "Watch"],
  Kids: ["Toys", "Books"]
};

const Item = ({name}) => <p>{name}</p>;

const Category = ({name}) => {
  return(
    <div>
    <p>{name} Items:</p>
    <ul>
      {items[name].map(item =>
        <li key={item}>
          <Link to={item}>{item}</Link>
        </li>
      )}
    </ul>
    <Outlet />
    </div>
  )
}

const Layout = () => {
  return(
    <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            {categories.map(category =>
              <li key={category}>
                <Link to={category}>{category}</Link>
              </li>
            )}
          </ul>
        </nav>
        <Outlet />
    </div>
  )
}

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />} >
            {categories.map(category =>
              <Route key={category} path={category} element={<Category name={category} />}>
                {items[category].map(item =>
                  <Route key={item} path={item} element={<Item name={item} />} />
                )}
              </Route>
            )}
          </Route>
        </Routes>
      </Router>
    </div>
  );
};

export default App;