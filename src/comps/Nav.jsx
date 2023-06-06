import React from "react";

const NavBar = () => {
  return (
    <>
      <div className="w-screen h-40 flex items-center justify-between px-10 ">
        <div className="font-jacques text-2xl">koscheiComplex</div>
        <div className="flex items-center">
          <div className="font-jaldi px-10">
            <a href="">Login</a>
          </div>
          <a href="">
            <div className="font-jaldi px-7 py-3 bg-neutral-950/10 border-2 rounded-3xl">
              Sign UP
            </div>
          </a>
        </div>
      </div>
    </>
  );
};

export default NavBar;