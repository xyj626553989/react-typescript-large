import React from 'react';
import ReactDOM from 'react-dom';
import Menu from '@/components/Menu/Menu';
import MenuItem from '@/components/Menu/MenuItem';
import './styles/index.scss';

const App = () => {
  return (
    <>
      <Menu
        onSelect={(index) => {
          console.log(index);
        }}
      >
        <MenuItem index={0}>111</MenuItem>
        <MenuItem index={1} disabled>
          222
        </MenuItem>
        <MenuItem index={2}>333</MenuItem>
        <MenuItem index={3}>444</MenuItem>
      </Menu>
    </>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
