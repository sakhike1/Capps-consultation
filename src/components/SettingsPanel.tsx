import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Settings, X, Calendar, Package, Clock, Edit2, Save, AlertTriangle } from 'lucide-react';
import useRequestStore from '../store/requestStore';
import useAuthStore from '../store/authStore';
import toast from 'react-hot-toast';

interface SettingsPanelProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SettingsPanel({ isOpen, onClose }: SettingsPanelProps) {
  const user = useAuthStore((state) => state.user);
  const { requests, updateRequest } = useRequestStore();
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editForm, setEditForm] = useState({
    date: '',
    time: '',
    package: ''
  });

  const userRequests = requests.filter(request => request.userId === user?.id);

  const handleEdit = (request: any) => {
    setEditingId(request.id);
    setEditForm({
      date: request.date || '',
      time: request.time || '',
      package: request.package || ''
    });
  };

  const handleSave = (id: string) => {
    updateRequest(id, editForm);
    setEditingId(null);
    toast.success('Request updated successfully');
  };

  const handleCancel = () => {
    setEditingId(null);
    setEditForm({ date: '', time: '', package: '' });
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="fixed right-4 top-20 w-96 bg-white rounded-xl shadow-xl z-50"
          >
            <div className="p-4 border-b border-gray-100 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Settings className="h-5 w-5 text-gray-600" />
                <h3 className="font-semibold">Settings & Requests</h3>
              </div>
              <button
                onClick={onClose}
                className="text-gray-400 hover:text-gray-600"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="p-4">
              <div className="mb-6">
                <h4 className="text-lg font-semibold mb-2">Your Requests</h4>
                {userRequests.length === 0 ? (
                  <p className="text-gray-500 text-sm">No requests found</p>
                ) : (
                  <div className="space-y-4">
                    {userRequests.map((request) => (
                      <div
                        key={request.id}
                        className="bg-gray-50 rounded-lg p-4"
                      >
                        {editingId === request.id ? (
                          <div className="space-y-3">
                            <div>
                              <label className="block text-sm font-medium text-gray-700 mb-1">
                                Date
                              </label>
                              <input
                                type="date"
                                value={editForm.date}
                                onChange={(e) => setEditForm({ ...editForm, date: e.target.value })}
                                className="w-full px-3 py-2 border rounded-md"
                              />
                            </div>
                            <div>
                              <label className="block text-sm font-medium text-gray-700 mb-1">
                                Time
                              </label>
                              <input
                                type="time"
                                value={editForm.time}
                                onChange={(e) => setEditForm({ ...editForm, time: e.target.value })}
                                className="w-full px-3 py-2 border rounded-md"
                              />
                            </div>
                            <div>
                              <label className="block text-sm font-medium text-gray-700 mb-1">
                                Package
                              </label>
                              <select
                                value={editForm.package}
                                onChange={(e) => setEditForm({ ...editForm, package: e.target.value })}
                                className="w-full px-3 py-2 border rounded-md"
                              >
                                <option value="">Select Package</option>
                                <option value="basic">Basic</option>
                                <option value="professional">Professional</option>
                                <option value="enterprise">Enterprise</option>
                              </select>
                            </div>
                            <div className="flex justify-end gap-2 mt-3">
                              <button
                                onClick={() => handleCancel()}
                                className="px-3 py-1 text-sm text-gray-600 hover:text-gray-800"
                              >
                                Cancel
                              </button>
                              <button
                                onClick={() => handleSave(request.id)}
                                className="px-3 py-1 text-sm bg-blue-600 text-white rounded-md hover:bg-blue-700 flex items-center gap-1"
                              >
                                <Save className="h-4 w-4" /> Save
                              </button>
                            </div>
                          </div>
                        ) : (
                          <>
                            <div className="flex justify-between items-start mb-2">
                              <div>
                                <h5 className="font-medium">{request.type}</h5>
                                <p className="text-sm text-gray-500">
                                  {new Date(request.createdAt).toLocaleDateString()}
                                </p>
                              </div>
                              <button
                                onClick={() => handleEdit(request)}
                                className="p-1 text-gray-400 hover:text-gray-600"
                              >
                                <Edit2 className="h-4 w-4" />
                              </button>
                            </div>
                            <div className="space-y-1 text-sm">
                              <div className="flex items-center gap-2 text-gray-600">
                                <Calendar className="h-4 w-4" />
                                <span>{request.date || 'No date set'}</span>
                              </div>
                              <div className="flex items-center gap-2 text-gray-600">
                                <Clock className="h-4 w-4" />
                                <span>{request.time || 'No time set'}</span>
                              </div>
                              <div className="flex items-center gap-2 text-gray-600">
                                <Package className="h-4 w-4" />
                                <span>{request.package || 'No package selected'}</span>
                              </div>
                            </div>
                          </>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}