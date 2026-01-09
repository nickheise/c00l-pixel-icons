import React from 'react';
import { IconBase, IconProps } from './IconBase';

export const HeartIcon: React.FC<IconProps> = (props) => {
  return (
    <IconBase {...props}>
      {/* Pixel art heart */}
      <rect x="6" y="5" width="2" height="2" fill={props.color || 'currentColor'} />
      <rect x="16" y="5" width="2" height="2" fill={props.color || 'currentColor'} />
      <rect x="4" y="7" width="2" height="2" fill={props.color || 'currentColor'} />
      <rect x="6" y="7" width="4" height="2" fill={props.color || 'currentColor'} />
      <rect x="14" y="7" width="4" height="2" fill={props.color || 'currentColor'} />
      <rect x="18" y="7" width="2" height="2" fill={props.color || 'currentColor'} />
      <rect x="4" y="9" width="16" height="2" fill={props.color || 'currentColor'} />
      <rect x="4" y="11" width="16" height="2" fill={props.color || 'currentColor'} />
      <rect x="6" y="13" width="12" height="2" fill={props.color || 'currentColor'} />
      <rect x="8" y="15" width="8" height="2" fill={props.color || 'currentColor'} />
      <rect x="10" y="17" width="4" height="2" fill={props.color || 'currentColor'} />
      <rect x="11" y="19" width="2" height="2" fill={props.color || 'currentColor'} />
    </IconBase>
  );
};