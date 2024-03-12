import React from 'react';
import './App.css';
import {BrowserRouter, Routes, Route, useLocation} from 'react-router-dom';
import BlogPost from "./blog/BlogPost";
import Page from "./blog/Page";

import {DLPosts, RustPosts, GoPosts, DistPosts, OtherPosts, AlgoPosts, OsPosts} from "./blog/Posts";

const category2posts = new Map([
  ["rust", RustPosts],
  ["go", GoPosts],
  ["dist", DistPosts],
  ["algo", AlgoPosts],
  ["os", OsPosts],
  ["dl", DLPosts],
  ["others", OtherPosts],
])

function MainPage() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const category = queryParams.get("category") ?? "";
  const filename = queryParams.get("filename") ?? "";

  if (!category2posts.has(category)) {
    return (
      <div className="Mainpage">
        <Page header="main" bloglinks={[]}/>
      </div>
    );
  } else if (filename === "") {
    // menu page for a certain category
    const posts = category2posts.get(category) ?? [];
    return (
      <div className="SubPage">
        <Page header={category} bloglinks={posts}/>
      </div>
    );
  } else {
    return (
      <div className="Post">
        <BlogPost category={category} filename={filename}/>
      </div>
    );
  }
}

function App() {
  return (
    <div className="App">
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<MainPage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

