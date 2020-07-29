import React from "react";
import Header from "./partials/Header";
import Footer from "./partials/Footer";
import { Post } from "./Post";

function Home(props) {
  return (
    <div>
      <Header />
      <div className="container">
        <h1 className="title">Home</h1>
        <p>Welcome! Go to compose section and publish your blogs...</p>
        {props.blogs.map((blogItem, index) => {
          return (
            <Post
              id={index}
              key={index}
              title={blogItem.title}
              content={blogItem.content}
            />
          );
        })}
      </div>
      <Footer />
    </div>
  );
}

export default Home;
