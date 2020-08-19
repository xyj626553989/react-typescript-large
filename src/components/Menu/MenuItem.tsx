import React, { CSSProperties, FC, PropsWithChildren } from 'react';
import classNames from 'classnames';

export interface MenuItemProps {
  index?: number;
  disabled?: boolean;
  className?: string;
  style?: CSSProperties;
}

const MenuItem: FC<MenuItemProps> = (properties) => {
  const { index, disabled, className, style, children } = properties;
  const classes = classNames('menu-item', className, {
    'is-disabled': disabled,
  });
  return (
    <li className={classes} style={style}>
      {children}
    </li>
  );
};
export default MenuItem;
