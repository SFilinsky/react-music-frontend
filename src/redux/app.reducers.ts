import { combineReducers } from 'redux';
import { userReducer } from './feature/user/user.reducer';
import { authReducer } from './feature/auth/auth.reducer';

export const appReducer = combineReducers({
  user: userReducer,
  auth: authReducer,
});
