import React from 'react';
import { render } from '@testing-library/react';
import Menu, { MenuProps as MenuProperties } from './Menu';
import MenuItem, { MenuItemProps as MenuItemProperties } from './MenuItem';

describe('test menu', () => {
  it('should render the correct MenuItem in the Menu', () => {
    const wrapper = render(
      <Menu>
        <MenuItem>list1</MenuItem>
      </Menu>,
    );
    const menu = wrapper.getByTestId('menu');
    const menuItem = wrapper.getByTestId('MenuItem');
    expect(menu).toContainElement(menuItem);
  });
});
