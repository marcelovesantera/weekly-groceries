export interface IUser {
  firstName?: string;
  lastName?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface ICreateUser {
  firstName: string;
  lastName: string;
  email: string;
  whatsapp?: number;
  password: string;
  confirmPassword: string;
}

export interface ILoginUser {
  email: string;
  password: string;
}
