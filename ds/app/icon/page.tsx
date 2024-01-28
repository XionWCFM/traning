import ArrowIcon from '@/style/icon/arrow-Icon';
import React from 'react';

interface pageProps {}

const page = ({}: pageProps) => {
  return (
    <div className=" px-4 py-4">
      <ArrowIcon name={'left-arrow'} />
      <ArrowIcon name={'right-arrow'} />
    </div>
  );
};

export default page;
