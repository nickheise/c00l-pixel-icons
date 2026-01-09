import React from 'react';
import { IconBase, IconProps } from './IconBase';

export const CheckIcon: React.FC<IconProps> = (props) => {
  return (
    <IconBase {...props}>
      {/* Pixel art checkmark */}
      <rect x="18" y="6" width="2" height="2" fill={props.color || 'currentColor'} />
      <rect x="16" y="8" width="2" height="2" fill={props.color || 'currentColor'} />
      <rect x="14" y="10" width="2" height="2" fill={props.color || 'currentColor'} />
      <rect x="12" y="12" width="2" height="2" fill={props.color || 'currentColor'} />
      <rect x="10" y="14" width="2" height="2" fill={props.color || 'currentColor'} />
      <rect x="8" y="12" width="2" height="2" fill={props.color || 'currentColor'} />
      <rect x="6" y="10" width="2" height="2" fill={props.color || 'currentColor'} />
      <rect x="4" y="8" width="2" height="2" fill={props.color || 'currentColor'} />
    </IconBase>
  );
};