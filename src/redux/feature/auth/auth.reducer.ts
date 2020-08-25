import { AnyAction } from 'redux';
import { AuthActionTypes } from './auth.action';

export interface AuthState {
  token: string | null;
}

export const initialAuthState: AuthState = {
  token: null,
};

const setToken = (state: AuthState, value: string): AuthState => ({
  ...state,
  token: value,
});

export const authReducer = (state: AuthState = initialAuthState, action: AnyAction) => {
  switch (action.type) {
    case AuthActionTypes.setToken:
      return setToken(state, action.payload.token);
    default:
      return state;
  }
};
