'use client';

import { Plus, Edit, Trash2 } from 'lucide-react';

export default function StaffManagement() {
  const [staff] = useState([
    { id: '1', name: 'Dr. Sarah Johnson', position: 'Principal', category: 'administration' },
    { id: '2', name: 'Mr. Ahmed Hassan', position: 'English Teacher', category: 'teachers' },
  ]);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-display font-bold text-navy-900">Staff Management</h1>
        <button className="flex items-center px-6 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700">
          <Plus className="h-5 w-5 mr-2" />
          Add Staff
        </button>
      </div>

      <div className="bg-white rounded-xl shadow-md overflow-hidden">
        <table className="w-full">
          <thead className="bg-navy-50 border-b border-navy-200">
            <tr>
              <th className="px-6 py-4 text-left text-sm font-semibold text-navy-900">Name</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-navy-900">Position</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-navy-900">Category</th>
              <th className="px-6 py-4 text-right text-sm font-semibold text-navy-900">Actions</th>
            </tr>
          </thead>
          <tbody>
            {staff.map((member) => (
              <tr key={member.id} className="border-b border-navy-100 hover:bg-navy-50">
                <td className="px-6 py-4 font-medium text-navy-900">{member.name}</td>
                <td className="px-6 py-4 text-navy-600">{member.position}</td>
                <td className="px-6 py-4">
                  <span className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium capitalize">
                    {member.category}
                  </span>
                </td>
                <td className="px-6 py-4 text-right">
                  <div className="flex items-center justify-end space-x-2">
                    <button className="p-2 hover:bg-navy-100 rounded-lg transition-colors">
                      <Edit className="h-4 w-4 text-primary-600" />
                    </button>
                    <button className="p-2 hover:bg-navy-100 rounded-lg transition-colors">
                      <Trash2 className="h-4 w-4 text-red-600" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function useState<T>(initialState: T): [T, (value: T) => void] {
  return [initialState, () => {}];
}
