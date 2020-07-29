import React, { useState, useEffect } from "react";

function Post(props) {
  const [perticularPost, setPerticularPost] = useState({
    title: "",
    content: ""
  });
  function handleClick() {
    setPerticularPost({ title: props.title, content: props.content });
  }
  useEffect(() => {
    localStorage.setItem("perticularBlog", JSON.stringify(perticularPost));
  }, [perticularPost]);
  return (
    <div className="container">
      <h1>{props.title}</h1>
      <p>
        {props.content.substring(0, 100) + "..."}
        <a onClick={handleClick} href="/perticularpost">
          Read More
        </a>
      </p>
    </div>
  );
}

export { Post };
