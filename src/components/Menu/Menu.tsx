import React, { CSSProperties, FC } from 'react';
import classNames from 'classnames';

export interface MenuProps {
  defaultIndex?: number;
  className?: string;
  mode?: 'horizontal' | 'vertical';
  style?: CSSProperties;
  onSelect?: (selectedIndex: number) => void;
}

const Menu: FC<MenuProps> = (properties) => {
  const { className, defaultIndex, mode, style, children, onSelect } = properties;
  const classes = classNames('s-menu', className, {
    'menu-vertical': mode === 'vertical',
  });
  return (
    <ul className={classes} style={style}>
      {children}
    </ul>
  );
};

Menu.defaultProps = {
  defaultIndex: 0,
  mode: 'horizontal',
};

export default Menu;
