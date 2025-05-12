
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "lucide-react";

const AuthGate: React.FC = () => {
  return (
    <div className="mb-4 flex items-center justify-end">
      <span className="text-sm text-gray-500 mr-2">
        Want to see the <span className="font-medium text-purple-600">full report</span>?
      </span>
      <Button variant="outline" size="sm" className="text-xs">
        Sign in <ArrowRightIcon className="ml-1 h-3 w-3" />
      </Button>
    </div>
  );
};

export default AuthGate;
