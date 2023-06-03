import React from "react";
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Auth from './components/Auth';
import Blogs from './components/Blogs';
import AddBlog from './components/AddBlog';
import UserBlogs from './components/UserBlogs';
import BlogDetail from './components/BlogDetail';
import { useSelector } from 'react-redux';

function App() {
  const isLoggedIn = useSelector(state => state.isLoggedIn);
  console.log(isLoggedIn);
  
  return (
    <React.Fragment>
      <Header />
      <main>
        <Routes>
          <Route path="/auth" element={<Auth />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blogs/add" element={<AddBlog />} />
          <Route path="/myBlogs" element={<UserBlogs />} />
          <Route path="/myBlogs/:id" element={<BlogDetail />} />
        </Routes>
      </main>
    </React.Fragment>
  );
}

export default App;

