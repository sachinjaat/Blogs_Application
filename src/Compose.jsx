import React, { useState } from 'react';
import Header from './partials/Header';
import Footer from './partials/Footer';

function Compose(props){


  const [blog, setBlog] = useState({
    title: '',
    content: ''
  })


  function handleChange(event) {
    const {name, value} = event.target;

    setBlog(prevBlog => {
      return {
        ...prevBlog,
        [name]: value
      };
    });
  };
  function publishBlog(event){
    props.onAdd(blog);
    setBlog({
      title: '',
      content: ''
    });
    event.preventDefault();


  }



  return (
    <div>
      <Header />
    <div className="container">

      <h1>Compose</h1>
      <form className="form" >
        <div className="form-group">
          <label>Title</label>
          <input onChange={handleChange} className="form-control form-control-lg" type="text" name="title" value={blog.title}></input>
          <label>Post</label>
          <textarea onChange={handleChange} className="form-control form-control-lg" name="content" rows={5} cols={30} value={blog.content} />
        </div>
        <button onClick={publishBlog} className="btn btn-primary btn-lg" type="submit" name="button">Publish</button>
      </form>

    </div>
      <Footer />
    </div>
  )
}

export default Compose;
