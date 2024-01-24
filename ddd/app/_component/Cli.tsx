'use client';
import React from 'react';

interface CliProps {
  Comp: React.ReactNode;
}

const Cli = ({ Comp }: CliProps) => {
  return <div>{Comp}</div>;
};

export default Cli;
