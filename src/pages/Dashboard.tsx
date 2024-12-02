import React from 'react';
import RequestForm from '../components/RequestForm';
import RequestList from '../components/RequestList';
import UserWelcome from '../components/UserWelcome';
import PricingPackages from '../components/PricingPackages';
import useRequestStore from '../store/requestStore';
import useAuthStore from '../store/authStore';

export default function Dashboard() {
  const user = useAuthStore((state) => state.user);
  const requests = useRequestStore((state) => state.requests);
  const userRequests = requests.filter(request => request.userId === user?.id);
  const requestCount = userRequests.length;

  return (
    <main className="min-h-screen bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <UserWelcome />
        
        <div className="grid gap-8 lg:grid-cols-[350px,1fr]">
          <div className="space-y-8">
            <RequestForm />
          </div>
          
          <div className="space-y-8">
            <div>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold">Your Requests</h2>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                  Total: {requestCount || '0'}
                </span>
              </div>
              <RequestList />
            </div>
            
            <PricingPackages />
          </div>
        </div>
      </div>
    </main>
  );
}