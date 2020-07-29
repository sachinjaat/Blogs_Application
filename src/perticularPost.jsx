import React from "react";
import Header from "./partials/Header";
import Footer from "./partials/Footer";

function PerticularPost() {
  const localData = localStorage.getItem("perticularBlog");
  const perticularPost = localData ? JSON.parse(localData) : {};

  return (
    <div>
      <Header />
      <div className="container">
        <h1>{perticularPost.title}</h1>
        <p>{perticularPost.content}</p>
      </div>
      <Footer />
    </div>
  );
}
export default PerticularPost;
