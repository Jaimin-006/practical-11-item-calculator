  import React, { useState } from 'react';

function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-6">
      <h1 className="text-2xl font-bold text-slate-800 mb-1">Contact Support</h1>
      <p className="text-slate-500 text-xs mb-4">Have questions or inquiries? Reach out to our team below.</p>

      {submitted ? (
        <div className="p-3 bg-green-50 border border-green-200 text-green-800 rounded text-xs font-semibold">
          ✓ Thank you! Your message has been received.
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-3 max-w-md">
          <div>
            <label className="block text-xs font-medium text-slate-700 mb-1">Your Name</label>
            <input
              type="text"
              required
              placeholder="e.g. Jaiminpuri Bava"
              className="w-full p-2 border border-slate-300 rounded text-xs focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-xs font-medium text-slate-700 mb-1">Email Address</label>
            <input
              type="email"
              required
              placeholder="e.g. jaiminpuri@example.com"
              className="w-full p-2 border border-slate-300 rounded text-xs focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-xs font-medium text-slate-700 mb-1">Message</label>
            <textarea
              required
              rows="3"
              placeholder="Type your message..."
              className="w-full p-2 border border-slate-300 rounded text-xs focus:outline-none focus:ring-1 focus:ring-blue-500"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded text-xs font-medium transition"
          >
            Send Message
          </button>
        </form>
      )}
    </div>
  );
}

export default Contact;
