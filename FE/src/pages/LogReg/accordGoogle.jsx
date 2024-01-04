import React from "react";

export default function AccordGoogle() {
  return (
    <div className="flex justify-center">
      <div className="signGoogle pl-2 mx-2 md:mx-4 pt-3">
        <button className="google-button rounded-lg flex items-center justify-between bg-white h-10 w-80 px-10 md:py-6 md:pl-18 md:h-10">
          <div className="flex items-center justify-center">
            <img
              className="h-6 md:h-6 pl-8  md:pl-12"
              src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png"
              alt="Google"
            />
            <p className="text-black text-sm font-bold ml-2 md:text-xs">
              Sign in with Google
            </p>
          </div>
        </button>
      </div>
    </div>
  );
}
