import React from "react";

const Skeleton = () => {
  return (
    <div className="animate-pulse bg-white rounded-xl shadow p-3">
      
      {/* Image Skeleton */}
      <div className="w-full h-32 bg-gray-300 rounded-lg"></div>

      {/* Text Skeleton */}
      <div className="mt-3 space-y-2">
        <div className="h-4 bg-gray-300 rounded w-3/4"></div>
        <div className="h-4 bg-gray-300 rounded w-1/2"></div>
      </div>

      {/* Button Skeleton */}
      <div className="mt-4 h-8 bg-gray-300 rounded"></div>
    </div>
  );
};

export default Skeleton;