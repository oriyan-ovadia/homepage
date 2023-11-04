import type React from 'react';
import { tagCss } from './Tag.css';

export interface TagProps extends React.HTMLAttributes<HTMLSpanElement> {}

export function Tag({ children, ...restProps }: TagProps) {
  return (
    <span className={tagCss} {...restProps}>
      {children}
    </span>
  );
}
