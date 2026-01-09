import React from 'react';
import { IconBase, IconProps } from './IconBase';

export const MailIcon: React.FC<IconProps> = (props) => {
  return (
    <IconBase {...props}>
      {/* Pixel art envelope */}
      <rect x="3" y="6" width="18" height="2" fill={props.color || 'currentColor'} />
      <rect x="3" y="8" width="2" height="10" fill={props.color || 'currentColor'} />
      <rect x="19" y="8" width="2" height="10" fill={props.color || 'currentColor'} />
      <rect x="5" y="8" width="2" height="2" fill={props.color || 'currentColor'} />
      <rect x="17" y="8" width="2" height="2" fill={props.color || 'currentColor'} />
      <rect x="7" y="10" width="2" height="2" fill={props.color || 'currentColor'} />
      <rect x="15" y="10" width="2" height="2" fill={props.color || 'currentColor'} />
      <rect x="9" y="12" width="2" height="2" fill={props.color || 'currentColor'} />
      <rect x="13" y="12" width="2" height="2" fill={props.color || 'currentColor'} />
      <rect x="11" y="14" width="2" height="2" fill={props.color || 'currentColor'} />
      <rect x="3" y="18" width="18" height="2" fill={props.color || 'currentColor'} />
    </IconBase>
  );
};