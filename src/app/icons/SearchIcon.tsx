import React from 'react';
import { IconBase, IconProps } from './IconBase';

export const SearchIcon: React.FC<IconProps> = (props) => {
  return (
    <IconBase {...props}>
      {/* Pixel art magnifying glass */}
      <rect x="6" y="4" width="6" height="2" fill={props.color || 'currentColor'} />
      <rect x="4" y="6" width="2" height="6" fill={props.color || 'currentColor'} />
      <rect x="12" y="6" width="2" height="6" fill={props.color || 'currentColor'} />
      <rect x="6" y="12" width="6" height="2" fill={props.color || 'currentColor'} />
      <rect x="14" y="14" width="2" height="2" fill={props.color || 'currentColor'} />
      <rect x="16" y="16" width="2" height="2" fill={props.color || 'currentColor'} />
      <rect x="18" y="18" width="2" height="2" fill={props.color || 'currentColor'} />
      <rect x="20" y="20" width="2" height="2" fill={props.color || 'currentColor'} />
    </IconBase>
  );
};