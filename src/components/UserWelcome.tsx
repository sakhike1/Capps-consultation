import React, { useState } from 'react';
import { User, Bell, Settings } from 'lucide-react';
import useAuthStore from '../store/authStore';
import useRequestStore from '../store/requestStore';
import useNotificationStore from '../store/notificationStore';
import NotificationPanel from './NotificationPanel';
import BillingPanel from './BillingPanel';
import SettingsPanel from './SettingsPanel';

export default function UserWelcome() {
  const [showNotifications, setShowNotifications] = useState(false);
  const [showBilling, setShowBilling] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  
  const user = useAuthStore((state) => state.user);
  const requests = useRequestStore((state) => state.requests);
  const notifications = useNotificationStore((state) => state.notifications);
  
  const userRequests = requests.filter(request => request.userId === user?.id);
  const requestCount = userRequests.length;
  const unreadCount = notifications.filter(n => !n.read).length;

  const handleBillingClick = () => {
    setShowNotifications(false);
    setShowBilling(true);
    setShowSettings(false);
  };

  return (
    <>
      <div className="bg-[conic-gradient(at_bottom_left,_var(--tw-gradient-stops))] from-cyan-100 via-red-50 to-neutral-950 rounded-xl shadow-lg p-6 mb-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="bg-white
             text-black p-3 rounded-full">
              <User className="h-6 w-6" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">
                Welcome back, {user?.name}!
              </h1>
              <p className="text-gray-700">
                You have {requestCount || '0'} active {requestCount === 1 ? 'request' : 'requests'}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={() => setShowNotifications(true)}
              className="p-2 text-gray-600 hover:bg-gray-100 rounded-full transition-colors relative"
            >
              <Bell className="h-6 w-6" />
              {unreadCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                  {unreadCount}
                </span>
              )}
            </button>
            <button
              onClick={() => setShowSettings(true)}
              className="p-2 text-gray-600 hover:bg-gray-100 rounded-full transition-colors"
            >
              <Settings className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>

      <NotificationPanel
        isOpen={showNotifications}
        onClose={() => setShowNotifications(false)}
        onBillingClick={handleBillingClick}
      />
      
      <BillingPanel
        isOpen={showBilling}
        onClose={() => setShowBilling(false)}
      />

      <SettingsPanel
        isOpen={showSettings}
        onClose={() => setShowSettings(false)}
      />
    </>
  );
}