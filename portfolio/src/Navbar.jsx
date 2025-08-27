import React from 'react'



export default function Navbar(){


    return(

    <>
<div className="fixed banner w-full ">

<header className="max-w-[1200px] mx-auto  px-4 py-5 w-full flex justify-end  ">


  <div className=" ">
    <ul className="flex gap-4">
      <li className="px-4 py-2 rounded hover:bg-black hover:text-white cursor-pointer transition font-bold">
        Home
      </li>
      <a href="#skills"> <li className="px-4 py-2 rounded hover:bg-black hover:text-white cursor-pointer transition font-bold">
        Skills
      </li></a>
      <li className="px-4 py-2 rounded hover:bg-black hover:text-white cursor-pointer transition font-bold">
        Projects
      </li>
      <li className="px-4 py-2 rounded hover:bg-black hover:text-white cursor-pointer transition font-bold">
        Contact
      </li>
    </ul>
  </div>
</header>



  </div>
      </>
  


    )


}