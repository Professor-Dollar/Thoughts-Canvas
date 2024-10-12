"use client";
import Image from "next/image"
import blogs from "@/dummy-data/blogs"
import { useEffect, useState } from "react";
const page = () => {
  const [id, setId] = useState<number>(0); 
  useEffect(() => {
    const currentUrl = window.location.href; 
    const url = new URL(currentUrl); 
    const segments = url.pathname.split("/"); 
    const lastSegment = segments[segments.length - 1]; 
    const idNumber = Number(lastSegment); 
    setId(idNumber); 
    console.log(idNumber); 
  }, []); 

  
  return (
    <main>
      <div className="mt-[7vw] ">
        <div className="sec1  mx-auto">
          <div className="imgSec h-[24vw] w-6/12 mx-auto bg-red-500/40 relative">
          <Image
          src={blogs[id].blogImage}
          alt=""
          layout="fill"
          objectFit="cover"
          ></Image>
          </div>
          <div className="heading font-[helvetica]  flex justify-center text-5xl font-[200] tracking-tighter leading-non"><h1 className="">{blogs[id].blogTitle}</h1></div>
        <div className="w-8/12 mx-auto block  h-[1px] bg-slate-700 my-4"></div>
        </div>
        <div className="sec2 mx-auto relative w-8/12 mb-4">
        <article className="text-sm">{blogs[id].article}</article>
        </div>
      </div>
    </main>
  )
}

export default page