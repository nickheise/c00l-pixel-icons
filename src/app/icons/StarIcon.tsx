import React from 'react';
import { IconBase, IconProps } from './IconBase';

export const StarIcon: React.FC<IconProps> = (props) => {
  return (
    <IconBase {...props}>
      {/* Pixel art star */}
      <rect x="11" y="3" width="2" height="2" fill={props.color || 'currentColor'} />
      <rect x="10" y="5" width="4" height="2" fill={props.color || 'currentColor'} />
      <rect x="8" y="7" width="2" height="2" fill={props.color || 'currentColor'} />
      <rect x="14" y="7" width="2" height="2" fill={props.color || 'currentColor'} />
      <rect x="3" y="9" width="4" height="2" fill={props.color || 'currentColor'} />
      <rect x="9" y="9" width="6" height="2" fill={props.color || 'currentColor'} />
      <rect x="17" y="9" width="4" height="2" fill={props.color || 'currentColor'} />
      <rect x="6" y="11" width="12" height="2" fill={props.color || 'currentColor'} />
      <rect x="8" y="13" width="8" height="2" fill={props.color || 'currentColor'} />
      <rect x="7" y="15" width="2" height="2" fill={props.color || 'currentColor'} />
      <rect x="15" y="15" width="2" height="2" fill={props.color || 'currentColor'} />
      <rect x="5" y="17" width="2" height="2" fill={props.color || 'currentColor'} />
      <rect x="10" y="17" width="4" height="2" fill={props.color || 'currentColor'} />
      <rect x="17" y="17" width="2" height="2" fill={props.color || 'currentColor'} />
    </IconBase>
  );
};