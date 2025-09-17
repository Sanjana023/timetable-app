import { NavLink } from 'react-router-dom';
import { BookOpen, Users, FileText, UserCheck } from 'lucide-react';

export default function Sidebar({ active }) {
  const items = [
    { name: 'Universities', icon: BookOpen, path: '/universities' },
    { name: 'Programs', icon: Users, path: '/programs' },
    { name: 'Streams', icon: FileText, path: '/streams' },
    { name: 'Sections', icon: UserCheck, path: '/sections' },
    { name: 'Subjects', icon: BookOpen, path: '/subjects' },
    { name: 'Class Settings', icon: FileText, path: '/class-settings' },
  ];

  return (
    <div className="w-64 h-screen bg-gray-50 border-r border-gray-200 flex flex-col">
      <div className="p-4 text-xl font-bold flex items-center gap-2">
        <BookOpen className="w-6 h-6 text-emerald-600" />
        Admin Panel
      </div>
      <nav className="mt-6 flex flex-col gap-1">
        {items.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-2 rounded-md transition ${
                isActive ? 'bg-emerald-600 text-white' : 'text-gray-600 hover:bg-gray-100'
              }`
            }
          >
            <item.icon
              className={`w-5 h-5 ${active === item.name ? 'text-white' : 'text-gray-600'}`}
            />
            {item.name}
          </NavLink>
        ))}
      </nav>
    </div>
  );
}
