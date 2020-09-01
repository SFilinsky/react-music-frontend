import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import { AuthLayout } from './core/layouts/auth-layout/auth-layout';
import { MainLayout } from './core/layouts/main-layout/main-layout';
import './App.scss';
import { AppState } from './redux/app.state';
import { connect } from 'react-redux';
import GuardedRoute from './core/guarded-route/guarded-route';

class App extends React.Component<PropsFromConnector> {
  constructor(props: PropsFromConnector) {
    super(props);
  }

  render() {
    console.log(Boolean(this.props.token));
    return (
      <div className="rm-app">
        <BrowserRouter>
          <Switch>
            <GuardedRoute cond={Boolean(this.props.token)} path="/main" redirect="/auth">
              <MainLayout />
            </GuardedRoute>
            <GuardedRoute cond={!this.props.token} path="/auth" redirect="/main">
              <AuthLayout />
            </GuardedRoute>
            <Route path="/">
              <Redirect to={'/auth'} />
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

const mapState = (state: AppState) => ({
  token: state.auth.token,
});

const mapDispatch = {};

const connector = connect(mapState, mapDispatch);

type stateProps = ReturnType<typeof mapState>;
type dispatchProps = typeof mapDispatch;

type PropsFromConnector = stateProps & dispatchProps;

// @ts-ignore
export default connector(App);
