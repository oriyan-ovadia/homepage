import React from 'react';
import { css } from '@emotion/react';
import { colors, fontSize } from 'styles/utils';

export interface TagProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
}

const tagCss = css`
  display: inline-block;
  background-color: ${colors.primaryDark};
  color: ${colors.primaryLight};
  line-height: 1.25rem;
  font-weight: 500;
  font-size: ${fontSize.xs};
  padding: 0.25rem 0.75rem;
  border-radius: 9999px;
`;

export function Tag({ children, ...restProps }: TagProps) {
  return (
    <span css={tagCss} {...restProps}>
      {children}
    </span>
  );
}
