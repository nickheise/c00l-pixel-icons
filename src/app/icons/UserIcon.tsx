import React from 'react';
import { IconBase, IconProps } from './IconBase';

export const UserIcon: React.FC<IconProps> = (props) => {
  return (
    <IconBase {...props}>
      {/* Pixel art user/person */}
      <rect x="10" y="4" width="4" height="2" fill={props.color || 'currentColor'} />
      <rect x="8" y="6" width="8" height="2" fill={props.color || 'currentColor'} />
      <rect x="8" y="8" width="2" height="2" fill={props.color || 'currentColor'} />
      <rect x="14" y="8" width="2" height="2" fill={props.color || 'currentColor'} />
      <rect x="8" y="10" width="8" height="2" fill={props.color || 'currentColor'} />
      <rect x="10" y="12" width="4" height="2" fill={props.color || 'currentColor'} />
      <rect x="8" y="14" width="2" height="4" fill={props.color || 'currentColor'} />
      <rect x="14" y="14" width="2" height="4" fill={props.color || 'currentColor'} />
      <rect x="6" y="18" width="2" height="2" fill={props.color || 'currentColor'} />
      <rect x="8" y="18" width="8" height="2" fill={props.color || 'currentColor'} />
      <rect x="16" y="18" width="2" height="2" fill={props.color || 'currentColor'} />
      <rect x="4" y="20" width="16" height="2" fill={props.color || 'currentColor'} />
    </IconBase>
  );
};