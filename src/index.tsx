import React from 'react';
import ReactDOM from 'react-dom';
import Menu from '@/components/Menu/Menu';
import MenuItem from '@/components/Menu/MenuItem';
import SubMenu from '@/components/Menu/SubMenu';
import './styles/index.scss';

const App = () => {
  return (
    <>
      <Menu
        onSelect={(index) => {
          console.log(index);
        }}
        mode="vertical"
        defaultOpenedSubmenu={['1']}
      >
        <MenuItem>111</MenuItem>
        <SubMenu title="SubMenu">
          <MenuItem>45555555555544</MenuItem>
          <MenuItem>555</MenuItem>
          <MenuItem>666</MenuItem>
        </SubMenu>
        <MenuItem disabled>222</MenuItem>
        <MenuItem>444</MenuItem>
      </Menu>
    </>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
