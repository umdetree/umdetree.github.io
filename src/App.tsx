import React from 'react';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import BlogPost from "./blog/BlogPost";
import Page from "./blog/Page";

import {RustPosts, GoPosts, DistPosts} from "./blog/Posts";

function MainPage({header}: {header: string}) {
  return (
    <div className="Mainpage">
      <Page header={header} bloglinks={[]} />
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage header="main"/>}/>

          <Route path="/dist" element={<Page header="dist" bloglinks={DistPosts}/>} />
          <Route path="/dist/:filename" element={<BlogPost category="dist"/>} />

          <Route path="/rust" element={<Page header="rust" bloglinks={RustPosts}/>} />
          <Route path="/rust/:filename" element={<BlogPost category="rust"/>} />

          <Route path="/go" element={<Page header="go" bloglinks={GoPosts}/>} />
          <Route path="/go/:filename" element={<BlogPost category="go"/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

