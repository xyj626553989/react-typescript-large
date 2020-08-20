import React from 'react';
import ReactDOM from 'react-dom';
import Menu from '@/components/Menu/Menu';
import MenuItem from '@/components/Menu/MenuItem';

const App = () => {
  return (
    <>
      <Menu>
        <MenuItem>111</MenuItem>
        <MenuItem>222</MenuItem>
        <MenuItem>333</MenuItem>
        <MenuItem>444</MenuItem>
      </Menu>
    </>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
