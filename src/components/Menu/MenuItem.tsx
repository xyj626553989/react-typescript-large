import React, { CSSProperties, FC, useContext } from 'react';
import classNames from 'classnames';
import MenuContext, { MenuContextProps as MenuContextProperties } from './MenuContext';

export interface MenuItemProps {
  index?: number;
  disabled?: boolean;
  className?: string;
  style?: CSSProperties;
}

const MenuItem: FC<MenuItemProps> = (properties) => {
  const { index, disabled, className, style, children } = properties;
  const contextValue = useContext<MenuContextProperties>(MenuContext);
  const classes = classNames('menu-item', className, {
    'is-disabled': disabled,
  });
  return (
    <li data-testid="MenuItem" className={classes} style={style}>
      {children}
    </li>
  );
};
export default MenuItem;
