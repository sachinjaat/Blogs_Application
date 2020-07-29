import React, { useState, useEffect } from "react";
import "./styles.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Compose from "./Compose";
import PerticularPost from './perticularPost';

export default function App() {
  const [Blogs, setBlogs] = useState(() => {
    const localData = localStorage.getItem("blogs");
    return localData ? JSON.parse(localData) : [];
  });

  function Addblog(newBlog) {
    setBlogs(prevBlogs => {
      return [...prevBlogs, newBlog];
    });
  }
  useEffect(() => {
    localStorage.setItem("blogs", JSON.stringify(Blogs));
  }, [Blogs]);

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={() => <Home blogs={Blogs} />} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route
            path="/compose"
            component={() => <Compose onAdd={Addblog} />}
          />
          <Route path="/perticularpost" component={PerticularPost} />
        </Switch>
      </div>
    </Router>
  );
}
