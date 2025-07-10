import React from "react";

const Header = () => {
  return (
    <header className="sticky top-0 p-4 z-50 bg-amber-50 flex flex-row justify-between">
      <p className="font-semibold">MY_LOGO</p>
      <button className="cursor-pointer">
        <svg
          className="w-5 h-5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 16 12"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M1 1h14M1 6h14M1 11h7"
          />
        </svg>
      </button>
    </header>
  );
};

export default Header;
