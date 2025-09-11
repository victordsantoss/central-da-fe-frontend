export type UserModel = {
  id: string;
  name: string;
  email: string;
  cpf: string;
  isActive: boolean;
  provider: string;
  birthDate: Date | null;
  positionIds: string[];
  createdAt: Date;
  updatedAt: Date;
  roleId: string;
};
