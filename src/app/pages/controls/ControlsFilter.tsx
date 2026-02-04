import React, { useState } from 'react';
import { ControlFilter, ControlStatus } from './types';

interface ControlsFilterProps {
  filter: ControlFilter;
  onFilterChange: (filter: ControlFilter) => void;
  onClearFilters: () => void;
}

export function ControlsFilter({ filter, onFilterChange, onClearFilters }: ControlsFilterProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleFilterChange = (field: keyof ControlFilter, value: any) => {
    onFilterChange({
      ...filter,
      [field]: value,
    });
  };

  const clearFilters = () => {
    onClearFilters();
  };

  const hasActiveFilters = filter.search || filter.status || filter.isoReference;

  return (
    <div className="border rounded-lg bg-white p-4 shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold">Filters</h3>
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="p-2 hover:bg-gray-100 rounded-md transition-colors"
        >
          <svg
            className={`w-4 h-4 transition-transform ${isExpanded ? 'rotate-180' : ''}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>

      {isExpanded && (
        <div className="space-y-4">
          {/* Search */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Search
            </label>
            <input
              type="text"
              value={filter.search}
              onChange={(e) => handleFilterChange('search', e.target.value)}
              placeholder="Search by title or description..."
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          {/* Status Filter */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Status
            </label>
            <select
              value={filter.status}
              onChange={(e) => handleFilterChange('status', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="">All Statuses</option>
              <option value={ControlStatus.NOT_IMPLEMENTED}>Not Implemented</option>
              <option value={ControlStatus.PARTIALLY_IMPLEMENTED}>Partially Implemented</option>
              <option value={ControlStatus.IMPLEMENTED}>Implemented</option>
            </select>
          </div>

          {/* ISO Reference Filter */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              ISO Reference
            </label>
            <input
              type="text"
              value={filter.isoReference}
              onChange={(e) => handleFilterChange('isoReference', e.target.value)}
              placeholder="e.g., A.5.1, A.8.1"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          {/* Clear Button */}
          {hasActiveFilters && (
            <button
              onClick={clearFilters}
              className="w-full px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600 transition-colors"
            >
              Clear All Filters
            </button>
          )}
        </div>
      )}
    </div>
  );
}