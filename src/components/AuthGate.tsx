
import React from 'react';
import { Button } from "@/components/ui/button";
import { LockIcon } from "lucide-react";

const AuthGate: React.FC = () => {
  return (
    <div className="mb-8 p-8 bg-blue-50 rounded-lg border border-blue-100 text-center">
      <div className="inline-flex justify-center items-center w-16 h-16 bg-blue-100 rounded-full mb-4">
        <LockIcon className="h-8 w-8 text-blue-600" />
      </div>
      
      <h2 className="text-xl font-bold mb-2 text-gray-800">
        Authentication Required
      </h2>
      
      <p className="text-gray-600 mb-6 max-w-lg mx-auto">
        To view complete toll collection data including AUTH tokens and detailed records, 
        please log in to your account.
      </p>
      
      <div className="flex justify-center">
        <Button className="bg-blue-600 hover:bg-blue-700">
          Log In to View Full Report
        </Button>
      </div>
      
      <p className="text-sm text-gray-500 mt-4">
        The information displayed is a generic overview for demonstration purposes.
      </p>
    </div>
  );
};

export default AuthGate;
