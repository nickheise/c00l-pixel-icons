import React from 'react';
import { IconBase, IconProps } from './IconBase';

export const HomeIcon: React.FC<IconProps> = (props) => {
  return (
    <IconBase {...props}>
      {/* Pixel art house */}
      <rect x="10" y="4" width="4" height="2" fill={props.color || 'currentColor'} />
      <rect x="8" y="6" width="2" height="2" fill={props.color || 'currentColor'} />
      <rect x="14" y="6" width="2" height="2" fill={props.color || 'currentColor'} />
      <rect x="6" y="8" width="2" height="2" fill={props.color || 'currentColor'} />
      <rect x="16" y="8" width="2" height="2" fill={props.color || 'currentColor'} />
      <rect x="4" y="10" width="2" height="12" fill={props.color || 'currentColor'} />
      <rect x="18" y="10" width="2" height="12" fill={props.color || 'currentColor'} />
      <rect x="6" y="10" width="4" height="12" fill={props.color || 'currentColor'} />
      <rect x="14" y="10" width="4" height="12" fill={props.color || 'currentColor'} />
      <rect x="10" y="14" width="4" height="8" fill={props.color || 'currentColor'} />
      <rect x="6" y="22" width="12" height="2" fill={props.color || 'currentColor'} />
    </IconBase>
  );
};