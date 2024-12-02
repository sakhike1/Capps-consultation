import { create } from 'zustand';
import { AuthState, User } from '../types';
import { sendWelcomeNotification } from '../utils/notifications';

// Simulating a database with localStorage
const USERS_KEY = 'capps_users';
const CURRENT_USER_KEY = 'capps_current_user';

const getUsers = (): Record<string, { password: string } & User> =>
  JSON.parse(localStorage.getItem(USERS_KEY) || '{}');

const useAuthStore = create<AuthState>((set) => ({
  user: JSON.parse(localStorage.getItem(CURRENT_USER_KEY) || 'null'),
  
  login: async (email: string, password: string) => {
    const users = getUsers();
    const user = Object.values(users).find(
      (u) => u.email === email && u.password === password
    );
    
    if (!user) {
      throw new Error('Invalid credentials');
    }
    
    const { password: _, ...userWithoutPassword } = user;
    localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(userWithoutPassword));
    set({ user: userWithoutPassword });
  },
  
  signup: async (email: string, password: string, name: string) => {
    const users = getUsers();
    
    if (Object.values(users).some((u) => u.email === email)) {
      throw new Error('Email already exists');
    }
    
    const newUser = {
      id: crypto.randomUUID(),
      email,
      password,
      name,
    };
    
    users[newUser.id] = newUser;
    localStorage.setItem(USERS_KEY, JSON.stringify(users));
    
    const { password: _, ...userWithoutPassword } = newUser;
    localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(userWithoutPassword));
    set({ user: userWithoutPassword });
    
    // Send welcome notification
    sendWelcomeNotification(name);
  },
  
  logout: () => {
    localStorage.removeItem(CURRENT_USER_KEY);
    set({ user: null });
  },
}));

export default useAuthStore;