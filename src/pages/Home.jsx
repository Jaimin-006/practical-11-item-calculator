import React from 'react';

function Home() {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-6">
      <h1 className="text-2xl font-bold text-slate-800 mb-2">Welcome to TechCorp</h1>
      <p className="text-slate-600 text-sm leading-relaxed mb-4">
        This single-page React application demonstrates client-side routing using <code className="bg-slate-100 text-blue-700 px-1.5 py-0.5 rounded text-xs font-mono">BrowserRouter</code>, <code className="bg-slate-100 text-blue-700 px-1.5 py-0.5 rounded text-xs font-mono">Routes</code>, <code className="bg-slate-100 text-blue-700 px-1.5 py-0.5 rounded text-xs font-mono">Route</code>, and <code className="bg-slate-100 text-blue-700 px-1.5 py-0.5 rounded text-xs font-mono">Link</code>.
      </p>
      <div className="p-3 bg-blue-50 border border-blue-200 rounded text-xs text-blue-800 font-medium">
        ⚡ Navigation occurs instantaneously without full-page browser reloads!
      </div>
    </div>
  );
}

export default Home;
