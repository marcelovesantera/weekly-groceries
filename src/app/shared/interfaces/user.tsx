export interface IUser {
  firstName?: string;
  lastName?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface IRegisterUser {
  firstName?: string;
  lastName?: string;
  email?: string;
  whatsapp?: number;
  password?: string;
  confirmPassword?: string;
}

export interface IRegisterUserResponse {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  whatsapp?: number;
  isActive: boolean;
  token: string;
  createdAt: Date;
  updatedAt?: Date;
}

export interface ILoginUser {
  email: string;
  password: string;
}

export interface IUserLoginResponse {
  _id: string;
  token: string;
  email?: string;
}
