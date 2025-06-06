
import React from 'react';
import { Button } from "@/components/ui/button";

interface Invoice {
  invoiceNo: string;
  contract: string;
  ro: string;
  firstName: string;
  lastName: string;
  amount: string;
  status: string;
  dealership: string;
  serviceAdvisor: string;
}

interface InvoiceTableProps {
  title: string;
  description: string;
  invoices: Invoice[];
  status: 'Created' | 'Declined';
  actionLabel?: string;
  actionButtonText?: string;
}

const InvoiceTable: React.FC<InvoiceTableProps> = ({ 
  title, 
  description, 
  invoices, 
  status,
  actionLabel = "Take Action",
  actionButtonText = "Resolve"
}) => {
  return (
    <div className="mb-8">
      <div className="mb-4">
        <h2 className="text-lg font-semibold text-gray-800">
          Invoices in <span className={status === 'Declined' ? 'text-red-600' : 'text-red-600'}>{title}</span>
        </h2>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left border-collapse">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50">
            <tr>
              <th className="px-3 py-3 border">Invoice No.</th>
              <th className="px-3 py-3 border">Contract</th>
              <th className="px-3 py-3 border">Customer</th>
              <th className="px-3 py-3 border">Amount</th>
              <th className="px-3 py-3 border">Status</th>
              <th className="px-3 py-3 border">Service Advisor</th>
              <th className="px-3 py-3 border">{actionLabel}</th>
            </tr>
          </thead>
          <tbody>
            {invoices.map((invoice, index) => (
              <tr key={index} className="bg-white border-b hover:bg-gray-50">
                <td className="px-3 py-2 border font-medium text-blue-900 hover:underline cursor-pointer">
                  {invoice.invoiceNo}
                </td>
                <td className="px-3 py-2 border">{invoice.contract}</td>
                <td className="px-3 py-2 border">{`${invoice.firstName} ${invoice.lastName}`}</td>
                <td className="px-3 py-2 border font-medium">{invoice.amount}</td>
                <td className="px-3 py-2 border">
                  <span className={`px-2 py-1 rounded text-xs ${
                    status === 'Declined' ? 'bg-red-100 text-red-800' : 'bg-red-100 text-red-800'
                  }`}>
                    {invoice.status}
                  </span>
                </td>
                <td className="px-3 py-2 border">{invoice.serviceAdvisor}</td>
                <td className="px-3 py-2 border">
                  <Button 
                    size="sm" 
                    variant={status === 'Declined' ? "destructive" : "destructive"}
                    className="w-full py-0.5 text-xs h-7"
                  >
                    {actionButtonText}
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default InvoiceTable;
