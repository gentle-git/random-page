import React from "react";
import aadmi from '../assets/aadmi.svg'

const Content = () => {
  return (
    <>
      <div className="mt-10 grid grid-cols-4 grid-rows-4 h-4/6 w-4/6">
        <div className="col-span-2 row-span-4 self-end "> <img src={aadmi} className="h-160 min-h-160"  /></div>
        <div className="col-span-2 row-span-2 col-start-3 font-jacques text-8xl ">Discover <br /> Your Website?</div>
        <div className="col-span-2 row-span-2 col-start-3 row-start-3 font-jaldi text-2xl pl-4">
          <a href="">Learn More &#10230;</a>
          </div>
      </div>
    </>
  );
};

export default Content;
