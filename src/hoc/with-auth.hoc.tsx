'use client';

import { AuthCookie } from '@/storages/cookies/auth.cookies';
import { UserStorage } from '@/storages/local/user.storage';
import { useRouter } from 'next/navigation';
import { FC, ComponentType, useEffect } from 'react';

export function withAuth<T extends Record<string, unknown>>(Component: ComponentType<T>): FC<T> {
  return function WithAuth(props: T) {
    const router = useRouter();

    useEffect(() => {
      const validateSession = async () => {
        // Aguarda um pouco para garantir que o cookie foi definido
        await new Promise(resolve => setTimeout(resolve, 100));
        const token = AuthCookie.getToken();
        if (!token) {
          UserStorage.removeUser();
          AuthCookie.removeToken();
          router.push('/login');
        }
      };

      validateSession();
    }, [router]);

    return <Component {...props} />;
  };
}
