import React, { createContext, useContext, ReactNode, useEffect, useState } from 'react';
import { UserService } from '@/services/client/user.services';
import { UserStorage } from '@/storages/local/user.storage';
import { User } from '@/services/domain/user.types';
import { AuthCookie } from '@/storages/cookies/auth.cookies';

interface AuthContextProps {
  persistUser: (token: string) => void;
  user: User.IAuthenticatedUserResponse | undefined;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User.IAuthenticatedUserResponse | undefined>(undefined);

  const persistUser = async (token: string) => {
    const user = await UserService.getAuthenticatedUser();
    if (user) {
      UserStorage.setUser(user);
      setUser(user);
    }
  };

  const verifyAuth = () => {
    const token = AuthCookie.getToken();
    const localUser = UserStorage.getUser();
    if (token && localUser) {
      setUser(localUser);
    } else {
      AuthCookie.removeToken();
      UserStorage.removeUser();
    }
  };

  useEffect(() => {
    verifyAuth();
  }, []);

  return <AuthContext.Provider value={{ persistUser, user }}>{children}</AuthContext.Provider>;
};

export const useAuth = (): AuthContextProps => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
