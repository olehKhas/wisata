import React from 'react'

const Dropdown = ({submenus, hide}) => {

  return (
    <>
        {
            hide ? <ul className='launch w-[200px] max-h-40 absolute right-[335px] top-[68px]'>
            {submenus.map((submenu, index)=>(
            <li key={index} className='bg-blue-500 text-white w-full py-3 px-2 border-b-[0.5px] border-gray-400'>{submenu.nama}</li>
            ))}
            </ul> 
            : 
            <ul className='launch w-[200px] max-h-40 absolute right-[335px] top-[68px] hidden'>
            {submenus.map((submenu, index)=>(
            <li key={index} className='bg-blue-500 text-white w-full py-3 px-2 border-b-[0.5px] border-gray-400'>{submenu.nama}</li>
            ))}
        </ul>
        }
        
    </>
  )
}

export default Dropdown