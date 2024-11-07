import React from 'react';
import { CpuIcon, HardDrive, Activity } from 'lucide-react';

const Dashboard = () => {
  return (
    <div className="animate-fade-in">
      <h1 className="text-3xl font-bold mb-8">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-background-light p-6 rounded-xl border border-background-dark">
          <div className="flex items-center mb-4">
            <CpuIcon className="w-6 h-6 text-primary mr-3" />
            <h2 className="text-xl font-semibold">CPU Usage</h2>
          </div>
          <p className="text-2xl font-bold">45%</p>
        </div>
        <div className="bg-background-light p-6 rounded-xl border border-background-dark">
          <div className="flex items-center mb-4">
            <HardDrive className="w-6 h-6 text-primary mr-3" />
            <h2 className="text-xl font-semibold">Storage</h2>
          </div>
          <p className="text-2xl font-bold">234 GB / 500 GB</p>
        </div>
        <div className="bg-background-light p-6 rounded-xl border border-background-dark">
          <div className="flex items-center mb-4">
            <Activity className="w-6 h-6 text-primary mr-3" />
            <h2 className="text-xl font-semibold">Server Status</h2>
          </div>
          <p className="text-2xl font-bold text-green-500">Online</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;