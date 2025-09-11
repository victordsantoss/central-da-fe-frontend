import { UserModel } from '@/common/models/user.model';

export namespace Auth {
  export type ILoginRequest = {
    email: string;
    password: string;
  };
  export type IRegisterRequest = {
    name: string;
    email: string;
    cpf: string;
    password: string;
    churchId: string;
    positionIds: string[];
  };
  export type ICreateUserWithRandomPasswordRequest = {
    name: string;
    email: string;
    cpf: string;
    positionIds: string[];
  };
  export type IRegisterResponse = UserModel & {};
}
