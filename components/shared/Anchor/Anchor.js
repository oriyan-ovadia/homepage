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

export default function Anchor({ children, href, isExternal = true }) {
  const rel = isExternal ? 'noreferrer noopener' : undefined;
  const target = isExternal ? '_blank' : undefined;

  return (
    <a css={anchorCss} href={href} rel={rel} target={target}>
      {children}
    </a>
  );
}
