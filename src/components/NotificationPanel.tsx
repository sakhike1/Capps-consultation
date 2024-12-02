import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bell, X, CreditCard, Info, AlertTriangle, CheckCircle } from 'lucide-react';
import useNotificationStore from '../store/notificationStore';

interface NotificationPanelProps {
  isOpen: boolean;
  onClose: () => void;
  onBillingClick: () => void;
}

export default function NotificationPanel({ isOpen, onClose, onBillingClick }: NotificationPanelProps) {
  const { notifications, markAsRead } = useNotificationStore();

  const getIcon = (type: string) => {
    switch (type) {
      case 'billing':
        return <CreditCard className="h-5 w-5 text-purple-500" />;
      case 'warning':
        return <AlertTriangle className="h-5 w-5 text-yellow-500" />;
      case 'success':
        return <CheckCircle className="h-5 w-5 text-green-500" />;
      default:
        return <Info className="h-5 w-5 text-blue-500" />;
    }
  };

  const handleNotificationClick = (id: string, type: string) => {
    markAsRead(id);
    if (type === 'billing') {
      onBillingClick();
    }
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
                <Bell className="h-5 w-5 text-gray-600" />
                <h3 className="font-semibold">Notifications</h3>
              </div>
              <button
                onClick={onClose}
                className="text-gray-400 hover:text-gray-600"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            
            <div className="max-h-[70vh] overflow-y-auto">
              {notifications.length === 0 ? (
                <div className="p-4 text-center text-gray-500">
                  No notifications yet
                </div>
              ) : (
                notifications.map((notification) => (
                  <motion.div
                    key={notification.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`p-4 border-b border-gray-100 cursor-pointer hover:bg-gray-50 transition-colors ${
                      notification.read ? 'opacity-60' : ''
                    }`}
                    onClick={() => handleNotificationClick(notification.id, notification.type)}
                  >
                    <div className="flex gap-3">
                      {getIcon(notification.type)}
                      <div>
                        <h4 className="font-medium text-gray-900">
                          {notification.title}
                        </h4>
                        <p className="text-sm text-gray-600">
                          {notification.message}
                        </p>
                        <p className="text-xs text-gray-400 mt-1">
                          {new Date(notification.createdAt).toLocaleDateString()}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}