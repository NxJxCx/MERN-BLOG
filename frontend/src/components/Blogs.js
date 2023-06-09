import React, { useState, useEffect } from "react";
import axios from 'axios';
import Blog from "./Blog";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);

  const sendRequest = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/blog");
      const data = res.data;
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    sendRequest().then((data) => {
      setBlogs(data.blogs);
    });
  }, []);

  useEffect(() => {
    console.log(blogs); // Log the updated blogs state
  }, [blogs]); // Trigger the effect whenever blogs state changes

  return (
    <div>
      {blogs && blogs.map((blog, index) => (
        <Blog
          key={index}
          title={blog.title}
          description={blog.description}
          imageURL={blog.image}
          userName={blog.user ? blog.user.name : ''} 
        />
      ))}
    </div>
  );
};

export default Blogs;