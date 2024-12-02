import { create } from 'zustand';
import { Request, RequestState } from '../types';
import useAuthStore from './authStore';
import toast from 'react-hot-toast';

const REQUESTS_KEY = 'capps_requests';

const getStoredRequests = (): Request[] =>
  JSON.parse(localStorage.getItem(REQUESTS_KEY) || '[]');

const useRequestStore = create<RequestState>((set, get) => ({
  requests: getStoredRequests(),
  
  createRequest: (requestData) => {
    const user = useAuthStore.getState().user;
    if (!user) return;
    
    const newRequest: Request = {
      id: crypto.randomUUID(),
      userId: user.id,
      status: 'pending',
      createdAt: new Date().toISOString(),
      ...requestData,
    };
    
    const updatedRequests = [...get().requests, newRequest];
    localStorage.setItem(REQUESTS_KEY, JSON.stringify(updatedRequests));
    set({ requests: updatedRequests });
    toast.success('Request created successfully');
  },

  updateRequest: (id: string, updateData: Partial<Request>) => {
    const updatedRequests = get().requests.map(request =>
      request.id === id ? { ...request, ...updateData } : request
    );
    localStorage.setItem(REQUESTS_KEY, JSON.stringify(updatedRequests));
    set({ requests: updatedRequests });
  },

  deleteRequest: (id: string) => {
    const updatedRequests = get().requests.filter(request => request.id !== id);
    localStorage.setItem(REQUESTS_KEY, JSON.stringify(updatedRequests));
    set({ requests: updatedRequests });
    toast.success('Request deleted successfully');
  }
}));

export default useRequestStore;