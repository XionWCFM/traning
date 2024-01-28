'use client';
import Modal from '@/src/ds/dialog';
import xionFetch from '@/src/fetch';
import AnimationWrapper from '@/style/animate/AnimationWrapper';
import ArrowIcon from '@/style/icon/arrow-Icon';
import React from 'react';
const fetchExtend = xionFetch({
  baseUrl: '',
  headers: {
    'Content-type': 'application/json',
  },
  interceptors: {
    request: async (args) => {
      console.group('🙃 hello world 🙃');
      console.log('url " ', args[0].toString());
      console.log('request init : ', args[1], '\n\n');
      return args;
    },
    response: async (response) => {
      console.log('response intercepting', response.status);
      if (response.status >= 400) {
        throw await response.text().then(Error);
      }
      return response;
    },
  },
});

export default function Home() {
  const [hi, setHi] = React.useState(false);
  return (
    <div className=" px-12 py-12">
      <h2 className=" text-header-1 text-header font-header-1 leading-header-1">
        안녕하세요 header1
      </h2>
      <h2 className=" text-header-1 text-header-success font-header-1 leading-header-1">
        안녕하세요 header1
      </h2>
      <h2 className=" text-header-1 text-header-danger font-header-1 leading-header-1">
        안녕하세요 header1
      </h2>
      <h2 className=" text-header-1 text-header-accent font-header-1 leading-header-1">
        안녕하세요 header1
      </h2>
      <div className=" text-primary-foreground bg-primary shadow-xs">
        안녕하세요 프라미어리
      </div>

      <button className=" px-10 w-2/5 py-2  bg-positive text-sub-title-1 text-positive-foreground  ">
        hello world
        <div className=" text-foreground/20  ">dsadsa </div>
      </button>
      <button onClick={() => setHi((s) => !s)}>누르면</button>
      <AnimationWrapper
        isOpen={hi}
        duration={300}
        direction="bottom"
        type="slide"
        className=" fixed z-30  left-0 top-[50%]"
      >
        <div className=" h-64  center w-64 shadow-xs rounded-full mx-12 text-primary flex justify-center items-center">
          안
        </div>
      </AnimationWrapper>
      <div className=" "></div>
    </div>
  );
}
