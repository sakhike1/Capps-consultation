import React, { useState } from 'react';
import { Send } from 'lucide-react';
import useRequestStore from '../store/requestStore';

export default function RequestForm() {
  const [type, setType] = useState<'ui/ux' | 'frontend'>('ui/ux');
  const [description, setDescription] = useState('');
  
  const { createRequest } = useRequestStore();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    createRequest({ type, description });
    setDescription('');
  };
  
  return (
    <form onSubmit={handleSubmit} className="bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-pink-400 via-slate-100 to-indigo-200 shadow-2xl rounded-lg  p-6">
      <h3 className="text-xl font-semibold mb-4">Create New Request</h3>
      
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Service Type
        </label>
        <select
          value={type}
          onChange={(e) => setType(e.target.value as 'ui/ux' | 'frontend')}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg "
        >
          <option value="ui/ux">UI/UX Design</option>
          <option value="frontend">Frontend Development</option>
        </select>
      </div>
      
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Project Description
        </label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg   h-32"
          placeholder="Describe your project requirements..."
          required
        />
      </div>
      
      <button
        type="submit"
        className="w-full bg-white text-black py-2 px-4 rounded-lg hover:shadow-2xl transition-colors flex items-center justify-center gap-2"
      >
        <Send size={20} /> Submit Request
      </button>
    </form>
  );
}