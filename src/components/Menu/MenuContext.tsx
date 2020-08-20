import { createContext } from 'react';

export type MenuTheme = 'light' | 'dark';
export interface MenuContextProps {
  index: number;
  onSelect?: (selectIndex: number) => void;
}
const MenuContext = createContext<MenuContextProps>({ index: 0 });
export default MenuContext;
