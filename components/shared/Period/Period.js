import { css } from '@emotion/react';

const periodCss = (props) => css`
  color: ${props.color ? props.color : 'inherit'};
`;

export default function Period({ color }) {
  return <span css={periodCss({ color })}>.</span>;
}
