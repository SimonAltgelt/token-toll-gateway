
import React from 'react';

const VehicleIcon = ({ className }: { className?: string }) => {
  return (
    <svg 
      className={className}
      width="160" 
      height="90" 
      viewBox="0 0 160 90" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M140,20 h-20 v-10 a10,10 0 0,0 -10,-10 h-60 a10,10 0 0,0 -10,10 v10 h-20 a10,10 0 0,0 -10,10 v40 h10 v10 a10,10 0 0,0 20,0 v-10 h80 v10 a10,10 0 0,0 20,0 v-10 h10 v-40 a10,10 0 0,0 -10,-10 z" stroke="currentColor" fill="none" strokeWidth="3"/>
      <circle cx="30" cy="70" r="10" stroke="currentColor" fill="none" strokeWidth="3"/>
      <circle cx="130" cy="70" r="10" stroke="currentColor" fill="none" strokeWidth="3"/>
      <path d="M50,20 h60" stroke="currentColor" strokeWidth="2"/>
      <path d="M20,40 h120" stroke="currentColor" strokeWidth="2"/>
    </svg>
  );
};

export default VehicleIcon;
