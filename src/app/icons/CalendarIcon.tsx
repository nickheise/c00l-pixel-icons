import React from 'react';
import { IconBase, IconProps } from './IconBase';

export const CalendarIcon: React.FC<IconProps> = (props) => {
  return (
    <IconBase {...props}>
      {/* Pixel art calendar */}
      <rect x="7" y="3" width="2" height="4" fill={props.color || 'currentColor'} />
      <rect x="15" y="3" width="2" height="4" fill={props.color || 'currentColor'} />
      <rect x="4" y="5" width="16" height="2" fill={props.color || 'currentColor'} />
      <rect x="4" y="7" width="2" height="14" fill={props.color || 'currentColor'} />
      <rect x="18" y="7" width="2" height="14" fill={props.color || 'currentColor'} />
      <rect x="6" y="9" width="12" height="2" fill={props.color || 'currentColor'} />
      <rect x="7" y="12" width="2" height="2" fill={props.color || 'currentColor'} />
      <rect x="11" y="12" width="2" height="2" fill={props.color || 'currentColor'} />
      <rect x="15" y="12" width="2" height="2" fill={props.color || 'currentColor'} />
      <rect x="7" y="15" width="2" height="2" fill={props.color || 'currentColor'} />
      <rect x="11" y="15" width="2" height="2" fill={props.color || 'currentColor'} />
      <rect x="15" y="15" width="2" height="2" fill={props.color || 'currentColor'} />
      <rect x="7" y="18" width="2" height="2" fill={props.color || 'currentColor'} />
      <rect x="11" y="18" width="2" height="2" fill={props.color || 'currentColor'} />
      <rect x="4" y="21" width="16" height="2" fill={props.color || 'currentColor'} />
    </IconBase>
  );
};