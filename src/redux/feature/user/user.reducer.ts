import { AnyAction, combineReducers } from 'redux';
import { UserActions, UserActionTypes } from './user.action';

export interface UserState {
  usersList: any[];
}

export const initialUserState: UserState = {
  usersList: [],
};

const saveUserList = (state: UserState, usersList: any[]): UserState => ({
  ...state,
  usersList,
});

export const userReducer = (state: UserState = initialUserState, action: AnyAction) => {
  switch (action.type) {
    case UserActionTypes.setUserList:
      return saveUserList(state, action.userList);
    default:
      return state;
  }
};
