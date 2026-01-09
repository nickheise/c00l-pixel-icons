import React from 'react';
import { IconBase, IconProps } from './IconBase';

export const XIcon: React.FC<IconProps> = (props) => {
  return (
    <IconBase {...props}>
      {/* Pixel art X/close */}
      <rect x="5" y="5" width="2" height="2" fill={props.color || 'currentColor'} />
      <rect x="17" y="5" width="2" height="2" fill={props.color || 'currentColor'} />
      <rect x="7" y="7" width="2" height="2" fill={props.color || 'currentColor'} />
      <rect x="15" y="7" width="2" height="2" fill={props.color || 'currentColor'} />
      <rect x="9" y="9" width="2" height="2" fill={props.color || 'currentColor'} />
      <rect x="13" y="9" width="2" height="2" fill={props.color || 'currentColor'} />
      <rect x="11" y="11" width="2" height="2" fill={props.color || 'currentColor'} />
      <rect x="9" y="13" width="2" height="2" fill={props.color || 'currentColor'} />
      <rect x="13" y="13" width="2" height="2" fill={props.color || 'currentColor'} />
      <rect x="7" y="15" width="2" height="2" fill={props.color || 'currentColor'} />
      <rect x="15" y="15" width="2" height="2" fill={props.color || 'currentColor'} />
      <rect x="5" y="17" width="2" height="2" fill={props.color || 'currentColor'} />
      <rect x="17" y="17" width="2" height="2" fill={props.color || 'currentColor'} />
    </IconBase>
  );
};