import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { BrowserRouter, Routes, Route, useRoutes } from "react-router-dom";

import About from './routes/About';
import Header from './routes/Header';
import Home from './routes/Home';
import Email from './routes/Email';
import Contact from './routes/Contact';
import Phone from './routes/Phone';

function App() {

  // hook based solution
  let element = useRoutes([
    {
      path: "/",
      element: <Header />,
      children: [
        {
          path: "/",
          element: <Home />,
          index: true,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/contact",
          element: <Contact />,
          children: [
            {
              path: "/contact/email",
              element: <Email />,
            },
            {
              path: "/contact/phone",
              element: <Phone />,
            },
          ],
        },
      ],
    },
  ]);

  return (
    <div className="App">
      {/* Component-based solution */}
      {/* <Routes>
        <Route path="/" element={<Header />}>
          <Route index={true} element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />}>
            <Route path="email" element={<Email />} />
            <Route path="phone" element={<Phone />} />
          </Route>
        </Route>
      </Routes> */}

        {/* hook based solution also */}
        {element}

    </div>
  );
}

export default App
