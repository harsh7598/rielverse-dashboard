type IconProps = React.HTMLAttributes<SVGElement> & {
  width?: string;
};

export const Icons = {
  spinner: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}>
      <path d="M21 12a9 9 0 1 1-6.219-8.56" />
    </svg>
  ),
  minus: (props: IconProps) => (
    <svg
      width="15"
      height="15"
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <path
        d="M2.25 7.5C2.25 7.22386 2.47386 7 2.75 7H12.25C12.5261 7 12.75 7.22386 12.75 7.5C12.75 7.77614 12.5261 8 12.25 8H2.75C2.47386 8 2.25 7.77614 2.25 7.5Z"
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"></path>
    </svg>
  ),
  plus: (props: IconProps) => (
    <svg
      width="15"
      height="15"
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <path
        d="M8 2.75C8 2.47386 7.77614 2.25 7.5 2.25C7.22386 2.25 7 2.47386 7 2.75V7H2.75C2.47386 7 2.25 7.22386 2.25 7.5C2.25 7.77614 2.47386 8 2.75 8H7V12.25C7 12.5261 7.22386 12.75 7.5 12.75C7.77614 12.75 8 12.5261 8 12.25V8H12.25C12.5261 8 12.75 7.77614 12.75 7.5C12.75 7.22386 12.5261 7 12.25 7H8V2.75Z"
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"></path>
    </svg>
  ),
  bigStar: (props: IconProps, width?: string) => (
    <svg
      width={width || "40"}
      height="32"
      viewBox="0 0 31 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <path
        d="M10.0655 2.18603C10.1954 0.285183 12.6577 -0.374595 13.7206 1.20663L16.8928 5.92549C17.4503 6.75492 18.5346 7.04544 19.4322 6.60592L24.5387 4.10533C26.2499 3.26742 28.0524 5.06997 27.2145 6.7811L24.7139 11.8877C24.2744 12.7853 24.5649 13.8695 25.3944 14.4271L30.1132 17.5992C31.6944 18.6621 31.0347 21.1245 29.1338 21.2544L23.4611 21.6421C22.464 21.7102 21.6703 22.504 21.6021 23.5011L21.2144 29.1738C21.0845 31.0746 18.6222 31.7344 17.5592 30.1532L14.3871 25.4343C13.8295 24.6049 12.7453 24.3144 11.8477 24.7539L6.74113 27.2545C5.02999 28.0924 3.22744 26.2899 4.06535 24.5787L6.56594 19.4721C7.00547 18.5746 6.71494 17.4903 5.88551 16.9327L1.16665 13.7606C-0.414573 12.6977 0.245205 10.2353 2.14605 10.1054L7.81877 9.71772C8.81586 9.64957 9.60959 8.85584 9.67774 7.85875L10.0655 2.18603Z"
        fill="url(#paint0_linear_308_13889)"></path>
      <defs>
        <linearGradient
          id="paint0_linear_308_13889"
          x1="10.6767"
          y1="-2.84303"
          x2="20.6031"
          y2="34.2029"
          gradientUnits="userSpaceOnUse">
          <stop stopColor="#dc143C"></stop>
          <stop offset="1" stopColor="#dc143C"></stop>
        </linearGradient>
      </defs>
    </svg>
  ),
  star: (props: IconProps) => (
    <svg
      width="25"
      height="25"
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <path
        d="M7.22303 0.665992C7.32551 0.419604 7.67454 0.419604 7.77702 0.665992L9.41343 4.60039C9.45663 4.70426 9.55432 4.77523 9.66645 4.78422L13.914 5.12475C14.18 5.14607 14.2878 5.47802 14.0852 5.65162L10.849 8.42374C10.7636 8.49692 10.7263 8.61176 10.7524 8.72118L11.7411 12.866C11.803 13.1256 11.5206 13.3308 11.2929 13.1917L7.6564 10.9705C7.5604 10.9119 7.43965 10.9119 7.34365 10.9705L3.70718 13.1917C3.47945 13.3308 3.19708 13.1256 3.25899 12.866L4.24769 8.72118C4.2738 8.61176 4.23648 8.49692 4.15105 8.42374L0.914889 5.65162C0.712228 5.47802 0.820086 5.14607 1.08608 5.12475L5.3336 4.78422C5.44573 4.77523 5.54342 4.70426 5.58662 4.60039L7.22303 0.665992Z"
        fill="#00b67a"></path>
    </svg>
  ),
  X: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}>
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  ),
  check: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}>
      <path d="M20 6 9 17l-5-5" />
    </svg>
  ),
  ChevronsUpDown: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}>
      <path d="m7 15 5 5 5-5" />
      <path d="m7 9 5-5 5 5" />
    </svg>
  ),
  phone: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}>
      <polyline points="22 8 22 2 16 2" />
      <line x1="16" x2="22" y1="8" y2="2" />
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  ),
  flight: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}>
      <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z" />
    </svg>
  ),
};
