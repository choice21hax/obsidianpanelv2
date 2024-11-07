import React, { useState } from 'react';
import { Play, Square, Terminal, HardDrive } from 'lucide-react';

const Servers = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [consoleOutput, setConsoleOutput] = useState<string[]>([
    '> Starting server...',
    '> Loading world...',
    '> Server ready on port 25565',
  ]);

  const toggleServer = () => {
    setIsRunning(!isRunning);
    setConsoleOutput(prev => [
      ...prev,
      `> Server ${!isRunning ? 'started' : 'stopped'} at ${new Date().toLocaleTimeString()}`,
    ]);
  };

  return (
    <div className="animate-fade-in">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Server Management</h1>
        <div className="flex gap-4">
          <button
            onClick={toggleServer}
            className={`flex items-center px-4 py-2 rounded-lg transition-colors ${
              isRunning
                ? 'bg-red-500 hover:bg-red-600'
                : 'bg-green-500 hover:bg-green-600'
            }`}
          >
            {isRunning ? (
              <>
                <Square className="w-5 h-5 mr-2" />
                Stop Server
              </>
            ) : (
              <>
                <Play className="w-5 h-5 mr-2" />
                Start Server
              </>
            )}
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <div className="bg-background-light rounded-xl border border-background-dark p-4 h-[500px] flex flex-col">
            <div className="flex items-center mb-4">
              <Terminal className="w-5 h-5 mr-2 text-primary" />
              <h2 className="text-lg font-semibold">Console</h2>
            </div>
            <div className="flex-1 bg-background overflow-y-auto rounded p-4 font-mono text-sm">
              {consoleOutput.map((line, index) => (
                <div key={index} className="mb-1">
                  {line}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-background-light rounded-xl border border-background-dark p-6">
            <div className="flex items-center mb-4">
              <HardDrive className="w-5 h-5 mr-2 text-primary" />
              <h2 className="text-lg font-semibold">Docker Stats</h2>
            </div>
            <div className="space-y-4">
              <div>
                <p className="text-gray-400 mb-1">CPU Usage</p>
                <div className="w-full bg-background rounded-full h-2">
                  <div className="bg-primary h-2 rounded-full" style={{ width: '45%' }}></div>
                </div>
                <p className="text-sm mt-1">45%</p>
              </div>
              <div>
                <p className="text-gray-400 mb-1">Memory Usage</p>
                <div className="w-full bg-background rounded-full h-2">
                  <div className="bg-primary h-2 rounded-full" style={{ width: '60%' }}></div>
                </div>
                <p className="text-sm mt-1">1.2GB / 2GB</p>
              </div>
              <div>
                <p className="text-gray-400 mb-1">Storage Usage</p>
                <div className="w-full bg-background rounded-full h-2">
                  <div className="bg-primary h-2 rounded-full" style={{ width: '30%' }}></div>
                </div>
                <p className="text-sm mt-1">15GB / 50GB</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Servers;