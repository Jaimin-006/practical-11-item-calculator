import React from 'react';

function About() {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-6">
      <h1 className="text-2xl font-bold text-slate-800 mb-2">About Us</h1>
      <p className="text-slate-600 text-sm leading-relaxed mb-4">
        TechCorp Solutions is dedicated to delivering industry-grade software solutions, scalable web applications, and cutting-edge cloud infrastructure.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-4">
        <div className="p-3.5 bg-slate-50 border border-slate-200 rounded">
          <h3 className="font-semibold text-slate-800 text-sm mb-1">Our Mission</h3>
          <p className="text-xs text-slate-500">Empower students through practical real-world React development training.</p>
        </div>
        <div className="p-3.5 bg-slate-50 border border-slate-200 rounded">
          <h3 className="font-semibold text-slate-800 text-sm mb-1">Our Vision</h3>
          <p className="text-xs text-slate-500">Building intuitive UI/UX with modern React, Tailwind, and component architectures.</p>
        </div>
      </div>
    </div>
  );
}

export default About;
