import React, { FC, PropsWithChildren, ButtonHTMLAttributes } from 'react';
import classNames from 'classnames';

export type ButtonSize = 'lg' | 'sm';
export type ButtonType = 'primary' | 'default' | 'danger' | 'link';

interface BaseButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  disabled?: boolean;
  size?: ButtonSize;
  btnType?: ButtonType;
  href?: string;
}

const Button: FC<PropsWithChildren<BaseButtonProps>> = (properties) => {
  const { btnType, disabled, size, children, href, className, type, ...properties_ } = properties;
  // btn,btn-lg ,btn-primary
  const classes = classNames('btn', className, {
    [`btn-${btnType}`]: btnType,
    [`btn-${size}`]: size,
    disabled: btnType === 'link' && disabled,
  });

  if (btnType === 'link' && href) {
    return (
      <a className={classes} href={href}>
        {children}
      </a>
    );
  }
  return (
    <button type={type} disabled={disabled} className={classes} {...properties_}>
      {children}
    </button>
  );
};
Button.defaultProps = {
  disabled: false,
  btnType: 'default',
  type: 'button',
};
export default Button;
