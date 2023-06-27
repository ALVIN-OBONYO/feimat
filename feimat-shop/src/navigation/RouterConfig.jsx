import React from 'react';
// import { ProtectedRoutes } from 'components/guards';
import { Home, Men, Women, Kid} from 'pages';
import { Route, Routes } from 'react-router-dom';
import {
  HOME,
  MEN,
  WOMEN,
  KID,
} from 'navigation/constants';

function RouterConfig() {
  return (
    <Routes>
      {/*************************PUBLIC ROUTES************************************** */}

      {/* List all public routes here */}
      <Route exact path={HOME} element={<Home />} />
      <Route exact path={MEN} element={<Men />} />
      <Route exact path={WOMEN} element={<Women />} />
      <Route exact path={KID} element={<Kid />} />
    
      {/*************************PROTECTED ROUTES************************************** */}
      {/*************************PROTECTED ROUTES************************************** */}
      {/* <Route element={<ProtectedRoutes redirectPath={LOGIN} />}>
        LIST ALL PROTECTED ROUTES HERE
      </Route> */}

      {/*************************404************************************** */}

      {/* List All 404 routes here */}
      <Route path="*" element={<div>404 PAGE NOT FOUND</div>} />
    </Routes>
  );
}

export default RouterConfig;