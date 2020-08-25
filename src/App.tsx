import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { AuthLayout } from './core/layouts/auth-layout/auth-layout';
import { MainLayout } from './core/layouts/main-layout/main-layout';
import AuthGuard from './core/guarded-route/guarded-route';
import './App.scss';

class App extends React.Component {
  render() {
    return (
      <div className="rm-app">
        <BrowserRouter>
          <Switch>
            <AuthGuard path="/main" redirect="/">
              <MainLayout />
            </AuthGuard>
            <Route path="/">
              <AuthLayout />
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
