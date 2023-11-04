import { css } from '@emotion/react';

export const globalCss = css`
  * {
    box-sizing: border-box;
  }

  ::selection {
    color: #134e4a;
    background-color: #5eead4;
  }

  /* Firefox */
  ::-moz-selection {
    color: #134e4a;
    background: #5eead4;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  strong,
  b {
    font-weight: 500;
  }

  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin-block: 0;
  }

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }
`;
