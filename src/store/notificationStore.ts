import { create } from 'zustand';

export interface Notification {
  id: string;
  title: string;
  message: string;
  type: 'info' | 'warning' | 'success' | 'billing';
  read: boolean;
  createdAt: string;
}

interface NotificationState {
  notifications: Notification[];
  addNotification: (notification: Omit<Notification, 'id' | 'read' | 'createdAt'>) => void;
  markAsRead: (id: string) => void;
  clearNotifications: () => void;
}

const useNotificationStore = create<NotificationState>((set) => ({
  notifications: [],
  
  addNotification: (notification) => {
    const newNotification: Notification = {
      id: crypto.randomUUID(),
      read: false,
      createdAt: new Date().toISOString(),
      ...notification,
    };
    
    set((state) => ({
      notifications: [newNotification, ...state.notifications],
    }));
  },
  
  markAsRead: (id) => {
    set((state) => ({
      notifications: state.notifications.map((notification) =>
        notification.id === id ? { ...notification, read: true } : notification
      ),
    }));
  },
  
  clearNotifications: () => {
    set({ notifications: [] });
  },
}));

export default useNotificationStore;