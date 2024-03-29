import type { SVGAttributes } from 'react';

function WavesIcon(props: SVGAttributes<SVGElement>) {
  return (
    <svg
      viewBox="0 -256 1850 1850"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M933.9661 1471.4237q-26 0-44-18l-624-602q-10-8-27.5-26t-55.5-65.5q-38-47.5-68-97.5t-53.5-121q-23.5-71-23.5-138 0-220 127-344t351-124q62 0 126.5 21.5t120 58q55.5 36.5 95.5 68.5t76 68q36-36 76-68t95.5-68.5q55.5-36.5 120-58t126.5-21.5q224 0 351 124t127 344q0 221-229 450l-623 600q-18 18-44 18"
        fill="currentColor"
      />
    </svg>
  );
}

export default WavesIcon;
