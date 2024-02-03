import React from 'react';

interface HeadingProps extends React.ComponentPropsWithoutRef<'h1'> {}

const Heading = ({ className, ...props }: HeadingProps) => {
  return <h1 {...props} className={' text-red-800 font-bold text-lg'}></h1>;
};

export default Heading;
