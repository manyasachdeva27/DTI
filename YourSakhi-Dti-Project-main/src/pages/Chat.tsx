import React from 'react';

const Chat = () => {
  return (
    <div className="flex flex-col h-screen bg-white">
      {/* Header */}
      <div className="bg-sakhi-500 text-white p-4">
        <h1 className="text-2xl font-bold">Chat with YourSakhi</h1>
        <p className="text-sm opacity-90">Your personal AI health companion</p>
      </div>

      {/* Chat Container */}
      <div className="flex-grow relative">
        <iframe
          src="https://denser.ai/u/embed/5f4080d3-9d9d-4dfe-a537-7a605b9bb02d"
          className="w-full h-full border-none"
          style={{
            minHeight: "calc(100vh - 88px)", // Subtracting header height
            backgroundColor: "transparent"
          }}
          allow="microphone"
        ></iframe>
      </div>
    </div>
  );
};

export default Chat; 