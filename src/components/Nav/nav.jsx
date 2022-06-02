import React, { useState } from 'react';
// import '../components/search/SearchBar.css';
// import Cat from '../../assets/cat.png';
import MenuItem from './menu';

const Nav = ({data}) => {

    const [filteredData, setFilteredData] = useState([]);
    const [wordEntered, setWordEntered] = useState("");
    // const [nav, setNav] = useState(false);

    const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = data.filter((value) => {
      return value.title.toLowerCase().includes(searchWord.toLowerCase());
    });

    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };
    
    const html = window.document.documentElement;
    let item = localStorage.getItem('class');
    html.classList.add(item);

    const [open, setOpen] = useState(false);
    const [mode, setMode] = useState(false);

    const menu = [
        {nama:"Home", link:"/"},
        {nama:"Destinasi", link:"/",
        submenu: [
          {nama: "Explore", link: "/"},
          {nama: "Rekomendasi", link: "/"},
        ]
        },
        {nama:"Roadmap", link:"/"},
        {nama:"Contact", link:"/"},
];


    const handleMode = () => {
        let label = document.querySelector('.label');
        label.innerText = 'Light Mode';
        localStorage.setItem('class', 'dark')
        localStorage.setItem('icon', 'true')
        setMode(!mode);

        if(mode === true){
            html.classList.remove('dark')
            label.innerText = 'Dark Mode'
            localStorage.removeItem('class', 'light')
        }
    }


  return (
    <div className='w-full shadow-xl top-0 left-0 sticky z-10'>
        {filteredData.length !== 0 && (
        <div className="absolute md:top-[60px] md:left-[400px] top-[135px] left-[36px] md:mt-[5px] md:w-[460px] w-[645px] max-h-[240px] bg-slate-50 overflow-hidden overflow-y-auto rounded-md z-[70]">
          {filteredData.slice(0, 15).map((value, key) => {
            return (
              <a className="w-full h-[50px] flex items-center" href={value.link}>
              <img className='rounded-full ml-2 w-7 h-7' alt='cat'/>
                <p className='ml-[10px]'>{value.title} </p>
              </a>
            );
          })}
        </div>
      )}
        <div className='bg-white dark:bg-gray-900 md:flex justify-between items-center duration-700'>
            <div className='dark:text-gray-200 flex text-2xl text-slate-600 font-semibold py-4 px-7 md:px-10'>
                <span className='text-blue-500 text-3xl items-center'>
                    <ion-icon name="logo-ionic"/>
                </span>
                Kawaii Stray Cats
            </div>
            
            <div onClick={()=>setOpen(!open)} className='md:hidden absolute top-5 right-8 text-3xl dark:text-gray-50'>
                <ion-icon name={open ? 'close':'menu'}/>
            </div>

            <ul className={`dark:bg-gray-900 border-t-2 md:border-t-0 shadow-md md:shadow-transparent md:flex md:items-center md:pb-0 pb-12 absolute md:static md:mr-12 bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-[68px] ':'top-[-490px]'}`}>
            <div className='ml-[-20px] px-5 mr-12 relative flex'>
            <span className='text-2xl text-slate-400 absolute md:left-[42px] left-10 md:top-2 top-[28px]'>
                <ion-icon name="search"/>
            </span>
                <input value={wordEntered} onChange={handleFilter} type="text" placeholder='Search Destinasi Wisata' className='mt-5 md:mt-0 outline-none bg-gray-100 pl-14 rounded py-2 w-full md:w-[220px] lg:w-[440px] dark:bg-gray-700 dark:text-gray-300'/>
            </div>
            {menu.map((menus, index) => {
              return <MenuItem menu={menus} key={index} />;
            })}

            <span onClick={()=>handleMode()} className='flex items-center text-2xl mr-2 text-gray-700 dark:text-white cursor-pointer'>
            <ion-icon name={mode ? 'sunny':'moon'}/>
            <span className='label text-sm ml-1 md:mr-4'>Dark Mode</span>
            </span>
                
                <button className='bg-blue-500 text-white rounded px-6 py-2 mt-4 md:mt-0'>Login</button>
            </ul>

        </div>
    </div>
  )
}

export default Nav