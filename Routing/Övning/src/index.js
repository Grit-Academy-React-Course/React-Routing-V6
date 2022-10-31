import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './style/index.css';
import NotFound from './pages/notFound/NotFound';
import Layout from './pages/layout/Layout';
import ExerciseOne from './pages/exercise-one/ExerciseOne';
import ExerciseTwo from './pages/exercise-two/ExerciseTwo';
import ExerciseThree from './pages/exercise-three/ExerciseThree';
import App from "./App"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<App />} />
          <Route path="/one" element={<ExerciseOne />} />
          <Route path="/two" element={<ExerciseTwo />} />
          <Route path="/three" element={<ExerciseThree />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </>
);