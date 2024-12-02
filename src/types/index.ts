export interface User {
  id: string;
  email: string;
  name: string;
}

export interface Request {
  id: string;
  userId: string;
  type: 'ui/ux' | 'frontend';
  description: string;
  status: 'pending' | 'in-progress' | 'completed';
  createdAt: string;
  date?: string;
  time?: string;
  package?: string;
}

export interface AuthState {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  signup: (email: string, password: string, name: string) => Promise<void>;
  logout: () => void;
}

export interface RequestState {
  requests: Request[];
  createRequest: (request: Omit<Request, 'id' | 'userId' | 'createdAt' | 'status'>) => void;
  updateRequest: (id: string, updateData: Partial<Request>) => void;
  deleteRequest: (id: string) => void;
}