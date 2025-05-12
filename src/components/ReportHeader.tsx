
import React from 'react';

interface ReportHeaderProps {
  dealership: string;
  dateRange: string;
  totalAmount: string;
  breakdown: {
    withoutToken: string;
    declined: string;
  };
}

const ReportHeader: React.FC<ReportHeaderProps> = ({ dealership, dateRange, totalAmount, breakdown }) => {
  return (
    <div className="mb-8 p-6 bg-white rounded-lg shadow-sm border border-gray-100">
      <h1 className="text-2xl font-bold text-gray-800 mb-2">
        Toll Collection Report
      </h1>
      <p className="text-lg text-gray-700 mb-4">
        <span className="font-medium">{dealership}</span> from {dateRange}
      </p>
      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
        <div className="bg-blue-50 px-4 py-3 rounded-md border border-blue-100">
          <p className="text-gray-700 mb-1">Total Invoice Amount</p>
          <p className="text-xl font-bold text-blue-600">{totalAmount}</p>
        </div>
        <div className="text-gray-600 text-sm">
          <p>({breakdown.withoutToken} without CC Token + {breakdown.declined} declined CC)</p>
        </div>
      </div>
    </div>
  );
};

export default ReportHeader;
