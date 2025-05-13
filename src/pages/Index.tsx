
import React from 'react';
import ReportHeader from '@/components/ReportHeader';
import InvoiceTable from '@/components/InvoiceTable';
import AuthGate from '@/components/AuthGate';
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";

// Mock data - Using generic information as requested
const createdInvoices = [
  {
    invoiceNo: '123456',
    contract: 'A1234',
    ro: '123456',
    firstName: 'Generic',
    lastName: 'Name',
    amount: '$55.00',
    status: 'missing_cc_token',
    dealership: 'Generic Dealership',
    serviceAdvisor: 'Advisor1'
  },
  {
    invoiceNo: '234567',
    contract: 'A2345',
    ro: '234567',
    firstName: 'Sample',
    lastName: 'Person',
    amount: '$45.00',
    status: 'missing_cc_token',
    dealership: 'Generic Dealership',
    serviceAdvisor: 'Advisor2'
  }
];

const declinedInvoices = [
  {
    invoiceNo: '345678',
    contract: 'A3456',
    ro: '345678',
    firstName: 'Example',
    lastName: 'User',
    amount: '$50.00',
    status: 'Declined',
    dealership: 'Generic Dealership',
    serviceAdvisor: 'Advisor3'
  }
];

const MinimalContactSection = () => {
  return (
    <div className="bg-gray-50 border border-gray-100 rounded-lg p-4 mt-6 mb-4 text-center">
      <div className="flex items-center justify-center gap-2 text-sm">
        <Mail className="h-4 w-4 text-gray-600" />
        <span className="text-gray-600">Need help?</span>
        <a href="mailto:support@genericdealership.com" className="text-blue-600 hover:underline">
          support@genericdealership.com
        </a>
      </div>
    </div>
  );
};

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="flex justify-end mb-2">
          <AuthGate />
        </div>
        
        <ReportHeader 
          dealership="Generic Dealership"
          dateRange="2025-05-05 to 2025-05-12"
          totalAmount="$150.00"
          breakdown={{
            withoutToken: "$100.00",
            declined: "$50.00"
          }}
        />
        
        <InvoiceTable 
          title="Missing Credit Card Authorization" 
          description="These invoices have no Credit Card Authorization associated with them. Please work with your staff to ensure Credit Cards are entered at all times."
          invoices={createdInvoices}
          status="Created"
          actionLabel="Add CC Info"
          actionButtonText="Add CC Token"
        />
        
        <InvoiceTable 
          title="Declined Credit Cards" 
          description="These invoice's credit card has been declined. Please ask your staff to use another payment method or make a note in the customer's profile."
          invoices={declinedInvoices}
          status="Declined"
          actionLabel="Update CC Info"
          actionButtonText="Update Payment"
        />
        
        <MinimalContactSection />
        
        <div className="text-center text-gray-500 text-xs mt-4 mb-4">
          <p>Weekly Toll Collection Report - Generated on May 12, 2025</p>
        </div>
      </div>
    </div>
  );
};

export default Index;
