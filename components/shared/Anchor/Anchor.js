import { css } from '@emotion/react';
import { colors } from 'styles/utils';

const anchorCss = css`
  color: ${colors.white};
  font-weight: 400;
  transition: all 200ms;

  &:hover {
    color: ${colors.primaryLight};
  }
`;

export default function Anchor({ children, href }) {
  return (
    <a css={anchorCss} href={href} rel="noopener" target="_blank">
      {children}
    </a>
  );
}
