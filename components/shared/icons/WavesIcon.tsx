import type { SVGAttributes } from 'react';

function WavesIcon(props: SVGAttributes<SVGElement>) {
  return (
    <svg
      viewBox="0 0 73.94 14.19"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <polyline
        fill="none"
        points="2.83 2.83 11.36 11.36 19.9 2.83 28.43 11.36 36.97 2.83 45.5 11.36 54.04 2.83 62.58 11.36 71.11 2.83"
        stroke="currentColor"
        strokeWidth="5px"
      ></polyline>
    </svg>
  );
}

export default WavesIcon;
