import { useState } from 'react'
import { useRoutes } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import './App.css'

import About from './routes/About';
import Header from './routes/Header';
import Home from './routes/Home';
import Email from './routes/Email';
import Contact from './routes/Contact';
import Phone from './routes/Phone';
import Product from './routes/Product';

function App() {

  // TODO 2: how can we make our routes using the useRoutes hook? And how do we return them?
  const routes = useRoutes([
    {
      path: '/',
      element: <Home />
    },
    
    {
      path: '/about',
      element: <About />,
    },
    {
      path: '/product/:productId',
      element: <Product />,
    },
    { path: '/contact',
      element: <Contact />,
      children: [
        {
          path: '/contact/email',
          element: <Email />
        },
        {
          path: '/contact/phone',
          element: <Phone />
        }
      ]
    },
  ])

  return (
    //TODO: how can we use the browserrouter, routes, and route elements to create our routes?
    <div className="App">
      <Header />
      {routes}
    </div>
  );
}

export default App
