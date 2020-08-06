import { store } from '../../app.state';
import { AuthConstants } from '../../../constants/auth.constants';

const key = 'AUTH';

export const AuthActionTypes = {
  setToken: `[${key}] Set Auth Token`,
};

export const AuthActions = {
  setToken: ({ token }: { token: string | null }) => ({
    type: AuthActionTypes.setToken,
    payload: { token },
  }),
};

// @ts-ignore
export const AuthThunks = {
  saveToken: ({ token }: { token: string }) => (dispatch: typeof store.dispatch) => {
    dispatch(AuthActions.setToken({ token }));
    window.localStorage.setItem(AuthConstants.TOKEN_STORAGE_KEY, token);
  },

  removeToken: () => (dispatch: typeof store.dispatch) => {
    dispatch(AuthActions.setToken({ token: null }));
    window.localStorage.removeItem(AuthConstants.TOKEN_STORAGE_KEY);
  },

  loadToken: () => (dispatch: typeof store.dispatch) => {
    dispatch(
      AuthActions.setToken({ token: window.localStorage.getItem(AuthConstants.TOKEN_STORAGE_KEY) }),
    );
  },
};
