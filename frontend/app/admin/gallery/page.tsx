'use client';

import { Plus, Edit, Trash2 } from 'lucide-react';

export default function GalleryManagement() {
  const [images] = useState([
    { id: '1', title: 'Classroom Activity', uploaded: '2026-09-10' },
    { id: '2', title: 'School Event', uploaded: '2026-09-08' },
  ]);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-display font-bold text-navy-900">Gallery Management</h1>
        <button className="flex items-center px-6 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700">
          <Plus className="h-5 w-5 mr-2" />
          Upload Images
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {images.map((image) => (
          <div key={image.id} className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="h-48 bg-navy-100" />
            <div className="p-4">
              <h3 className="font-semibold text-navy-900 mb-2">{image.title}</h3>
              <p className="text-sm text-navy-600 mb-4">Uploaded {image.uploaded}</p>
              <div className="flex space-x-2">
                <button className="flex-1 flex items-center justify-center p-2 hover:bg-navy-100 rounded-lg transition-colors">
                  <Edit className="h-4 w-4 text-primary-600" />
                </button>
                <button className="flex-1 flex items-center justify-center p-2 hover:bg-navy-100 rounded-lg transition-colors">
                  <Trash2 className="h-4 w-4 text-red-600" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function useState<T>(initialState: T): [T, (value: T) => void] {
  return [initialState, () => {}];
}
