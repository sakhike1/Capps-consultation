import React, { useMemo, useState } from 'react';
import { Clock, CheckCircle, RefreshCw, Trash2, AlertCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import useRequestStore from '../store/requestStore';
import useAuthStore from '../store/authStore';

export default function RequestList() {
  const user = useAuthStore((state) => state.user);
  const { requests, deleteRequest } = useRequestStore();
  const [deleteConfirm, setDeleteConfirm] = useState<string | null>(null);
  
  const filteredRequests = useMemo(() => 
    requests.filter((request) => request.userId === user?.id),
    [requests, user?.id]
  );
  
  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'pending':
        return <Clock className="text-white
        " />;
      case 'in-progress':
        return <RefreshCw className="text-blue-500" />;
      case 'completed':
        return <CheckCircle className="text-green-500" />;
      default:
        return null;
    }
  };

  const handleDelete = (id: string) => {
    setDeleteConfirm(id);
  };

  const confirmDelete = (id: string) => {
    deleteRequest(id);
    setDeleteConfirm(null);
  };
  
  if (!user) {
    return null;
  }
  
  if (filteredRequests.length === 0) {
    return (
      <div className="text-center text-xs mr-[520px] text-gray-100">
        No requests yet. Create your first request above!
      </div>
    );
  }
  
  return (
    <div className="space-y-4">
      <AnimatePresence>
        {filteredRequests.map((request) => (
          <motion.div
            key={request.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, x: -100 }}
            className="bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-emerald-500 via-neutral-50 to-zinc-50 rounded-lg shadow-md p-6 hover:shadow-lg scale-75 translate-x-4 skew-y-3 md:transform-none transition-shadow relative"
          >
            <div className="flex items-center justify-between mb-4">
              <span className="text-lg font-semibold capitalize">
                {request.type} Services
              </span>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  {getStatusIcon(request.status)}
                  <span className="text-sm capitalize text-gray-900">
                    {request.status}
                  </span>
                </div>
                {deleteConfirm === request.id ? (
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => confirmDelete(request.id)}
                      className="text-red-600 hover:text-red-700 p-1 rounded-full hover:bg-red-50 transition-colors"
                    >
                      <AlertCircle className="h-5 w-5" />
                    </button>
                    <button
                      onClick={() => setDeleteConfirm(null)}
                      className="text-gray-600 hover:text-gray-700 p-1 rounded-full hover:bg-gray-50 transition-colors"
                    >
                      ✕
                    </button>
                  </div>
                ) : (
                  <button
                    onClick={() => handleDelete(request.id)}
                    className="text-gray-900 hover:text-red-600 p-1 rounded-full hover:bg-red-50 transition-colors"
                  >
                    <Trash2 className="h-5 w-5" />
                  </button>
                )}
              </div>
            </div>
            
            <p className="text-black mb-4">{request.description}</p>
            
            <div className="text-sm text-black">
              Submitted on {new Date(request.createdAt).toLocaleDateString()}
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}