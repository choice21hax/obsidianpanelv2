import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, Server, ShoppingCart, Settings } from 'lucide-react';

const Sidebar = () => {
  const navItems = [
    { path: '/', icon: Home, label: 'Dashboard' },
    { path: '/servers', icon: Server, label: 'Servers' },
    { path: '/shop', icon: ShoppingCart, label: 'Shop' },
    { path: '/settings', icon: Settings, label: 'Settings' },
  ];

  return (
    <aside className="w-64 bg-background-light border-r border-background-dark p-4">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-primary">Obsidian Panel</h1>
      </div>
      <nav>
        {navItems.map(({ path, icon: Icon, label }) => (
          <NavLink
            key={path}
            to={path}
            className={({ isActive }) =>
              `flex items-center p-3 rounded-lg mb-2 transition-colors ${
                isActive
                  ? 'bg-primary text-white'
                  : 'text-gray-400 hover:bg-background-dark hover:text-primary'
              }`
            }
          >
            <Icon className="w-5 h-5 mr-3" />
            <span>{label}</span>
          </NavLink>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;