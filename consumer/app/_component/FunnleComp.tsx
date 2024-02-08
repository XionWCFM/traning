'use client';
import React from 'react';
interface FunnleCompProps {}

const FunnleComp = ({}: FunnleCompProps) => {
  return (
    <div className=" px-4 py-4">
      <input
        className=" border-[1.25px] border-color-primary-hover rounded-sm"
        type="text"
      />
      <div className=" fixed-center h-64 w-64 bg-primary"></div>
    </div>
  );
};

export default FunnleComp;
