export enum UserActionTypes {
  setUserList = '[USER] Set User List',
}

export class UserActions {
  static setUserList = (userList: any[]) => ({
    type: UserActionTypes.setUserList,
    userList,
  });
}
