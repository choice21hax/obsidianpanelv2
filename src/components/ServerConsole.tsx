import React, { useRef, useEffect } from 'react';
import { Terminal } from 'lucide-react';

interface ServerConsoleProps {
  logs: string[];
}

const ServerConsole = ({ logs }: ServerConsoleProps) => {
  const consoleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (consoleRef.current) {
      consoleRef.current.scrollTop = consoleRef.current.scrollHeight;
    }
  }, [logs]);

  return (
    <div className="bg-background-dark rounded-lg border border-background-light">
      <div className="flex items-center gap-2 px-4 py-2 border-b border-background-light">
        <Terminal className="w-4 h-4 text-primary" />
        <h3 className="text-sm font-medium">Console Output</h3>
      </div>
      <div
        ref={consoleRef}
        className="h-[400px] overflow-y-auto p-4 font-mono text-sm"
      >
        {logs.map((log, index) => (
          <div key={index} className="text-gray-300">
            <span className="text-gray-500">[{new Date().toLocaleTimeString()}]</span>{' '}
            {log}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServerConsole;