import React, { useState, useEffect } from 'react';
import { controlsService } from '@/services/api/controls';
import { Control, ControlFilter, ColumnConfig, DEFAULT_COLUMNS } from './types';
import { ControlsFilter } from './ControlsFilter';
import { ControlsTable } from './ControlsTable';
import { ColumnSelector } from './ColumnSelector';

export function ControlsPage() {
  const [controls, setControls] = useState<Control[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [filter, setFilter] = useState<ControlFilter>({
    search: '',
    status: '',
    isoReference: '',
  });
  const [columns, setColumns] = useState<ColumnConfig[]>(DEFAULT_COLUMNS);
  const [sortColumn, setSortColumn] = useState<string>('isoReference');
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');

  // Load column preferences from localStorage
  useEffect(() => {
    const savedColumns = localStorage.getItem('controls-columns');
    if (savedColumns) {
      try {
        const parsedColumns = JSON.parse(savedColumns);
        setColumns(parsedColumns);
      } catch (e) {
        console.warn('Failed to parse column preferences:', e);
      }
    }
  }, []);

  // Save column preferences to localStorage
  useEffect(() => {
    localStorage.setItem('controls-columns', JSON.stringify(columns));
  }, [columns]);

  // Fetch controls
  useEffect(() => {
    fetchControls();
  }, [filter, sortColumn, sortDirection]);

  const fetchControls = async () => {
    try {
      setLoading(true);
      setError(null);
      
      const params = {
        search: filter.search || undefined,
        status: filter.status || undefined,
        isoReference: filter.isoReference || undefined,
      };

      const response = await controlsService.getControls(params);
      
      if (response.success && response.data) {
        let filteredControls = response.data || [];
        
        // Apply sorting
        if (sortColumn) {
          filteredControls = [...filteredControls].sort((a, b) => {
            const aValue = a[sortColumn as keyof Control];
            const bValue = b[sortColumn as keyof Control];
            
            if (aValue === undefined || bValue === undefined) return 0;
            
            let comparison = 0;
            if (typeof aValue === 'string' && typeof bValue === 'string') {
              comparison = aValue.localeCompare(bValue);
            } else if (typeof aValue === 'number' && typeof bValue === 'number') {
              comparison = aValue - bValue;
            } else {
              comparison = String(aValue).localeCompare(String(bValue));
            }
            
            return sortDirection === 'desc' ? -comparison : comparison;
          });
        }
        
        setControls(filteredControls);
      } else {
        setError('Failed to load controls');
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  const handleFilterChange = (newFilter: ControlFilter) => {
    setFilter(newFilter);
  };

  const handleClearFilters = () => {
    setFilter({
      search: '',
      status: '',
      isoReference: '',
    });
  };

  const handleColumnToggle = (columnId: string) => {
    setColumns(prev => 
      prev.map(col => 
        col.id === columnId ? { ...col, visible: !col.visible } : col
      )
    );
  };

  const handleSort = (columnId: string) => {
    if (sortColumn === columnId) {
      setSortDirection(prev => prev === 'asc' ? 'desc' : 'asc');
    } else {
      setSortColumn(columnId);
      setSortDirection('asc');
    }
  };

  const hasActiveFilters = filter.search || filter.status || filter.isoReference;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">Controls</h1>
        
        <div className="flex items-center gap-4">
          <ColumnSelector 
            columns={columns}
            onColumnToggle={handleColumnToggle}
          />
          
          {hasActiveFilters && (
            <span className="text-sm text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
              Filters Active
            </span>
          )}
        </div>
      </div>

      {/* Filters and Table */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-1">
          <ControlsFilter
            filter={filter}
            onFilterChange={handleFilterChange}
            onClearFilters={handleClearFilters}
          />
        </div>
        
        <div className="lg:col-span-3">
          {loading ? (
            <div className="flex justify-center items-center py-12">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
            </div>
          ) : error ? (
            <div className="bg-red-50 border border-red-200 rounded-md p-4">
              <div className="text-red-800 font-medium">Error loading controls</div>
              <div className="text-red-600 text-sm mt-1">{error}</div>
              <button
                onClick={fetchControls}
                className="mt-3 px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors"
              >
                Try Again
              </button>
            </div>
          ) : (
            <div className="bg-white rounded-lg shadow overflow-hidden">
              <ControlsTable
                controls={controls}
                columns={columns}
                onSort={handleSort}
                sortColumn={sortColumn}
                sortDirection={sortDirection}
              />
              
              {controls.length > 0 && (
                <div className="px-6 py-3 bg-gray-50 border-t border-gray-200">
                  <div className="text-sm text-gray-600">
                    Showing {controls.length} control{controls.length !== 1 ? 's' : ''}
                    {hasActiveFilters && ' (filtered)'}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}