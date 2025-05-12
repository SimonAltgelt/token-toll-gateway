
import React from 'react';

interface MetricsCardProps {
  title: string;
  metrics: {
    label: string;
    value: string | number;
    previousValue?: string | number;
    previousLabel?: string;
  }[];
  dark?: boolean;
}

const MetricsCard: React.FC<MetricsCardProps> = ({ title, metrics, dark = false }) => {
  return (
    <div className={`mb-8 p-6 rounded-lg shadow-sm ${dark ? 'bg-gray-900 text-white' : 'bg-white border border-gray-100'}`}>
      <h2 className={`text-xl font-bold mb-4 ${dark ? 'text-cyan-400' : 'text-gray-800'}`}>
        {title}
      </h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {metrics.map((metric, index) => (
          <div 
            key={index} 
            className={`p-4 rounded-lg border ${dark ? 'border-gray-700 bg-gray-800' : 'border-gray-200 bg-gray-50'}`}
          >
            <div className="text-sm mb-1 font-medium">{metric.label}</div>
            <div className={`text-3xl font-bold ${dark ? 'text-cyan-400' : 'text-blue-600'}`}>
              {metric.value}
            </div>
            {metric.previousValue !== undefined && (
              <div className={`text-xs mt-1 ${dark ? 'text-gray-400' : 'text-gray-500'}`}>
                {metric.previousValue} {metric.previousLabel}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MetricsCard;
