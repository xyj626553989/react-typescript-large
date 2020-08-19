import React from 'react';
import { render } from '@testing-library/react';
import { Button } from '.';

describe('test Button Component', () => {
  it('should render the correct default button', () => {
    const wrapper = render(<Button>Nice</Button>);
    const element = wrapper.getByText('Nice');
    expect(element).toBeTruthy();
    expect(element).toBeInTheDocument();
    expect(element.tagName).toEqual('BUTTON');
    expect(element).toHaveClass('btn btn-default');
  });
  it('should render the correct based on different props', () => {
    // const wrapper = render(<Button>Nice</Button>);
    // const element = wrapper.getByText('Nice');
  });
  it('should render alink when btnType equals link and href is provided', () => {
    const wrapper = render(
      <Button href="//www.baidu.com" btnType="link">
        Nice
      </Button>,
    );
    const element = wrapper.getByText('Nice');
    expect(element.tagName).toEqual('A');
    expect(element).toHaveAttribute('href');
  });
  it('should render disabled when disabled is true', () => {
    const wrapper = render(<Button disabled>Nice</Button>);
    const element = wrapper.getByText('Nice');
    expect(element).toHaveAttribute('disabled');
  });
});
