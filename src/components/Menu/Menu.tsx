import React, { CSSProperties, FC, useState, useCallback } from 'react';
import classNames from 'classnames';
import MenuContext, { MenuTheme, MenuContextProps as MenuContextProperties } from './MenuContext';
import { MenuItemProps as MenuItemProperties } from './MenuItem';

export interface MenuProps {
  defaultIndex?: number;
  className?: string;
  mode?: 'horizontal' | 'vertical';
  style?: CSSProperties;
  theme?: MenuTheme;
  onSelect?: (selectedIndex: number) => void;
}

const Menu: FC<MenuProps> = (properties) => {
  const { className, theme, mode, style, children, onSelect, defaultIndex } = properties;
  const [currentActive, setCurrentActive] = useState<number>(defaultIndex);
  const classes = classNames('s-menu', className, {
    'menu-vertical': mode === 'vertical',
    [`menu-${theme}`]: theme !== undefined,
  });
  const handleClick = useCallback(
    (index: number) => {
      setCurrentActive(index);
      if (onSelect) {
        onSelect(index);
      }
    },
    [onSelect],
  );
  const contextValue: MenuContextProperties = {
    onSelect: handleClick,
    index: currentActive || 0,
  };
  const renderChildren = () => {
    return React.Children.map(children, (child, index: number) => {
      const childElement = child as React.FunctionComponentElement<MenuItemProperties>;
      const { displayName } = childElement.type;
      if (displayName === 'MenuItem') {
        return React.cloneElement(childElement, {
          index,
        });
      }
      console.error('Warning: Menu has a child which is not MenuItem component');
      return null;
    });
  };
  return (
    <ul data-testid="menu" className={classes} style={style}>
      <MenuContext.Provider value={contextValue}>{renderChildren()}</MenuContext.Provider>
    </ul>
  );
};

Menu.defaultProps = {
  defaultIndex: 0,
  mode: 'horizontal',
  theme: 'light',
};

export default Menu;
