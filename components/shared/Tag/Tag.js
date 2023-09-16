import { css } from '@emotion/react';
import { colors, fontSize } from 'styles/utils';

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

export function Tag({ children }) {
  return <span css={tagCss}>{children}</span>;
}
