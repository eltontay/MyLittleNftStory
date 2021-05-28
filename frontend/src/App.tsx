import React, { lazy } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import SuspenseWithChunkError from './components/SuspenseWithChunkError';
import PageLoader from './components/PageLoader';
import history from './routerHistory';

const Home = lazy(() => import('./pages/admin/Home'));
const Login = lazy(() => import('./pages/admin/Login'));
const Register = lazy(() => import('./pages/admin/Register'));
const Artists = lazy(() => import('./pages/admin/Artists'));
const Auctions = lazy(() => import('./pages/admin/Artists'));

const App: React.FC = () => {
  return (
    <Router history={history}>
      <SuspenseWithChunkError fallback={<PageLoader />}>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/Login">
            <Login />
          </Route>
          <Route path="/Register">
            <Register />
          </Route>
          <Route path="/Auctions">
            <Auctions />
          </Route>
          <Route path="/Artists">
            <Artists />
          </Route>
        </Switch>
      </SuspenseWithChunkError>
    </Router>
  );
};

export default React.memo(App);
