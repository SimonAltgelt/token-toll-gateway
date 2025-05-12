
import React from 'react';
import ReportHeader from '@/components/ReportHeader';
import InvoiceTable from '@/components/InvoiceTable';
import MetricsCard from '@/components/MetricsCard';
import SubscriptionForm from '@/components/SubscriptionForm';
import SearchResults from '@/components/SearchResults';
import AuthGate from '@/components/AuthGate';

// Mock data - Using generic information as requested
const createdInvoices = [
  {
    invoiceNo: '123456',
    contract: 'A1234',
    ro: '123456',
    firstName: 'Generic',
    lastName: 'Name',
    amount: '$55.27',
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
    amount: '$9.22',
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
    amount: '$33.71',
    status: 'Declined',
    dealership: 'Generic Dealership',
    serviceAdvisor: 'Advisor3'
  }
];

const costRecoveryMetrics = [
  {
    label: 'Total Recovered',
    value: '$3,711',
    previousValue: '$4,754',
    previousLabel: 'Last Month'
  }
];

const fleetPerformanceMetrics = [
  {
    label: 'Finished Contracts',
    value: '357',
    previousValue: '274',
    previousLabel: 'Contracts Last Month'
  },
  {
    label: 'Length of Contract',
    value: '7 days',
    previousValue: '9',
    previousLabel: 'Days Last Month'
  },
  {
    label: 'Utilization',
    value: '91%',
    previousValue: '89%',
    previousLabel: 'UTL Last Month'
  },
  {
    label: 'Avg. Vehicles',
    value: '117',
    previousValue: '104',
    previousLabel: 'VUM Last Month'
  }
];

const searchResults = [
  {
    from: 'May 5, 2025',
    to: 'May 12, 2025',
    amount: '$46.47',
    lateFee: '$25',
    fullPayment: '-',
    splitPay: 'Installment 1',
    name: 'Generic Person',
    status: 'Void'
  },
  {
    from: 'Apr 28, 2025',
    to: 'May 5, 2025',
    amount: '$7.58',
    lateFee: '$0',
    fullPayment: '-',
    splitPay: '',
    name: 'Generic Person',
    status: 'Charged'
  },
  {
    from: 'Apr 21, 2025',
    to: 'Apr 28, 2025',
    amount: '$1.64',
    lateFee: '$0',
    fullPayment: '-',
    splitPay: '',
    name: 'Generic Person',
    status: 'Charged'
  }
];

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container max-w-7xl mx-auto px-4">
        <ReportHeader 
          dealership="Generic Dealership"
          dateRange="2025-05-05 to 2025-05-12"
          totalAmount="$98.20"
          breakdown={{
            withoutToken: "$64.49",
            declined: "$33.71"
          }}
        />
        
        <AuthGate />
        
        <InvoiceTable 
          title="Created" 
          description="These invoices have no Credit Card Authorization associated with them. Please work with your staff to ensure Credit Cards are entered at all times."
          invoices={createdInvoices}
          status="Created"
        />
        
        <InvoiceTable 
          title="Declined" 
          description="These invoice's credit card has been declined. Please ask your staff to use another payment method or make a note in the customer's profile."
          invoices={declinedInvoices}
          status="Declined"
        />
        
        <MetricsCard 
          title="COST RECOVERY"
          metrics={costRecoveryMetrics}
          dark={true}
        />
        
        <MetricsCard 
          title="FLEET PERFORMANCE"
          metrics={fleetPerformanceMetrics}
          dark={true}
        />
        
        <SubscriptionForm />
        
        <SearchResults 
          name="Generic Person"
          email="generic@example.com"
          results={searchResults}
        />
        
        <div className="text-center text-gray-500 text-xs mt-8 mb-4">
          <p>* Note: You or your customers can view the invoice link from any device.</p>
          <p className="mt-4">We hope you find this information useful and look forward to your comments.</p>
          <p className="mt-2">Best Regards, Toll Service Team</p>
        </div>
      </div>
    </div>
  );
};

export default Index;
