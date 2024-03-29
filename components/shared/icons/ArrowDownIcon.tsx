import type { SVGAttributes } from 'react';

function ArrowDownIcon(props: SVGAttributes<SVGElement>) {
  return (
    <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M374.108 373.328c-7.829-7.792-20.492-7.762-28.284.067L276 443.557V20c0-11.046-8.954-20-20-20s-20 8.954-20 20v423.558l-69.824-70.164c-7.792-7.829-20.455-7.859-28.284-.067-7.83 7.793-7.859 20.456-.068 28.285l104 104.504c.006.007.013.012.019.018 7.792 7.809 20.496 7.834 28.314.001.006-.007.013-.012.019-.018l104-104.504c7.79-7.828 7.763-20.492-.068-28.285z"
        fill="currentColor"
      />
    </svg>
  );
}

export default ArrowDownIcon;
