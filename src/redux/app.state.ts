import { createStore, Store } from 'redux';
import { appReducer } from './app.reducers';
import { initialUserState, UserState } from './feature/user/user.reducer';

export class AppState {
  user!: UserState;
}

export const initialState: AppState = {
    user: initialUserState,
  },
  store: Store<AppState> = createStore(appReducer);
