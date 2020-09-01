import { Action, applyMiddleware, createStore, Store } from 'redux';
import { appReducer } from './app.reducers';
import { UserState } from './feature/user/user.reducer';
import thunk, { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { AuthState } from './feature/auth/auth.reducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import { SearchState } from './feature/search/search.reducer';

type AppExtraArg = undefined;
export type AppThunkResult<R> = ThunkAction<R, AppState, AppExtraArg, Action>;
export type AppThunkDispatch = ThunkDispatch<AppState, AppExtraArg, Action>;

export interface AppState {
  user: UserState;
  auth: AuthState;
  search: SearchState;
}

export const store: Store<AppState> = createStore(
  appReducer,
  composeWithDevTools(applyMiddleware(thunk)),
);
