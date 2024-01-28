import React from 'react';
type LOGO_ICON = 'github' | 'instagram' | 'linked-in' | 'discord' | 'notion';

interface LogoIconProps extends React.ComponentPropsWithoutRef<'svg'> {
  name: LOGO_ICON;
}

const LogoIcon = ({ name, ...attributes }: LogoIconProps) => {
  return <div>LogoIcon</div>;
};

export default LogoIcon;
