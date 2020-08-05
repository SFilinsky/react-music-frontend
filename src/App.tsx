import React from 'react';
import './App.scss';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { AuthLayout } from './components/layouts/auth-layout/auth-layout';
import { MainLayout } from './components/layouts/main-layout/main-layout';

import 'primereact/resources/themes/nova-dark/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import AuthGuard from './core/guarded-route/guarded-route';

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
