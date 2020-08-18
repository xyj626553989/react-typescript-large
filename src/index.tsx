import React, { useRef } from 'react';
import ReactDOM from 'react-dom';
import Button from './components/Button';
// eslint-disable-next-line import/no-unresolved
import '@/styles/index.scss';

const App = () => {
  const reference = useRef();
  const onClick = () => {
    console.log(reference);
  };
  return (
    <>
      <Button autoFocus onClick={onClick} ref={reference}>
        default
      </Button>
      <Button btnType="primary" className="custom-class">
        primary
      </Button>
      <Button size="lg" btnType="primary">
        default lg
      </Button>
      <Button btnType="danger" size="lg">
        danger
      </Button>
      <Button btnType="primary" size="sm">
        primary-sm
      </Button>
      <Button btnType="link" href="//www.baidu.com">
        hello word
      </Button>
      <Button btnType="link" href="//www.baidu.com" disabled>
        hello word
      </Button>
      <Button disabled>disable</Button>
    </>
  );
};
ReactDOM.render(<App />, document.querySelector('#root'));
