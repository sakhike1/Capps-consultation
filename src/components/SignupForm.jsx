import React from 'react';
import { UserPlus } from 'lucide-react';

export default function SignupForm({
    email,
    setEmail,
    password,
    setPassword,
    name,
    setName,
    error,
    onSubmit
}) {
    return (
        <form onSubmit={onSubmit} className="space-y-4">
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                    Name
                </label>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-3 py-1.5 border border-gray-300 rounded-lg"
                    required
                />
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                </label>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3 py-1.5 border border-gray-300 rounded-lg"
                    required
                />
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                    Password
                </label>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-3 py-1.5 border border-gray-300 rounded-lg"
                    required
                />
            </div>

            {error && (
                <div className="mb-3 p-2 bg-red-50 text-red-700 rounded-lg text-sm">
                    {error}
                </div>
            )}

            <button
                type="submit"
                className="w-full bg-gradient-to-r from-gray-400 via-gray-600 to-blue-800 text-white py-1.5 px-4 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
            >
                <UserPlus size={20} /> Create Account
            </button>
        </form>
    );
}