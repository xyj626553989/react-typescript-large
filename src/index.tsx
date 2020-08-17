import React from 'react';
import ReactDOM from 'react-dom';
import Button from './components/Button';
// eslint-disable-next-line import/no-unresolved
import '@/styles/index.scss';

const App = () => {
  return (
    <>
      <Button>hello word</Button>
      <Button btnType="primary" size="lg">
        hello word
      </Button>
      <Button btnType="danger" size="lg">
        hello word
      </Button>
      <Button btnType="primary" size="sm">
        hello word
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
