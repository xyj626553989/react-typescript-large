import React, { CSSProperties, FC } from 'react';
import classNames from 'classnames';
import MenuContext, { MenuTheme, MenuContextProps as MenuContextProperties } from './MenuContext';

export interface MenuProps {
  defaultIndex?: number;
  className?: string;
  mode?: 'horizontal' | 'vertical';
  style?: CSSProperties;
  theme?: MenuTheme;
  onSelect?: (selectedIndex: number) => void;
}

const Menu: FC<MenuProps> = (properties) => {
  const { className, theme, mode, style, children, onSelect } = properties;
  const classes = classNames('s-menu', className, {
    'menu-vertical': mode === 'vertical',
    [`menu-${theme}`]: theme !== undefined,
  });
  const contextValue: MenuContextProperties = {
    inlineCollapsed: false,
  };
  return (
    <ul data-testid="menu" className={classes} style={style}>
      <MenuContext.Provider value={contextValue}>{children}</MenuContext.Provider>
    </ul>
  );
};

Menu.defaultProps = {
  defaultIndex: 0,
  mode: 'horizontal',
  theme: 'light',
};

export default Menu;
