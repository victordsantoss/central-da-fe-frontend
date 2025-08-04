import { api } from '@/configs/api';
import { User } from '../domain/user.types';

export const UserService = {
  getAuthenticatedUser: async (): Promise<User.IAuthenticatedUserResponse> => {
    const { data } = await api.get('/user');
    return data;
  },
};
