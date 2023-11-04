import type { SVGAttributes } from 'react';

function RightArrowIcon(props: SVGAttributes<SVGElement>) {
  return (
    <svg
      viewBox="0 0 31.49 31.49"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M21.205 5.007c-.429-.444-1.143-.444-1.587 0-.429.429-.429 1.143 0 1.571l8.047 8.047H1.111C.492 14.626 0 15.118 0 15.737c0 .619.492 1.127 1.111 1.127h26.554l-8.047 8.032c-.429.444-.429 1.159 0 1.587.444.444 1.159.444 1.587 0l9.952-9.952c.444-.429.444-1.143 0-1.571l-9.952-9.953z"
        fill="currentColor"
      />
    </svg>
  );
}

export default RightArrowIcon;
