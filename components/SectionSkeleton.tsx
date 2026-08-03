import React from 'react';

export default function SectionSkeleton() {
  return (
    <div className="w-full py-20 px-4 md:px-8 flex flex-col items-center justify-center space-y-8 animate-pulse bg-transparent">
      {/* Skeleton Title */}
      <div className="w-64 h-12 bg-slate-200 dark:bg-slate-800 rounded-xl" />
      {/* Skeleton Subtitle */}
      <div className="w-96 h-6 bg-slate-200 dark:bg-slate-800 rounded-lg max-w-full" />
      
      {/* Skeleton Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl mt-12">
        {[1, 2, 3].map((i) => (
          <div key={i} className="flex flex-col space-y-4">
            <div className="w-full h-48 bg-slate-200 dark:bg-slate-800 rounded-2xl" />
            <div className="w-3/4 h-6 bg-slate-200 dark:bg-slate-800 rounded-lg" />
            <div className="w-full h-20 bg-slate-200 dark:bg-slate-800 rounded-xl" />
          </div>
        ))}
      </div>
    </div>
  );
}
