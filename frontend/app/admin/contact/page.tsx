'use client';

import { Check, Trash2, Archive } from 'lucide-react';

export default function ContactManagement() {
  const [submissions] = useState([
    { id: '1', name: 'Ali Ahmed', email: 'ali@example.com', subject: 'Inquiry', status: 'unread', date: '2026-09-13' },
    { id: '2', name: 'Fatima Hassan', email: 'fatima@example.com', subject: 'Volunteer', status: 'read', date: '2026-09-12' },
  ]);

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-display font-bold text-navy-900">Contact Submissions</h1>

      <div className="bg-white rounded-xl shadow-md overflow-hidden">
        <table className="w-full">
          <thead className="bg-navy-50 border-b border-navy-200">
            <tr>
              <th className="px-6 py-4 text-left text-sm font-semibold text-navy-900">Name</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-navy-900">Subject</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-navy-900">Status</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-navy-900">Date</th>
              <th className="px-6 py-4 text-right text-sm font-semibold text-navy-900">Actions</th>
            </tr>
          </thead>
          <tbody>
            {submissions.map((sub) => (
              <tr key={sub.id} className="border-b border-navy-100 hover:bg-navy-50">
                <td className="px-6 py-4">
                  <p className="font-medium text-navy-900">{sub.name}</p>
                  <p className="text-sm text-navy-600">{sub.email}</p>
                </td>
                <td className="px-6 py-4 text-navy-700">{sub.subject}</td>
                <td className="px-6 py-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${sub.status === 'unread' ? 'bg-yellow-100 text-yellow-700' : 'bg-green-100 text-green-700'}`}>
                    {sub.status === 'unread' ? 'Unread' : 'Read'}
                  </span>
                </td>
                <td className="px-6 py-4 text-navy-600">{sub.date}</td>
                <td className="px-6 py-4 text-right">
                  <div className="flex items-center justify-end space-x-2">
                    <button className="p-2 hover:bg-navy-100 rounded-lg transition-colors">
                      <Check className="h-4 w-4 text-green-600" />
                    </button>
                    <button className="p-2 hover:bg-navy-100 rounded-lg transition-colors">
                      <Archive className="h-4 w-4 text-primary-600" />
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
