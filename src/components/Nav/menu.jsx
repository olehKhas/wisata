import React, {useState} from 'react';
import Dropdown from './dropdown';

const Menu = ({menu}) => {

    const [hide, setHide] = useState(false);

    const handle = () =>{
        setHide(!hide)
    }

  return (
    <li className='dark:text-gray-200 py-2 md:mr-5 cursor-pointer'>
        {menu.submenu ? (
            <>
            <button type='button' onClick={handle}>
                {menu.nama}
            </button>
            <Dropdown submenus={menu.submenu} hide={hide}/>
            </>
        ):(
            <a href={menu.link}>{menu.nama}</a>
        )}
    </li>
  )
}

export default Menu