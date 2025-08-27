import react from 'react'
import { div } from 'simple-mathjss'


const data=["https://iconape.com/wp-content/png_logo_vector/html-5.png","https://cdn.freebiesupply.com/logos/large/2x/css3-logo-png-transparent.png","https://getbootstrap.com/docs/5.2/assets/brand/bootstrap-logo-shadow.png","https://images.seeklogo.com/logo-png/27/2/javascript-js-logo-png_seeklogo-273557.png","https://static-00.iconduck.com/assets.00/tailwind-css-icon-128x77-b993fpol.png","https://media.mongodb.org/ico/icon-leaf.png","https://logodix.com/logo/542233.png","https://pluspng.com/img-png/nodejs-logo-png-nice-images-collection-node-js-desktop-wallpapers-370.png","https://vectorified.com/images/express-js-icon-20.png","https://logodix.com/logo/1658364.png"]
const data2=["https://logospng.org/download/visual-studio-code/visual-studio-code-2048.png","https://www.pngall.com/wp-content/uploads/13/Github-Logo.png","https://iconape.com/wp-content/png_logo_vector/postman.png","https://brandslogos.com/wp-content/uploads/images/large/aws-s3-logo.png"]

export function Skills(){

   return(

<>
<div className='banner2'>

<div id='skills' className=' max-w-[1200px] h-screen m-auto text-center  content-center ' >
    <div>
          <h2 className='text-white font-bold'>Skills</h2>
    </div>
     <div className='flex justify-between h-[150px] '>
     {data.map((item,i)=>{
        return(
            <div className='w-[70px] h-[100px]  rounded-xl content-center   ' key={i}>
                <img src={item} alt="rahul" />
            </div>
      )
     })}



     </div>
     <div>
         <h2 className='text-white font-bold'>Tools</h2>
     </div>
      <div className='flex justify-evenly h-[150px] '>
     {data2.map((item,i)=>{
        return(
            <div className='w-[70px] h-[100px]  rounded-xl content-center   ' key={i}>
                <img src={item} alt="rahul" />
            </div>
      )
     })}



     </div>
</div>
</div>


</>
)



}