import "./App.css";
import * as React from "react";
import { BrowserRouter as Router, Routes, Route, Outlet, Link } from "react-router-dom";

import { Home, NavBar, Footer, About, ScrollToTop } from "./components";

export default function App() {
  return (
    <div>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />

            <Route path="*" element={<NoMatch />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

function Layout() {
  return (
    <div>
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
}

function NoMatch() {
  return (
    <div className="Page404">
      <h1 className="Page404-header">404</h1>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}