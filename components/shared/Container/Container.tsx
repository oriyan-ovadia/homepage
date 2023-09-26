import React from 'react';
import { css } from '@emotion/react';
import { CONTAINER_PADDING_MOBILE, viewport } from '@/styles/utils';

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  children: React.ReactNode;
}

const containerCss = css`
  max-width: 1280px;
  width: 100%;
  margin-left: auto;
  margin-right: auto;

  ${viewport.small} {
    padding-left: ${CONTAINER_PADDING_MOBILE};
    padding-right: ${CONTAINER_PADDING_MOBILE};
  }

  ${viewport.large} {
    padding-inline: 6rem;
  }
`;

function Container({ children, className, ...restProps }: ContainerProps) {
  return (
    <div css={containerCss} className={className} {...restProps}>
      {children}
    </div>
  );
}

export default Container;
