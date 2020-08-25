import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Register from '../../../components/register/Register';
import './auth-layout.scss';
import Auth from '../../../components/auth/Auth';

export class AuthLayout extends React.Component {
  render() {
    return (
      <div className={'rm-auth-layout'}>
        <BrowserRouter>
          <Switch>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="/">
              <Auth />
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}
