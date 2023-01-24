import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

import App from "./App"
import Blog from "./pages/Blog"
import Blogs from "./pages/Blogs"
import Gallery from "./pages/Gallery"
import SingleGallery from "./pages/SingleGallery"
import SingleTeam from './pages/SingleTeam'
import Team from './pages/team'

const helmetContext = {};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <HelmetProvider context={helmetContext}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/blog/detail/:id" element={<Blog />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/team" element={<Team />} />
        <Route path="/team/:id" element={<SingleTeam />} />
        <Route path="/gallery/:id" element={<SingleGallery />} />
      </Routes>
    </BrowserRouter>
  </HelmetProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
