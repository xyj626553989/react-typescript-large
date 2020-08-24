import { CSSProperties } from 'react';
import { library, SizeProp } from '@fortawesome/fontawesome-svg-core';
import { faAngleDown, faAngleLeft, faUpload } from '@fortawesome/free-solid-svg-icons';

export interface IconProps {
  size?: SizeProp;
  className?: string;
  style?: CSSProperties;
}
export { default as AngleDown } from './Angle-down';
export { default as Upload } from './Upload';
library.add(faAngleDown, faAngleLeft, faUpload);
