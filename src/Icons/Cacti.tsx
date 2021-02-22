import React from "react";

type Props = {
  fillColor?: string;
  height?: string;
  width?: string;
  [x: string]: unknown; // for the rest property
};

const Cacti: React.FunctionComponent<Props> = ({
  fillColor = "#4E4E4E",
  width = "60px",
  height = "60px",
  ...rest
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 60.000000 60.000000"
    {...rest}
  >
    <g
      transform="translate(0.000000,60.000000) scale(0.100000,-0.100000)"
      fill={fillColor}
      strokeWidth="5"
      stroke="#F7F7F7"
    >
      <path
        d="M117 584 c-4 -4 -7 -74 -7 -156 0 -141 -1 -148 -20 -148 -18 0 -20 7
-21 78 -1 42 -1 79 -1 82 0 3 -12 5 -28 5 l-28 0 -1 -95 c-2 -87 0 -95 21
-113 13 -10 17 -16 11 -12 -7 3 -13 2 -13 -3 0 -6 17 -8 40 -5 l40 6 0 -87 c0
-69 -3 -86 -15 -87 -28 -3 -33 -4 -40 -11 -4 -3 1 -5 12 -3 10 2 42 4 71 4
l52 1 0 95 c0 94 0 95 24 95 14 0 28 5 31 10 4 6 11 7 17 4 6 -4 8 -2 5 3 -7
11 16 37 24 29 2 -3 2 39 -1 92 -5 95 -5 97 -30 97 -25 0 -25 -1 -28 -92 -2
-84 -5 -93 -22 -93 -18 0 -20 9 -22 153 l-3 152 -30 3 c-17 2 -34 0 -38 -4z"
      />
      <path
        d="M417 584 c-4 -4 -7 -74 -7 -156 0 -141 -1 -148 -20 -148 -18 0 -20 7
-21 78 -1 42 -1 79 -1 82 0 3 -12 5 -28 5 l-28 0 -1 -95 c-2 -87 0 -95 21
-113 13 -10 17 -16 11 -12 -7 3 -13 2 -13 -3 0 -6 17 -8 40 -5 l40 6 0 -87 c0
-69 -3 -86 -15 -87 -28 -3 -33 -4 -40 -11 -4 -3 1 -5 12 -3 10 2 42 4 71 4
l52 1 0 100 c0 99 0 100 24 100 14 0 28 5 31 10 4 6 11 8 16 5 5 -4 6 2 2 11
-5 13 -2 16 8 12 11 -5 13 9 11 76 -1 44 -6 88 -9 96 -3 8 -5 19 -4 23 1 4 -8
3 -19 -3 -18 -9 -20 -21 -20 -100 0 -83 -2 -90 -20 -90 -18 0 -20 8 -22 153
l-3 152 -30 3 c-17 2 -34 0 -38 -4z"
      />
    </g>
  </svg>
);

export default Cacti;