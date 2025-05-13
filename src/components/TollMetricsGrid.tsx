
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { ArrowUpIcon, ArrowDownIcon } from "lucide-react";

const MetricCard = ({ 
  title, 
  value, 
  previousValue, 
  prefix = "", 
  isPositive = true
}: { 
  title: string; 
  value: string | number; 
  previousValue?: string | number; 
  prefix?: string;
  isPositive?: boolean;
}) => {
  return (
    <Card className="border border-gray-100 bg-white">
      <CardContent className="py-2 px-3">
        <h3 className="text-xs text-gray-600 font-medium">{title}</h3>
        <div className="flex justify-between items-end">
          <div className={`text-lg font-bold ${isPositive ? 'text-blue-900' : 'text-red-600'}`}>
            {prefix}{value}
          </div>
          {previousValue && (
            <div className="flex items-center text-xs text-gray-500">
              {isPositive ? 
                <ArrowUpIcon className="h-3 w-3 text-blue-900 mr-1" /> : 
                <ArrowDownIcon className="h-3 w-3 text-red-600 mr-1" />
              }
              <span>{previousValue}</span>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

const TollMetricsGrid: React.FC = () => {
  return (
    <div className="grid grid-cols-2 gap-2">
      <MetricCard
        title="Charged Invoices"
        value="$975.00"
        previousValue="$890.00"
        isPositive={true}
      />
      <MetricCard
        title="Declined Invoices"
        value="$50.00"
        previousValue="$65.00"
        isPositive={false}
      />
      <MetricCard
        title="Invoices w/out CC"
        value="$100.00"
        previousValue="$120.00"
        isPositive={false}
      />
      <MetricCard
        title="% CC Tokens"
        value="76%"
        previousValue="72%"
        isPositive={true}
      />
    </div>
  );
};

export default TollMetricsGrid;
