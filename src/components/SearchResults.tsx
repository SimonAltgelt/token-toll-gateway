
import React from 'react';
import { Button } from "@/components/ui/button";

interface SearchResult {
  from: string;
  to: string;
  amount: string;
  lateFee: string;
  fullPayment: string;
  splitPay: string;
  name: string;
  status: string;
}

interface SearchResultsProps {
  name: string;
  email: string;
  results: SearchResult[];
}

const SearchResults: React.FC<SearchResultsProps> = ({ name, email, results }) => {
  return (
    <div className="mb-8 p-6 bg-white rounded-lg shadow-sm border border-gray-100">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold text-gray-800">Search Result</h2>
        <Button variant="outline" size="sm">Back</Button>
      </div>
      
      <div className="mb-4 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <span className="text-gray-500 text-sm">Name:</span>
          <p className="font-medium">{name}</p>
        </div>
        <div>
          <span className="text-gray-500 text-sm">Email Address:</span>
          <p className="font-medium">{email}</p>
        </div>
      </div>
      
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50">
            <tr>
              <th className="px-4 py-3">From</th>
              <th className="px-4 py-3">To</th>
              <th className="px-4 py-3">Amount</th>
              <th className="px-4 py-3">Late Fee</th>
              <th className="px-4 py-3">Full Payment</th>
              <th className="px-4 py-3">Split Pay</th>
              <th className="px-4 py-3">Name</th>
              <th className="px-4 py-3">Status</th>
            </tr>
          </thead>
          <tbody>
            {results.map((result, index) => (
              <tr key={index} className="bg-white border-b">
                <td className="px-4 py-3">{result.from}</td>
                <td className="px-4 py-3">{result.to}</td>
                <td className="px-4 py-3">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-md">
                    {result.amount}
                  </span>
                </td>
                <td className="px-4 py-3">{result.lateFee}</td>
                <td className="px-4 py-3">{result.fullPayment}</td>
                <td className="px-4 py-3">
                  {result.splitPay && (
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded-md">
                      {result.splitPay}
                    </span>
                  )}
                </td>
                <td className="px-4 py-3">{result.name}</td>
                <td className="px-4 py-3">
                  <span className={`px-2 py-1 rounded-md text-xs ${
                    result.status === 'Void' 
                      ? 'bg-gray-100 text-gray-800' 
                      : result.status === 'Charged' 
                        ? 'bg-green-100 text-green-800'
                        : 'bg-blue-100 text-blue-800'
                  }`}>
                    {result.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SearchResults;
