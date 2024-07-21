import React from 'react'

const RightContact = () => {
  return (
    <div className='flex flex-col gap-8 justify-center items-center'>
    <a href='https://api.whatsapp.com/send?phone=923147535843'>
    <div className='w-full p-10 flex flex-col items-center justify-center dark:border-b-black dark:bg-[#001919] bg-[#F5FCFF] border-b-2 shadow-md rounded-xl'>
        <p className='text-2xl font-bold dark:text-gray-300 text-black'>WhatsApp</p>
        <p className='text-2xl font-bold dark:text-gray-300 text-black'>+923147535843</p>
        <p className='text-xl font-normal text-gray-400 mt-4'>Send Me Message</p>
    </div>
    </a>
    
    <a href='mailto:dnmughal54321@gmail.com' target="_blank" rel="noopener noreferrer" class="flex items-center">
    <div className='shadow-md p-10 flex flex-col items-center justify-center dark:border-b-black dark:bg-[#001919] bg-[#F5FCFF] border-b-2 rounded-xl '>
        <p className='text-2xl font-bold dark:text-gray-300 text-black'>Email</p>
        <p className='text-2xl font-bold dark:text-gray-300 text-black'>dnmughal54321@gmail.com</p>
        <p className='text-xl font-normal text-gray-400 mt-4'>Send Me Message</p>
    </div>
    </a>
</div>
    // <div className="w-full lgl:w-[30%] h-full bg-[#F5FCFF] p-2 lgl:p-8 rounded-lg shadow-md flex flex-col gap-8 justify-center">
   
    // </div>
  )
}

export default RightContact