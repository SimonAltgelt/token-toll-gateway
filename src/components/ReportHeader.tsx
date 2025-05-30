
import React from 'react';
import { 
  ChartContainer, 
  ChartLegend, 
  ChartLegendContent
} from "@/components/ui/chart";
import { PieChart, Pie, Cell } from 'recharts';
import TollMetricsGrid from './TollMetricsGrid';

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
  // Parse the breakdown values
  const withoutTokenValue = parseFloat(breakdown.withoutToken.replace('$', ''));
  const declinedValue = parseFloat(breakdown.declined.replace('$', ''));
  
  const chartData = [
    { name: 'Without CC Token', value: withoutTokenValue, color: '#e11d48' },
    { name: 'Declined CC', value: declinedValue, color: '#be123c' }
  ];

  const config = {
    withoutToken: { 
      label: 'Without CC Token', 
      theme: { light: '#e11d48', dark: '#e11d48' } 
    },
    declined: { 
      label: 'Declined CC', 
      theme: { light: '#be123c', dark: '#be123c' } 
    }
  };

  return (
    <div className="mb-8 p-6 bg-white rounded-lg shadow-sm border border-gray-100">
      <h1 className="text-2xl font-bold text-blue-900 mb-2">
        Toll Collection Report
      </h1>
      <p className="text-lg text-gray-700 mb-4">
        <span className="font-medium">{dealership}</span> from {dateRange}
      </p>
      
      <div className="flex flex-col lg:flex-row items-start gap-6">
        <div className="flex flex-col sm:flex-row gap-6 items-center order-2 lg:order-1">
          <div className="bg-blue-50 px-4 py-3 rounded-md border border-blue-100 min-w-[200px]">
            <p className="text-gray-700 mb-1">Total Pending Amount</p>
            <p className="text-xl font-bold text-blue-900">{totalAmount}</p>
          </div>
          
          <div className="w-full sm:w-60 h-40">
            <h3 className="text-sm font-medium text-gray-600 mb-2">Breakdown of Pending Amounts</h3>
            <ChartContainer className="h-32" config={config}>
              <PieChart>
                <Pie
                  data={chartData}
                  cx="50%"
                  cy="50%"
                  innerRadius={30}
                  outerRadius={50}
                  paddingAngle={5}
                  dataKey="value"
                  nameKey="name"
                >
                  {chartData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <ChartLegend verticalAlign="bottom" content={<ChartLegendContent />} />
              </PieChart>
            </ChartContainer>
          </div>
          
          <div className="text-sm text-gray-600">
            <div className="flex items-center mb-1">
              <div className="w-3 h-3 rounded-full bg-red-600 mr-2"></div>
              <span>Without CC Token: {breakdown.withoutToken}</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 rounded-full bg-red-700 mr-2"></div>
              <span>Declined CC: {breakdown.declined}</span>
            </div>
          </div>
        </div>
        
        <div className="w-full lg:w-auto order-1 lg:order-2">
          <TollMetricsGrid />
        </div>
      </div>
    </div>
  );
};

export default ReportHeader;
