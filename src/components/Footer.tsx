import React from "react";

const Footer = () => {

  const handleNavigation = (url: string) => {
    window.open(url, "_self");
  }

  const handleEmail = (email: string) => {
    window.location.href = `mailto:${email}`;
  }

  return (
    <div className="p-6 border-t-2 border-t-amber-200 flex flex-col md:flex-row space-y-2 md:space-y-0 md:justify-between items-center bg-amber-50">
      {/**Social icons */}
      <div className="flex gap-2">
        {/** Facebook */}
       <button onClick={() => handleNavigation("https://www.facebook.com/arandell.paguinto/")}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            viewBox="0 0 24 24"
            className="text-blue-600"
          >
            <path
              d="M22.675 0h-21.35C.597 0 0 .597 0 1.325v21.351C0 23.403.597 
                24 1.325 24h11.495V14.708h-3.13v-3.622h3.13V8.413c0-3.1 
                1.894-4.788 4.659-4.788 1.325 0 2.466.099 
                2.797.143v3.24h-1.919c-1.507 0-1.799.717-1.799 
                1.767v2.318h3.595l-.468 3.622h-3.127V24h6.127C23.403 
                24 24 23.403 24 22.676V1.325C24 
                .597 23.403 0 22.675 0z"
            />
          </svg>
       </button>

        {/**Email */}
        <button onClick={() => handleEmail("topaguintsarandell@gmail.com")}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            viewBox="0 0 24 24"
            className="text-red-600"
          >
            <path
              d="M20 4H4c-1.1 0-2 .9-2 
                2v12c0 1.1.9 2 2 
                2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 
                4-8 5-8-5V6l8 5 8-5v2z"
            />
          </svg>
        </button>

        {/** LinkedIn */}
       <button onClick={() => handleNavigation("https://www.linkedin.com/in/arandelle-paguinto-588237285")}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            viewBox="0 0 24 24"
            className="text-blue-400"
          >
            <path
              d="M20.447 20.452h-3.554v-5.569c0-1.328-.026-3.037-1.852-3.037-1.853 
                0-2.136 1.445-2.136 2.939v5.667H9.352V9h3.414v1.561h.049c.476-.9 
                1.637-1.852 3.37-1.852 3.6 0 4.266 2.37 
                4.266 5.455v6.288zM5.337 7.433c-1.144 
                0-2.067-.926-2.067-2.067 0-1.143.923-2.066 
                2.067-2.066 1.143 0 2.066.923 
                2.066 2.066 0 1.141-.923 2.067-2.066 
                2.067zm1.777 13.019H3.56V9h3.554v11.452zM22.225 
                0H1.771C.792 0 0 .774 0 1.729v20.542C0 
                23.227.792 24 1.771 24h20.451C23.2 24 
                24 23.227 24 22.271V1.729C24 .774 23.2 0 
                22.225 0z"
            />
          </svg>
  
       </button>
      </div>

      <p className="text-gray-500">© 2025 All rights reserved.</p>
      <p className=" text-gray-500">
        Designed and Developed by Arandelle Paguinto
      </p>
      <p className=" text-gray-500">
        Contact me at:{" "}
        <a
          href="mailto: topaguintsarandell@gmail.com"
          className="text-amber-500"
        >
          topaguintsarandell@gmail.com
        </a>{" "}
      </p>
    </div>
  );
};

export default Footer;
