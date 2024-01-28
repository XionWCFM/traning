import React from 'react';
type ABSTRACT_ICON_NAME =
  | 'hambuger'
  | 'cross'
  | 'dots-horizontal'
  | 'dots-vertical'
  | 'plus'
  | 'minus'
  | 'check-circle'
  | 'cross-circle'
  | 'plus-circle'
  | 'minus-circle'
  | 'question-mark-circle'
  | 'info-circle'
  | 'download';

interface AbstractIconProps extends React.ComponentPropsWithoutRef<'svg'> {
  name: ABSTRACT_ICON_NAME;
}
const AbstractIcon = ({ name, ...attributes }: AbstractIconProps) => {
  switch (name) {
    default:
      return null;
  }
};

export default AbstractIcon;
