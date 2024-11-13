import create from 'zustand';

interface User {
  id: string;
  email: string;
  role: 'customer' | 'pharmacy' | 'admin';
  name: string;
  verified: boolean;
}

interface AuthStore {
  user: User | null;
  setUser: (user: User | null) => void;
}

export const useAuthStore = create<AuthStore>((set) => ({
  user: null,
  setUser: (user) => set({ user }),
}));