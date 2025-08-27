import react from 'react'
import { div } from 'simple-mathjss'



export function Mainbanner(){

const name = "<RAHUL G L/>"
const logo = "</>"

    return(
          <div className='banner1' >

        <div className='  h-screen  m-auto   w-screen flex justify-around '>
           <div className='content-center -ml-4 '>
             <h3 className='text-[40px] font-bold text-white  w-full  '>Hi, I'm </h3>
             <h1 className=' name font-bold w-full  '> {name}</h1>
             <p className='break-normal w-150 text-white'>I'm a passionate full-stack developer specializing in <span className='name font-bold !text-[20px]'>MERN STACK</span> I build scalable web application with clean , maitanable code and focus on performance and user experience.</p>
           </div>
           <div className='content-center'>
                <h1 className='!font-bold !text-[300px] logo'>{logo}</h1>
           </div>

        </div>


</div>


    )



}