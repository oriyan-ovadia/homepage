import { css } from '@emotion/react';
import { colors, mobileOnly, tabletUp } from 'styles/utils';

const svgCss = css`
  ${mobileOnly} {
    width: 200px;
    height: 160px;
  }

  ${tabletUp} {
    width: 350px;
    height: 280px;
  }
`;

const letterLineCss = css`
  fill: none;
  stroke: ${colors.black};
  stroke-width: 41px;
  stroke-dashoffset: 2e-5;
  stroke-dasharray: none;
`;

const dotCss = css`
  color: ${colors.red};
  fill: ${colors.red};
  transform: matrix(1, 0, 0, 1, 0, 0);
`;

export default function Hello() {
  return (
    <div>
      <svg
        css={svgCss}
        xmlns="http://www.w3.org/2000/svg"
        width="428"
        height="343"
        viewBox="0 0 428.83 343.87"
      >
        <path
          css={letterLineCss}
          d="M21.5.01v152M21.5 74.01h81.67M103.17.01v152M168.17.01v152M168.17 19.5h77.66M168.17 76.01h72.66M168.17 131.5h77.66"
        />
        <g>
          <path css={letterLineCss} d="M21.5 186.68v152M21.5 318.17h72.67" />
        </g>
        <g>
          <path css={letterLineCss} d="M128.5 186.68v152M128.5 318.17h72.67" />
        </g>
        <g>
          <circle css={letterLineCss} cx="283.51" cy="262.69" r="60.68" />
        </g>
        <g>
          <circle
            css={dotCss}
            cx="403.17"
            cy="316.01"
            r="25.67"
            data-svg-origin="403.17000007629395 316.00999641418457"
          />
        </g>
      </svg>
    </div>
  );
}
