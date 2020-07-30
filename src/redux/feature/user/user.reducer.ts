import { AnyAction } from 'redux';
import { UserActionTypes } from './user.action';

export interface UserState {
  usersList: any[];
}

export const initialUserState: UserState = {
  usersList: [],
};

const setUserListReducer = (state: any[] = [], action: AnyAction) => action.userList;

export const userReducer = (state: UserState = initialUserState, action: AnyAction) => ({
  usersList: action.type = UserActionTypes.setUserList
    ? setUserListReducer(state.usersList, action)
    : state.usersList,
});
