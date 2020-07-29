import React from "react";
import Header from "./partials/Header";
import Footer from "./partials/Footer";

export default function About() {
  return (
    <div>
      <Header />
      <div className="container">
        <h1>About</h1>
        <p>
          React application to publish blogs. Local storage of browser is used
          to store the blogs.
        </p>
      </div>
      <Footer />
    </div>
  );
}
