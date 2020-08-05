import { applyMiddleware, createStore, Store } from 'redux';
import { appReducer } from './app.reducers';
import { UserState } from './feature/user/user.reducer';
import thunk from 'redux-thunk';
import { AuthState } from './feature/auth/auth.reducer';
import { composeWithDevTools } from 'redux-devtools-extension';

export interface AppState {
  user: UserState;
  auth: AuthState;
}

export const store: Store<AppState> = createStore(
  appReducer,
  composeWithDevTools(applyMiddleware(thunk)),
);
