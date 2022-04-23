export interface IName {
  first: string;
  last: string;
}

export interface IPicture {
  medium: string;
  thumbnail: string;
}

export interface ILogin {
  uuid: string;
}

export interface IUserContact {
  name: IName;
  email: string;
  picture: IPicture;
  login: ILogin;
}

export interface IUserContactState {
  userContacts: IUserContact[];
  isLoading: boolean;
  error: string;
}
