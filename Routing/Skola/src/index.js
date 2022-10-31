import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Admin from './pages/admin/Admin';
import NotFound from './pages/notFound/NotFound';
import Layout from './pages/layout/Layout';
import LogIn from './pages/login/Login';
import Users from './pages/users/Users';
import User from './pages/users/User';
import Layout2 from './pages/layout/Layout2';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <BrowserRouter>{/* It is the parent component that is used to store all of the other components and to tell the broswer that we have routing. */}
      <Routes> {/* Container of all routes */}
        <Route path="/" element={<Layout />}>{/* <Route> to define which route to which component/page. It can be nested as in this example */}
          <Route index element={<App></App>}></Route>{/* index specifies this route as the default route for the parent route, which is "/" */}
          <Route path='login' element={<LogIn></LogIn>}></Route>
          <Route path='admin' element={<Admin />}></Route>
          <Route path='*' element={<NotFound></NotFound>}></Route>{/* Setting the path to * will act as a catch-all for any undefined URLs. This is great for a 404 error page. */}
        </Route>

        <Route path='/users' element={<Layout2 />}>
          <Route index element={<Users />}></Route>
          <Route path=':id' element={<User></User>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </>
);