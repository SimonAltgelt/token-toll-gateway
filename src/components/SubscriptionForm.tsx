
import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import VehicleIcon from './VehicleIcon';

const SubscriptionForm: React.FC = () => {
  return (
    <div className="mb-8 p-6 bg-white rounded-lg shadow-sm border border-gray-100">
      <div className="flex flex-wrap md:flex-nowrap gap-8 items-center">
        <div className="flex-1">
          <h2 className="text-xl font-bold mb-2 text-gray-800">
            Subscription / Fleet
          </h2>
          <p className="text-gray-600 mb-6">
            View your toll receipt or pay an outstanding balance here.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="firstName">
                First Name <span className="text-red-500">*</span>
              </label>
              <Input id="firstName" placeholder="Enter first name" className="w-full" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="lastName">
                Last Name <span className="text-red-500">*</span>
              </label>
              <Input id="lastName" placeholder="Enter last name" className="w-full" />
            </div>
          </div>
          
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="email">
              Email Address <span className="text-red-500">*</span>
            </label>
            <Input id="email" type="email" placeholder="Enter email address" className="w-full" />
          </div>
          
          <div className="mb-6">
            <div className="flex items-center">
              <input
                id="recaptcha"
                type="checkbox"
                className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              <label htmlFor="recaptcha" className="ml-2 block text-sm text-gray-600">
                I'm not a robot
              </label>
            </div>
          </div>
          
          <div className="flex gap-4">
            <Button>Submit</Button>
            <Button variant="outline">Cancel</Button>
          </div>
        </div>
        
        <div className="hidden md:block">
          <VehicleIcon className="w-36 h-36 text-gray-400" />
        </div>
      </div>
    </div>
  );
};

export default SubscriptionForm;
