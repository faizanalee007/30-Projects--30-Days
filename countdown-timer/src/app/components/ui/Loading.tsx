import React from 'react'

// components/Loading.tsx

export default function Loading() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100 dark:bg-gray-900">
      <div className="text-center">
        <div className="loader ease-linear rounded-full border-8 border-t-8 h-32 w-32 mb-4 animate-spin border-t-gray-800 "></div>
        <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-200">
          Loading...
        </h2>
      </div>
    </div>
  );
}
