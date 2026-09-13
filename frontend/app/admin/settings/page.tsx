'use client';

import { Save } from 'lucide-react';

export default function AdminSettings() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-display font-bold text-navy-900">Settings</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white rounded-xl shadow-md p-6">
            <h2 className="text-xl font-bold text-navy-900 mb-6">General Settings</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-navy-700 mb-2">School Name</label>
                <input type="text" defaultValue="Arab Episcopal School" className="w-full px-4 py-2 border border-navy-300 rounded-lg" />
              </div>
              <div>
                <label className="block text-sm font-medium text-navy-700 mb-2">School Email</label>
                <input type="email" defaultValue="info@aeschool.org" className="w-full px-4 py-2 border border-navy-300 rounded-lg" />
              </div>
              <div>
                <label className="block text-sm font-medium text-navy-700 mb-2">Phone Number</label>
                <input type="tel" defaultValue="+962-2-7240024" className="w-full px-4 py-2 border border-navy-300 rounded-lg" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6">
            <h2 className="text-xl font-bold text-navy-900 mb-6">Security</h2>
            <div className="space-y-4">
              <button className="w-full px-6 py-3 bg-navy-900 text-white font-semibold rounded-lg hover:bg-navy-800 transition-colors">
                Change Password
              </button>
              <button className="w-full px-6 py-3 bg-navy-50 text-navy-900 font-semibold rounded-lg hover:bg-navy-100 transition-colors border border-navy-300">
                Two-Factor Authentication
              </button>
            </div>
          </div>

          <button className="flex items-center px-6 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors">
            <Save className="h-5 w-5 mr-2" />
            Save Settings
          </button>
        </div>

        <div className="bg-white rounded-xl shadow-md p-6">
          <h2 className="text-xl font-bold text-navy-900 mb-6">Admin Info</h2>
          <div className="space-y-4">
            <div>
              <p className="text-sm text-navy-600">Current User</p>
              <p className="font-semibold text-navy-900">Administrator</p>
            </div>
            <div>
              <p className="text-sm text-navy-600">Role</p>
              <p className="font-semibold text-navy-900">Super Admin</p>
            </div>
            <div>
              <p className="text-sm text-navy-600">Last Login</p>
              <p className="font-semibold text-navy-900">Today, 10:30 AM</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
