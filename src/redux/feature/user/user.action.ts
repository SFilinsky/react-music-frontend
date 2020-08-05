export enum UserActionTypes {
  setUserList = '[USER] Set User List',
}

export const UserActions = {
  setUserList: (userList: any[]) => ({
    type: UserActionTypes.setUserList,
    userList,
  }),
};
