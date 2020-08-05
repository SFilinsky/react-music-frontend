import { AnyAction, combineReducers } from 'redux';
import { UserActions, UserActionTypes } from './user.action';

export interface UserState {
  usersList: any[];
}

export const initialUserState: UserState = {
  usersList: [],
};

const saveUserList = (state: any[], action: AnyAction) => action.userList;

export const userReducer = (state: UserState = initialUserState, action: AnyAction) => {
  switch (action.type) {
    case UserActionTypes.setUserList:
      return saveUserList(state.usersList, action);
    default:
      return state;
  }
};
