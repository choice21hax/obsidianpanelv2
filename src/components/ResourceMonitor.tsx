import React from 'react';
import { Cpu, Memory, HardDrive, Activity } from 'lucide-react';

interface ResourceStats {
  cpu: number;
  memory: number;
  disk: number;
  uptime: string;
}

interface ResourceMonitorProps {
  stats: ResourceStats;
}

const ResourceMonitor = ({ stats }: ResourceMonitorProps) => {
  const resources = [
    { icon: Cpu, label: 'CPU Usage', value: `${stats.cpu}%`, color: 'bg-blue-500' },
    { icon: Memory, label: 'Memory', value: `${stats.memory}%`, color: 'bg-green-500' },
    { icon: HardDrive, label: 'Disk', value: `${stats.disk}%`, color: 'bg-purple-500' },
    { icon: Activity, label: 'Uptime', value: stats.uptime, color: 'bg-yellow-500' },
  ];

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
      {resources.map((resource) => (
        <div
          key={resource.label}
          className="bg-background-light p-4 rounded-lg border border-background-dark"
        >
          <div className="flex items-center gap-3">
            <div className={`p-2 rounded-lg ${resource.color}`}>
              <resource.icon className="w-4 h-4 text-white" />
            </div>
            <div>
              <p className="text-xs text-gray-400">{resource.label}</p>
              <p className="text-sm font-semibold">{resource.value}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ResourceMonitor;