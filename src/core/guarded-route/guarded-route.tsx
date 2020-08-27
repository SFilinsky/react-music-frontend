import { connect } from 'react-redux';
import { AppState } from '../../redux/app.state';
import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const GuardedRoute = (
  props: PropsFromConnector & {
    cond: boolean;
    redirect: string;
    path: string;
    children: React.ReactNode;
  },
) => {
  console.log(`Cond: ${props.cond}`);
  return (
    <Route path={props.path}>
      {props.cond ? props.children : <Redirect to={props.redirect} />}
    </Route>
  );
};

const mapState = (state: AppState) => ({});

const mapDispatch = {};

const connector = connect(mapState, mapDispatch);

type stateProps = ReturnType<typeof mapState>;
type dispatchProps = typeof mapDispatch;

type PropsFromConnector = stateProps & dispatchProps;

export default connector(GuardedRoute);
