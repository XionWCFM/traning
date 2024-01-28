import React from 'react';
type DARK_MODE_ICON = 'sun' | 'moon';

interface DarkModeIconProps extends React.ComponentPropsWithoutRef<'svg'> {
  name: DARK_MODE_ICON;
}

const DarkModeIcon = ({}: DarkModeIconProps) => {
  return <div>DarkModeIcon</div>;
};

export default DarkModeIcon;
