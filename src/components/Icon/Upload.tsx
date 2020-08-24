import React, { FC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProps as IconProperties } from '.';

const Upload: FC<IconProperties> = (properties) => {
  const { size, className } = properties;
  return <FontAwesomeIcon className={className} icon="upload" size={size} />;
};

export default Upload;
