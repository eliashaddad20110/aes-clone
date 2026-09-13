'use client';

export default function AdminDashboard() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-display font-bold text-navy-900">Dashboard</h1>
        <p className="text-navy-600">Welcome back, Admin</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { label: 'Total Students', value: '175', change: '+2%' },
          { label: 'News Posts', value: '24', change: '+3' },
          { label: 'Staff Members', value: '50', change: 'Updated' },
          { label: 'Contact Messages', value: '15', change: '+5' },
        ].map((stat, i) => (
          <div key={i} className="bg-white rounded-xl shadow-md p-6">
            <h3 className="text-navy-600 text-sm font-medium mb-2">{stat.label}</h3>
            <p className="text-3xl font-bold text-navy-900">{stat.value}</p>
            <p className="text-green-600 text-sm font-medium mt-2">{stat.change}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-md p-6">
          <h2 className="text-lg font-semibold text-navy-900 mb-4">Quick Actions</h2>
          <div className="space-y-3">
            {['Create News Post', 'Add Staff Member', 'Upload Gallery Images', 'View Messages'].map(
              (action, i) => (
                <button
                  key={i}
                  className="w-full p-3 bg-navy-50 text-navy-700 rounded-lg hover:bg-navy-100 transition-colors text-left"
                >
                  {action}
                </button>
              )
            )}
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-md p-6">
          <h2 className="text-lg font-semibold text-navy-900 mb-4">Recent Activity</h2>
          <div className="space-y-3">
            {['News post published', 'New contact submission', 'Staff profile updated', 'Gallery image added'].map(
              (activity, i) => (
                <div key={i} className="flex items-center space-x-3 p-3 bg-navy-50 rounded-lg">
                  <div className="w-2 h-2 bg-primary-500 rounded-full" />
                  <p className="text-sm text-navy-700">{activity}</p>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
