
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { ArrowUpIcon, ArrowDownIcon } from "lucide-react";

const MetricCard = ({ 
  title, 
  value, 
  previousValue, 
  prefix = "", 
  color = "blue",
  trend = "neutral"
}: { 
  title: string; 
  value: string | number; 
  previousValue?: string | number; 
  prefix?: string;
  color?: "blue" | "yellow" | "red" | "green";
  trend?: "up" | "down" | "neutral";
}) => {
  const colorClasses = {
    blue: "border-blue-100 bg-blue-50",
    yellow: "border-yellow-100 bg-yellow-50",
    red: "border-red-100 bg-red-50",
    green: "border-green-100 bg-green-50",
  };

  const valueColorClasses = {
    blue: "text-blue-600",
    yellow: "text-yellow-600",
    red: "text-red-600",
    green: "text-green-600",
  };

  return (
    <Card className={`border ${colorClasses[color]}`}>
      <CardContent className="p-4">
        <h3 className="text-sm text-gray-600 font-medium mb-1">{title}</h3>
        <div className="flex justify-between items-end">
          <div className={`text-2xl font-bold ${valueColorClasses[color]}`}>
            {prefix}{value}
          </div>
          {previousValue && (
            <div className="flex items-center text-xs text-gray-500">
              {trend === "up" && <ArrowUpIcon className="h-3 w-3 text-green-500 mr-1" />}
              {trend === "down" && <ArrowDownIcon className="h-3 w-3 text-red-500 mr-1" />}
              <span>{previousValue} (previous)</span>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

const TollMetricsGrid: React.FC = () => {
  return (
    <div className="mb-8">
      <h2 className="text-lg font-semibold text-gray-700 mb-3">Weekly Metrics Overview</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <MetricCard
          title="Tolls and Violations ($)"
          value="1,250.00"
          previousValue="1,100.00"
          prefix="$"
          color="blue"
          trend="up"
        />
        <MetricCard
          title="Charged Invoices ($)"
          value="975.00"
          previousValue="890.00"
          prefix="$"
          color="green"
          trend="up"
        />
        <MetricCard
          title="Declined Invoices ($)"
          value="50.00"
          previousValue="65.00"
          prefix="$"
          color="red"
          trend="down"
        />
        <MetricCard
          title="Contracts Count"
          value="125"
          previousValue="118"
          color="yellow"
          trend="up"
        />
        <MetricCard
          title="Invoices Count"
          value="98"
          previousValue="92"
          color="blue"
          trend="up"
        />
        <MetricCard
          title="Invoices w/out CC ($)"
          value="100.00"
          previousValue="120.00"
          prefix="$"
          color="red"
          trend="down"
        />
        <MetricCard
          title="% of Contracts with CC Token"
          value="76%"
          previousValue="72%"
          color="green"
          trend="up"
        />
        <MetricCard
          title="CC Authorization Trend"
          value="Upward"
          color="green"
        />
        <MetricCard
          title="Average Tolls ($) / Contract"
          value="10.00"
          previousValue="9.32"
          prefix="$"
          color="blue"
          trend="up"
        />
      </div>
    </div>
  );
};

export default TollMetricsGrid;
