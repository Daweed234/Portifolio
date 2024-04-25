import React from 'react';

const Copyright = () => {
  return (
    <footer className="absolute max-h-screen bottom-0 w-full text-center text-gray-600 text-sm py-4">
      &copy; {new Date().getFullYear()} Ntwali David. All Rights Reserved.
    </footer>
  );
};

export default Copyright;
