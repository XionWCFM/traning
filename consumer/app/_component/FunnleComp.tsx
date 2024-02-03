'use client';
import React from 'react';
import { useFunnel } from '@xionhub/funnel';
interface FunnleCompProps {}

const FunnleComp = ({}: FunnleCompProps) => {
  const [Funnel, setStep] = useFunnel(['hello', 'world'] as const);
  return (
    <div>
      <Funnel>
        <Funnel.Step name={'hello'}>
          <div className="">
            <button onClick={() => setStep('world')}>헬로클릭</button>
          </div>
        </Funnel.Step>
        <Funnel.Step name={'world'}>
          <div className="">
            <button onClick={() => setStep('hello')}>월드클릭</button>
          </div>
        </Funnel.Step>
      </Funnel>
    </div>
  );
};

export default FunnleComp;
