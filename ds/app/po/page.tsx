import React from 'react';

interface pageProps {}

const page = ({}: pageProps) => {
  return (
    <div>
      <div className=" h-32 w-32 bg-primary fixed-center "></div>
      <div className=" h-32 w-32 bg-primary fixed-top"></div>
      <div className=" h-32 w-32 bg-primary fixed-left"></div>
      <div className=" h-32 w-32 bg-primary fixed-right"></div>
      <div className=" h-32 w-32 bg-primary fixed-bottom"></div>
      <div className=" h-32 w-32 bg-primary fixed-bottom-left"></div>
      <div className=" h-32 w-32 bg-primary fixed-bottom-right"></div>
      <div className=" h-32 w-32 bg-primary fixed-top-left"></div>
      <div className=" h-32 w-32 bg-primary fixed-top-right"></div>
    </div>
  );
};

export default page;
