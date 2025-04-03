import * as React from "react";
import type { SVGProps } from "react";
const Elementor = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 400 400"
    fill="none"
    {...props}
  >
    <g clipPath="url(#clip0)">
      <path
        d="M200 0C89.5321 0 0 89.5321 0 200C0 310.431 89.5321 400 200 400C310.468 400 400 310.468 400 200C399.964 89.5321 310.431 0 200 0ZM150.009 283.306H116.694V116.658H150.009V283.306ZM283.306 283.306H183.324V249.991H283.306V283.306ZM283.306 216.639H183.324V183.324H283.306V216.639ZM283.306 149.973H183.324V116.658H283.306V149.973Z"
        fill="#92003B"
      />
    </g>
    <defs>
      <clipPath id="clip0">
        <rect width={400} height={400} fill="white" />
      </clipPath>
    </defs>
  </svg>
);
export default Elementor;
