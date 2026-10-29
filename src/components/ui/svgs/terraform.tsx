import type { SVGProps } from "react";

// Source: https://github.com/hashicorp/design-system/blob/main/packages/flight-icons/svg/terraform-color-24.svg
const Terraform = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} fill="none" viewBox="0 0 24 24">
    <g fill="#7b42bc" fillRule="evenodd" clipRule="evenodd">
      <path d="m8.893 4.618 6.214 3.597v7.2l-6.214-3.6zM15.788 8.215v7.2l6.212-3.6V4.618zM2 .6v7.197l6.212 3.6V4.199zM8.893 19.8l6.212 3.6v-7.197l-6.212-3.6z" />
    </g>
  </svg>
);

export { Terraform };
