import React from "react";

const Skeleton = () => {
  return (
    <div className="wrapper max-w-sm gap-3 mx-auto mt-10 rounded-md p-3">
      <form className="flex flex-col gap-3">
        <div className="p-2 h-8 animate-pulse bg-slate-200"></div>
        <button className=" h-8  animate-pulse justify-center gap-2 p-2 flex items-center bg-slate-200 text-white hover:opacity-80"></button>
      </form>
      <li className="flex gap-2 mt-4 justify-between items-center">
        <span className="w-[60%] h-7 bg-slate-200 animate-pulse"></span>
        <div className="edit flex items-center ml-auto">
          <div className="h-4 w-4 bg-slate-200 animate-pulse"></div>
          <button className=" h-4 bg-slate-200 animate-pulse flex items-center"></button>
        </div>
      </li>
      <li className="flex gap-2 mt-4 justify-between items-center">
        <span className="w-[60%] h-7 bg-slate-200 animate-pulse"></span>
        <div className="edit flex items-center ml-auto">
          <div className="h-4 w-4 bg-slate-200 animate-pulse"></div>
          <button className=" h-4 bg-slate-200 animate-pulse flex items-center"></button>
        </div>
      </li>
      <li className="flex gap-2 mt-4 justify-between items-center">
        <span className="w-[60%] h-7 bg-slate-200 animate-pulse"></span>
        <div className="edit flex items-center ml-auto">
          <div className="h-4 w-4 bg-slate-200 animate-pulse"></div>
          <button className=" h-4 bg-slate-200 animate-pulse flex items-center"></button>
        </div>
      </li>
    </div>
  );
};

export default Skeleton;
