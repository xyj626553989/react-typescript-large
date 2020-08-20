import React from 'react';
import { render, RenderResult, fireEvent, cleanup } from '@testing-library/react';
import Menu, { MenuProps as MenuProperties } from './Menu';
import MenuItem, { MenuItemProps as MenuItemProperties } from './MenuItem';

const testProperties: MenuProperties = {
  defaultIndex: 0,
  onSelect: jest.fn(),
  className: 'test',
};
const testVerProperties: MenuProperties = {
  defaultIndex: 0,
  mode: 'vertical',
};
const getMenu = (properties: MenuProperties) => {
  return (
    <Menu {...properties}>
      <MenuItem>active</MenuItem>
      <MenuItem disabled>disabled</MenuItem>
      <MenuItem>xyj</MenuItem>
    </Menu>
  );
};
let wrapper: RenderResult;
let menuElement: HTMLElement;
let activeElement: HTMLElement;
let disabledElement: HTMLElement;
describe('test Menu and MenuItem component', () => {
  beforeEach(() => {
    wrapper = render(getMenu(testProperties));
    menuElement = wrapper.getByTestId('menu');
    activeElement = wrapper.getByText('active');
    disabledElement = wrapper.getByText('disabled');
  });
  it('should render the correct MenuItem and Menu based on default props', () => {
    expect(menuElement).toBeInTheDocument();
    expect(menuElement).toHaveClass('s-menu test');
    expect(menuElement.querySelectorAll('li').length).toEqual(3);
    expect(activeElement).toHaveClass('menu-item menu-item-active');
    expect(disabledElement).toHaveClass('menu-item menu-item-disabled');
  });
  it('click item should change active and call the right callback', () => {
    const thirdItem: HTMLElement = wrapper.getByText('xyj');
    fireEvent.click(thirdItem);
    expect(thirdItem).toHaveClass('menu-item-active');
    expect(activeElement).not.toHaveClass('menu-item-active');
    expect(testProperties.onSelect).toHaveBeenCalledWith(2);
    fireEvent.click(disabledElement);
    expect(disabledElement).not.toHaveClass('menu-item-active');
    expect(testProperties.onSelect).not.toHaveBeenCalledWith(1);
  });
  it('should render vertical mode when mode is set to vertical', () => {
    cleanup();
    wrapper = render(getMenu(testVerProperties));
    menuElement = wrapper.getByTestId('menu');
    expect(menuElement).toHaveClass('menu-vertical');
  });
});
