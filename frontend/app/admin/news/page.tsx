'use client';

import { useState } from 'react';
import { Plus, Edit, Trash2, Eye } from 'lucide-react';

export default function NewsManagement() {
  const [news, setNews] = useState([
    { id: '1', title: 'Welcome to AES', excerpt: 'Learn about our mission...', published: true, created: '2026-09-10' },
    { id: '2', title: 'New Program Launch', excerpt: 'Exciting new initiative...', published: true, created: '2026-09-08' },
  ]);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-display font-bold text-navy-900">News Management</h1>
        <button className="flex items-center px-6 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700">
          <Plus className="h-5 w-5 mr-2" />
          New Post
        </button>
      </div>

      <div className="bg-white rounded-xl shadow-md overflow-hidden">
        <table className="w-full">
          <thead className="bg-navy-50 border-b border-navy-200">
            <tr>
              <th className="px-6 py-4 text-left text-sm font-semibold text-navy-900">Title</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-navy-900">Status</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-navy-900">Created</th>
              <th className="px-6 py-4 text-right text-sm font-semibold text-navy-900">Actions</th>
            </tr>
          </thead>
          <tbody>
            {news.map((post) => (
              <tr key={post.id} className="border-b border-navy-100 hover:bg-navy-50">
                <td className="px-6 py-4">
                  <p className="font-medium text-navy-900">{post.title}</p>
                  <p className="text-sm text-navy-600">{post.excerpt}</p>
                </td>
                <td className="px-6 py-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${post.published ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}`}>
                    {post.published ? 'Published' : 'Draft'}
                  </span>
                </td>
                <td className="px-6 py-4 text-navy-600">{post.created}</td>
                <td className="px-6 py-4 text-right">
                  <div className="flex items-center justify-end space-x-2">
                    <button className="p-2 hover:bg-navy-100 rounded-lg transition-colors">
                      <Eye className="h-4 w-4 text-navy-600" />
                    </button>
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
