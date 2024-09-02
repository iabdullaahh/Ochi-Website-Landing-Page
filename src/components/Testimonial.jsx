import React from 'react'

function Testimonial2() 
{
  return (
    <div className=" font-['Neue-Montreal']">

      <div className="max-w-full py-8 bg-zinc-100 text-black ">
      <h2 className="text-[3.8vw] tracking-tighter text-black uppercase px-10 font-bold pb-10 ">Clients’ reviews</h2>
      <div className="border-b-[1px] border-zinc-700 "></div>
      </div>

      <div className='flex px-10 bg-zinc-100'>

        <div className='w-1/2 text-black flex gap-10'>
         <p className='underline underline-offset-1 text-xl'>Karman Ventures</p>
         <p className='pl-40 text-xl underline underline-offset-1'>Services:</p>
        </div>

        <div className='w-1/2 text-black flex gap-10 space-x-16 '>
        <p className='text-base'>William Barnes</p>
        <p className='text-gray-500 cursor-pointer pl-96'>READ</p> 
        
        </div>



    </div>



    <div className='flex px-10 bg-zinc-100'>

       <div className='w-1/2 text-black flex flex-col gap-3 mt-10  pl-80'>
      <span><button className="border rounded-full border-black text-sm px-1 py-2 hover:bg-black hover:text-white transition ease-in-out duration-300">INVESTOR DECK</button></span> 
      <span><button className="border rounded-full  border-black text-sm px-1 py-2 hover:bg-black hover:text-white transition ease-in-out duration-300">SALES DECK</button></span> 
      
        </div>

            <div className='w-1/2 text-black flex flex-col gap-3 my-10 '>
            <img src="https://ochi.design/wp-content/uploads/2023/02/William-Barnes-1-300x300.png" alt="Client" className="rounded-md w-32 h-32 object-cover" />
            <p className="text-base font-medium leading-tight pr-60">
          They were transparent about the time and the stages of the project. 
          The end product is high quality, and I feel confident about how they 
          were handholding the client through the process. I feel like I can 
          introduce them to someone who needs to put a sales deck together from 
          scratch, and they would be able to handhold the client experience from 
          0 to 100 very effectively from story to design. 5/5
        </p>
             </div>
             </div>

             
             

        <div className=" border-t-[1px] border-zinc-900 px-10 py-5  flex justify-between bg-zinc-100 text-black">
        <p className=" underline underline-offset-1 font-semibold cursor-pointer">Workiz Easy</p>
        <p>Tomer Levy</p>
        <p className="underline underline-offset-1 font-semibold cursor-pointer">READ</p>
        </div>

        <div className=" border-t-[1px] border-zinc-900 px-10 py-5  flex justify-between bg-zinc-100 text-black">
        <p className=" underline underline-offset-1 font-semibold cursor-pointer">Premium Blend</p>
        <p className='pr-7'>Ellen Kim</p>
        <p className=" underline underline-offset-1 font-semibold cursor-pointer">READ</p>
        </div>

        <div className=" border-t-[1px] border-zinc-900 px-10 py-5  flex justify-between bg-zinc-100 text-black">
        <p className=" underline underline-offset-1 font-semibold cursor-pointer">Officevibe</p>
        <p className='pl-4'>Raff Labrie</p>
        <p className="underline underline-offset-1 font-semibold cursor-pointer">READ</p>
        </div>

        <div className=" border-t-[1px] border-zinc-900 px-10 py-5  flex justify-between bg-zinc-100 text-black">
        <p className=" underline underline-offset-1 font-semibold cursor-pointer">Hypercare Systems</p>
        <p className='pr-6'>Brendan Goss</p>
        <p className="underline underline-offset-1 font-semibold cursor-pointer">READ</p>
        </div>

        <div className=" border-t-[1px] border-zinc-900 px-10 py-5   justify-between flex bg-zinc-100 text-black">
        <p className=" underline underline-offset-1 font-semibold cursor-pointer">Orderlion</p>
        <p className='pl-14'>Stefan Strohmer</p>
        <p className="underline underline-offset-1 font-semibold cursor-pointer">READ</p>
        </div>

        <div className=" border-t-[1px] border-zinc-900 px-10 py-5  justify-between flex bg-zinc-100 text-black">
        <p className=" underline underline-offset-1 font-semibold cursor-pointer">Black Book</p>
        <p className='pl-2'>Jaci Smith</p>
        <p className=" underline underline-offset-1 font-semibold cursor-pointer">READ</p>
        </div>

        <div className=" border-t-[1px] border-zinc-900 px-10  py-5 flex  justify-between bg-zinc-100 text-black">
        <p className=" underline underline-offset-1 font-semibold cursor-pointer">Trawa Energy</p>
        <p className='pl-4'>David Budde</p>
        <p className="underline underline-offset-1 font-semibold cursor-pointer">READ</p>
        </div>


            
         


        
       
      
  </div>
  )
}

export default Testimonial2
