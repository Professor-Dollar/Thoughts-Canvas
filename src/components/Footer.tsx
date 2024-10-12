const Footer = () => {
  return (
    <>
    <link href="https://cdn.jsdelivr.net/npm/remixicon@4.3.0/fonts/remixicon.css" rel="stylesheet"/>
      <div className='flex lg:text-[1.2vw] md:text-[1.5vw] sm:text-[1.8vw] text-[2vw] items-center justify-between bg-slate-400/70 border-t-[1px] border-t-slate-700 h-12 text-black px-4 w-full'>
      <p className="tracking-wide ">Made by Moid Malik with 🤎 </p>
      <div className="flex gap-2  tracking-tighter font-[400]">
        <a href="https://wa.me/+923126968917"><i className="ri-whatsapp-line"></i></a>
        <a href="https://github.com/professor-dollar"><i className="ri-github-line"></i></a>
        <a href="#"><i className="ri-information-line"></i></a>
      </div>
      </div>
    </>
  )
}

export default Footer