import React, { useState } from 'react';
import { Rating } from '@mui/material';
import Map from './map/map';
// import penyusuk from '../../../assets/pantai-penyusuk.png';

const Detail = () => {

    const [desk, setDesk] = useState(true);
    const handle = () => {
        let deskripsi = document.querySelector('.desk');
        // let foto = document.querySelector('.foto');
        deskripsi.classList.remove("hidden")
        // foto.classList.remove("hidden")
        setDesk(!desk);
        if(desk === false){
            let deskripsi = document.querySelector('.desk');
            deskripsi.classList.add("hidden");
            // let foto = document.querySelector('.foto');
            // foto.classList.add("hidden");
        }
    }


  return (
    <>
        <Map/>
        <div className='absolute bottom-0 sm:static w-full bg-white rounded-t-2xl px-[28px] pb-4 z-10'>
            <div className='text-center sm:hidden'>
            <span onClick={handle} className='text-6xl cursor-pointer'>
                <ion-icon name="arrow-dropup"/>
            </span>
            </div>
            {/* <div className='foto hidden bg-slate-500 sm:flex'>
                <img className='h-40 w-full' src={penyusuk} alt="penyusuk"/>
            </div> */}
            <h1 className='mb-4 text-4xl font-bold'>Pantai Penyusuk</h1>
            <span>
                <Rating/>
                <h1 className='mb-4'>4.5 (23 Review)</h1>
            </span>
            <div className='desk hidden sm:flex sm:flex-col'>
            <h2 className='text-2xl font-semibold mb-2'>Deskripsi</h2> 
            <p className='text-justify mb-4'>Magna ad ea cupidatat dolor culpa eiusmod mollit dolore do ut.
            Tempor officia duis est velit exercitation reprehenderit.
            Esse mollit sint adipisicing voluptate ad aute dolor id.
            Dolore quis laborum labore anim nisi veniam sint sint ut pariatur.Tempor sint enim laboris aute dolore culpa dolor irure consequat fugiat.
            Occaecat aliqua amet magna magna voluptate quis veniam qui Lorem.
            Voluptate ex veniam elit duis commodo anim et.
            Mollit quis laboris exercitation ea aliqua.
            Laborum non ea elit aliqua nisi sint reprehenderit.Aliqua laborum cupidatat fugiat laborum aliqua non cillum ea velit.
            Aliquip est ullamco voluptate nulla sunt non ipsum id dolore do voluptate.
            </p>
            </div>
            <button className='mt-4 bg-blue-500 w-full py-4 rounded-md'><a href='https://www.google.com/maps/dir//Danau+Kaolin,+Jl.+Raya+Gadung,+Nibung,+Kec.+Koba,+Kabupaten+Bangka+Tengah,+Kepulauan+Bangka+Belitung+33782/@-2.5583328,106.3605236,15z/data=!4m9!4m8!1m0!1m5!1m1!1s0x2e3d4513bce66569:0xb60b7ec414d881df!2m2!1d106.3528592!2d-2.5478741!3e0'>Telusuri Map</a></button>
        </div>
    </>
  )
}

export default Detail