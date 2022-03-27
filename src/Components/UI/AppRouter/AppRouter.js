import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import About from '../../../pages/About';
import Posts from '../../../pages/Posts';
import ErrorLink from '../../../pages/ErrorLink';

const AppRouter = () => {
    return (
      <Routes>
          <Route path="/about" element={<About/>} />
          <Route path="/posts" element={<Posts/>} />
          <Route path="/404" element={<ErrorLink/>} />
          <Route path={'*'} element={<Navigate replace to="/404" />} />
      </Routes>
    );
};

export default AppRouter;