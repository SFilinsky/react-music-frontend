import { AppState, initialState } from './app.state';
import { Action, Reducer } from 'redux';
import { userReducer } from './feature/user/user.reducer';

export const appReducer: Reducer<AppState> = (state: AppState = initialState, action: Action) => ({
  user: userReducer(state.user, action),
});
