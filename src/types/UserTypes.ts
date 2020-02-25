export type UserType = {
  scopes: [];
  serverAuthCode: string;
  idToken: string;
  user: UserDataType;
};

export type UserDataType = {
  photo: string;
  email: string;
  familyName: string;
  givenName: string;
  name: string;
  id: string;
};
