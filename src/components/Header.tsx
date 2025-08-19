import React from "react";
import Profile from "../assets/profile-nobg.png";

const Header = () => {
  return (
    <header className="sticky top-0 p-4 z-50 bg-amber-50 flex flex-row justify-between">
      <div>
        <img src={Profile} alt="My Logo" className="h-10 w-10 rounded-full" />
      </div>
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
