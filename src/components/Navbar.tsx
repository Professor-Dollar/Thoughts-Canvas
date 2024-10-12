import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="flex bg-slate-400/70 backdrop-blur-md z-10 top-0 fixed shadow-md items-center justify-between px-6 h-[80px] w-full">
      <div className="navLeft">
        <h1 className="font-semibold text-[1.5rem] tracking-tighter">
         <Link href={'/'}> Thoughts<span className="text-[#00b4d8]" >Canvas</span></Link>
          </h1>
      </div>
      <div className="navRight font-[poppins] flex gap-2 text-sm">
        <button>Login</button>
        <button className="bg-[#00B4D8] px-3 py-3 rounded-3xl" >Signup</button>
      </div>
    </div>
  );
};

export default Navbar;
