
import React from 'react';
import ReportHeader from '@/components/ReportHeader';
import InvoiceTable from '@/components/InvoiceTable';
import AuthGate from '@/components/AuthGate';
import { Button } from "@/components/ui/button";
import { Mail, Phone, MessageSquare } from "lucide-react";

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

const ContactSection = () => {
  return (
    <div className="bg-white border border-gray-100 rounded-lg p-6 mt-8 mb-4">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Need Help?</h2>
      <div className="grid md:grid-cols-3 gap-4 text-sm">
        <div className="flex flex-col items-center bg-blue-50 p-4 rounded-md">
          <Mail className="h-6 w-6 text-blue-600 mb-2" />
          <h3 className="font-medium">Email Support</h3>
          <p className="text-gray-600 text-center mt-1">support@genericdealership.com</p>
          <Button variant="outline" size="sm" className="mt-2">
            Send Email
          </Button>
        </div>
        
        <div className="flex flex-col items-center bg-green-50 p-4 rounded-md">
          <Phone className="h-6 w-6 text-green-600 mb-2" />
          <h3 className="font-medium">Phone Support</h3>
          <p className="text-gray-600 text-center mt-1">(555) 123-4567</p>
          <Button variant="outline" size="sm" className="mt-2">
            Call Now
          </Button>
        </div>
        
        <div className="flex flex-col items-center bg-purple-50 p-4 rounded-md">
          <MessageSquare className="h-6 w-6 text-purple-600 mb-2" />
          <h3 className="font-medium">Live Chat</h3>
          <p className="text-gray-600 text-center mt-1">Available 9am - 5pm ET</p>
          <Button variant="outline" size="sm" className="mt-2">
            Start Chat
          </Button>
        </div>
      </div>
      
      <div className="mt-6 text-center text-gray-600 text-sm">
        <p>Our support team is available Monday through Friday, 9:00 AM to 5:00 PM Eastern Time.</p>
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
        />
        
        <InvoiceTable 
          title="Declined Credit Cards" 
          description="These invoice's credit card has been declined. Please ask your staff to use another payment method or make a note in the customer's profile."
          invoices={declinedInvoices}
          status="Declined"
        />
        
        <ContactSection />
        
        <div className="text-center text-gray-500 text-xs mt-8 mb-4">
          <p>Weekly Toll Collection Report - Generated on May 12, 2025</p>
        </div>
      </div>
    </div>
  );
};

export default Index;
