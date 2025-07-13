import React from "react";

function Card({ user}) {
  return (
    <>
      {user.map((item, index) => {
        return (
          <div className="w-52 h-full bg-zinc-100 rounded-lg flex flex-col items-center p-2">
            <div className="image w-[3vw] h-[3vw] rounded-full bg-zinc-200 overflow-hidden">
              <img className="w-full h-full object-cover" src="" alt="" />
            </div>
            <h1 className=" mt-1 text-xl font-semibold">Muskan</h1>
            <h4 className="opacity-40 text-xs font-semibold">
              muskan@female.com
            </h4>
            <p className="mt-1 text-center text-xs font-semibold leading-none tracking-tight">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam,
              quibusdam!
            </p>
            <button className="px-3 py-1 bg-red-500 rounded-lg font-semibold text-white mt-4">
              Remove it
            </button>
          </div>
        );
      })}
    </>
  );
}

export default Card;
