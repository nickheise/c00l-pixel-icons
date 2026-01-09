import React from 'react';
import { IconBase, IconProps } from './IconBase';

export const BellIcon: React.FC<IconProps> = (props) => {
  return (
    <IconBase {...props}>
      {/* Pixel art bell */}
      <rect x="11" y="3" width="2" height="2" fill={props.color || 'currentColor'} />
      <rect x="10" y="5" width="4" height="2" fill={props.color || 'currentColor'} />
      <rect x="9" y="7" width="6" height="2" fill={props.color || 'currentColor'} />
      <rect x="8" y="9" width="8" height="2" fill={props.color || 'currentColor'} />
      <rect x="7" y="11" width="10" height="2" fill={props.color || 'currentColor'} />
      <rect x="6" y="13" width="12" height="2" fill={props.color || 'currentColor'} />
      <rect x="5" y="15" width="14" height="2" fill={props.color || 'currentColor'} />
      <rect x="4" y="17" width="16" height="2" fill={props.color || 'currentColor'} />
      <rect x="9" y="19" width="2" height="2" fill={props.color || 'currentColor'} />
      <rect x="13" y="19" width="2" height="2" fill={props.color || 'currentColor'} />
      <rect x="10" y="21" width="4" height="2" fill={props.color || 'currentColor'} />
    </IconBase>
  );
};