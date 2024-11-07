import React from 'react';
import { Play, Square, RotateCw, Terminal as TerminalIcon } from 'lucide-react';

interface ServerControlsProps {
  isRunning: boolean;
  onStart: () => void;
  onStop: () => void;
  onRestart: () => void;
  onToggleConsole: () => void;
}

const ServerControls = ({
  isRunning,
  onStart,
  onStop,
  onRestart,
  onToggleConsole,
}: ServerControlsProps) => {
  return (
    <div className="flex items-center gap-2">
      {!isRunning ? (
        <button
          onClick={onStart}
          className="flex items-center gap-2 px-4 py-2 bg-green-500 hover:bg-green-600 rounded-lg transition-colors"
        >
          <Play className="w-4 h-4" />
          Start
        </button>
      ) : (
        <button
          onClick={onStop}
          className="flex items-center gap-2 px-4 py-2 bg-red-500 hover:bg-red-600 rounded-lg transition-colors"
        >
          <Square className="w-4 h-4" />
          Stop
        </button>
      )}
      
      <button
        onClick={onRestart}
        disabled={!isRunning}
        className="flex items-center gap-2 px-4 py-2 bg-yellow-500 hover:bg-yellow-600 disabled:opacity-50 disabled:cursor-not-allowed rounded-lg transition-colors"
      >
        <RotateCw className="w-4 h-4" />
        Restart
      </button>
      
      <button
        onClick={onToggleConsole}
        className="flex items-center gap-2 px-4 py-2 bg-primary hover:bg-primary-dark rounded-lg transition-colors"
      >
        <TerminalIcon className="w-4 h-4" />
        Toggle Console
      </button>
    </div>
  );
};

export default ServerControls;