import React from "react";

interface Props {
  width?: string | number;
  height?: string | number;
  fillColor?: string;
  [x: string]: unknown; // for the rest property
}

const ShoppingCart: React.FunctionComponent<Props> = ({
  width = "8",
  height = "12",
  fillColor = "#2D2926",
  ...rest
}) => (
  <svg viewBox="0 0 25 22" id="cart-icon">
    <title>Cart Icon</title>
    <g transform="translate(0 1)" fill="none" fill-rule="evenodd">
      <path
        d="M.5 1a.5.5 0 0 0 0 1h2.665c1.278 3.16 2.532 6.326 3.798 9.492L5.79 14.305c-.128.302.133.695.462.695h12.503a.52.52 0 0 0 .507-.5.52.52 0 0 0-.507-.5H7.002l.844-2.03 12.198-.978a.514.514 0 0 0 .445-.383l1.5-6.5c.065-.29-.187-.608-.485-.61H4.837l-.875-2.187A.513.513 0 0 0 3.502 1H.5zm4.736 3.5H20.88l-1.282 5.53-11.768.94L5.236 4.5zm3.516 12a2.258 2.258 0 0 0-2.25 2.25A2.258 2.258 0 0 0 8.752 21a2.258 2.258 0 0 0 2.25-2.25 2.258 2.258 0 0 0-2.25-2.25zm7.502 0a2.258 2.258 0 0 0-2.25 2.25 2.258 2.258 0 0 0 2.25 2.25 2.258 2.258 0 0 0 2.25-2.25 2.258 2.258 0 0 0-2.25-2.25zm-7.502 1c.697 0 1.25.554 1.25 1.25S9.45 20 8.752 20c-.696 0-1.25-.554-1.25-1.25s.554-1.25 1.25-1.25zm7.502 0c.696 0 1.25.554 1.25 1.25S16.95 20 16.254 20c-.697 0-1.25-.554-1.25-1.25s.553-1.25 1.25-1.25z"
        fill="#323030"
        fill-rule="nonzero"
      ></path>
      <circle
        stroke="#D53426"
        stroke-width="1.173"
        fill="#D53426"
        cx="21"
        cy="3"
        r="3"
      ></circle>
    </g>
  </svg>
);

export default ShoppingCart;
