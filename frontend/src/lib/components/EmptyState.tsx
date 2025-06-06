import React from 'react';

interface EmptyStateProps {
  title: string;
  description?: string;
}

export default function EmptyState({ title, description }: EmptyStateProps) {
  return (
    <div className="text-center py-16 text-gray-500">
      <p className="text-lg font-medium">{title}</p>
      {description && <p className="text-sm mt-2">{description}</p>}
    </div>
  );
}
