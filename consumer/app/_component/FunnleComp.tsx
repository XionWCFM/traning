'use client';
import React from 'react';
import { DeviceHelper } from '@xionhub/device';
interface FunnleCompProps {}

const FunnleComp = ({}: FunnleCompProps) => {
  return (
    <div>
      <button
        className=" text-color-danger-accent text-header-1 font-header-1 leading-header-1"
        onClick={() => {
          console.log(DeviceHelper.getDevice());
          console.log(DeviceHelper.isClient());
          console.log(DeviceHelper.isIos());
          const ios = /iPhone|IPad|IPod/i;
          console.log(ios.test(navigator?.userAgent));
        }}
      >
        클릭하면
      </button>
    </div>
  );
};

export default FunnleComp;
