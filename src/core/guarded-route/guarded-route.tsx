import { connect } from 'react-redux';
import { AppState } from '../../redux/app.state';
import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const AuthGuard = (
  props: PropsFromConnector & { redirect: string; path: string; children: React.ReactNode },
) => {
  return (
    <Route path={props.path}>
      {props.token ? props.children : <Redirect to={props.redirect} />}
    </Route>
  );
};

const mapState = (state: AppState) => ({
  token: state.auth.token,
});

const mapDispatch = {};

const connector = connect(mapState, mapDispatch);

type stateProps = ReturnType<typeof mapState>;
type dispatchProps = typeof mapDispatch;

type PropsFromConnector = stateProps & dispatchProps;

// @ts-ignore
export default connector(AuthGuard);
