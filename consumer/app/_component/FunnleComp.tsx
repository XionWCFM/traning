'use client';
import React from 'react';
import { DeviceHelper } from '@xionhub/device';
interface FunnleCompProps {}

const FunnleComp = ({}: FunnleCompProps) => {
  return (
    <div>
      <button
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
