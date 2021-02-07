import NextLink from 'next/link';
import { css } from '@emotion/react';
import { colors } from 'styles/utils';

const linkCss = css`
  cursor: pointer;
  display: inline-block;
  position: relative;

  :before,
  :after {
    content: '';
    position: absolute;
    bottom: 0%;
    left: 0px;
    right: 0px;
    height: 2px;
    overflow: hidden;
    background: currentColor;
    transform-origin: bottom left;
    transition: transform 400ms cubic-bezier(1, 0, 0, 1) 0ms;
    z-index: 0;
  }

  :before {
    background: ${colors.red};
    bottom: 10px;
    top: 10px;
    height: auto;
    opacity: 0.5;
    left: -5px;
    right: -5px;
    transform: scaleX(0);
    transform-origin: bottom right;
    transition-duration: 400ms;
  }

  :hover:before {
    transform: scaleX(1);
    transform-origin: bottom left;
  }

  :hover:after {
    transform: scaleX(0);
    transform-origin: bottom right;
    transition-duration: 400ms;
  }
`;

const linkInnerCss = css`
  position: relative;
  z-index: 10;
`;

export default function Link({ children, className, ...restProps }) {
  return (
    <NextLink {...restProps}>
      <a css={linkCss} className={className}>
        <span css={linkInnerCss}>{children}</span>
      </a>
    </NextLink>
  );
}
