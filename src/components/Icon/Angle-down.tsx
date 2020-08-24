import React, { FC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProps as IconProperties } from '.';

const AngleDown: FC<IconProperties> = (properties) => {
  const { size, className } = properties;
  return <FontAwesomeIcon className={className} icon="angle-down" size={size} />;
};

export default AngleDown;
