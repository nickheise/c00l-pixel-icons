import React from 'react';
import { IconBase, IconProps } from './IconBase';

export const ChevronRightIcon: React.FC<IconProps> = (props) => {
  return (
    <IconBase {...props}>
      {/* Pixel art arrow pointing right */}
      <rect x="8" y="5" width="2" height="2" fill={props.color || 'currentColor'} />
      <rect x="10" y="7" width="2" height="2" fill={props.color || 'currentColor'} />
      <rect x="12" y="9" width="2" height="2" fill={props.color || 'currentColor'} />
      <rect x="14" y="11" width="2" height="2" fill={props.color || 'currentColor'} />
      <rect x="12" y="13" width="2" height="2" fill={props.color || 'currentColor'} />
      <rect x="10" y="15" width="2" height="2" fill={props.color || 'currentColor'} />
      <rect x="8" y="17" width="2" height="2" fill={props.color || 'currentColor'} />
    </IconBase>
  );
};