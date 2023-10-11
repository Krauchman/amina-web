import "./App.css";

import * as React from "react";
import { useEffect } from "react";
import { Routes, Route, Outlet, Link, useLocation } from "react-router-dom";

import { createRef } from 'react'

import { SwitchTransition, CSSTransition } from "react-transition-group";

import { Home, NavBar, Footer, About, AULAProject, AULAProProject, ZhuldyzZhoramalProject, BeelineProject } from "./components";

import { Helmet } from "react-helmet";


const routes = [
  { path: '/', element: <Home />, nodeRef: createRef() },
  { path: '/about', element: <About />, nodeRef: createRef() },
  { path: 'projects/aula', element: <AULAProject />, nodeRef: createRef() },
  { path: 'projects/aula-pro', element: <AULAProProject />, nodeRef: createRef() },
  { path: 'projects/zhuldyz-zhoramal', element: <ZhuldyzZhoramalProject />, nodeRef: createRef() },
  { path: 'projects/beeline', element: <BeelineProject />, nodeRef: createRef() },
]

const noMatchRef = createRef()


export default function App() {
  const location = useLocation();
  const { nodeRef } =
    routes.find((route) => route.path === location.pathname) ?? { nodeRef: noMatchRef }

  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual"
    }
  }, []);

  return (
    <div>

      <Helmet>
        <meta name="description" content="Amina Alen portfolio" />
      </Helmet>

      <SwitchTransition>
        <CSSTransition
          key={location.pathname}
          classNames="fade"
          nodeRef={nodeRef}
          timeout={350}
          unmountOnExit
          appear

          onEnter={_ => {
            document.documentElement.scrollTo({
              top: 0,
              left: 0,
            });
          }}
        >
          <div ref={nodeRef}>

            < Routes location={location} >
              <Route path="/" element={<Layout />}>

                {routes.map((route) => (
                  <Route key={route.path} path={route.path} element={route.element} />
                ))}

                <Route path="*" element={<NoMatch />} />
              </Route>
            </Routes >

          </div>

        </CSSTransition>
      </SwitchTransition>

    </div >
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