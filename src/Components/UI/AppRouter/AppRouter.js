import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { privateRoutes, publicRoutes } from '../../../router';

const AppRouter = () => {
    const isAuth = true;
    return (
      isAuth
        ?
        <Routes>
            {
                privateRoutes.map((route) => {
                    return <Route key={route.id} path={route.path} element={route.element} exact={route.exact} />
                })
            }
        </Routes>
        :
        <Routes>
            {
                publicRoutes.map((route) => {
                    return <Route key={route.id} path={route.path} element={route.element} exact={route.exact} />
                })
            }

            {/*<Route path="/404" element={<ErrorLink/>} />*/}
            {/*<Route path={'*'} element={<Navigate replace to="/404" />} />*/}
        </Routes>

    );
};

export default AppRouter;