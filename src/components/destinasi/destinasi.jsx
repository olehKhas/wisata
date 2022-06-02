import React, {useState} from 'react';
import { Rating } from '@mui/material';
import penyusuk from '../../assets/pantai-penyusuk.png';
import padi from '../../assets/pasir_padi.png';
import putri from '../../assets/pulau_putri_bangka_belitung.png';
import puri from '../../assets/puri-tri-agung.png';
import wisma from '../../assets/wisma-ranggam.png';

const Destinasi = () => {

  const [ratingValue, setRatingValue] = useState(0);

  const data = [
    {title: "Pantai Penyusuk", rating: "4.5", jumlah: "(12 Review)", gambar:penyusuk},
    {title: "Pantai Pasir padi", rating: "4.1", jumlah: "(23 Review)", gambar:padi},
    {title: "Wisma Ranggam", rating: "4.8", jumlah: "(16 Review)", gambar:wisma},
    {title: "Puri Tri Agung", rating: "3.7", jumlah: "(4 Review)", gambar:puri},
    {title: "Pantai Penyak", rating: "3.5", jumlah: "(42 Review)", gambar:padi},
    {title: "Air Terjun Sadap", rating: "4.0", jumlah: "(32 Review)", gambar:putri},
    {title: "Pulau Putri", rating: "4.2", jumlah: "(21 Review)", gambar:putri},
  ];

  return (
    <div className='h-screen bg-gray-100 dark:bg-gray-900'>
        <h1 className='text-4xl font-semibold p-8 md:px-20 dark:text-gray-100'>Explore Destinasi</h1>
        <div className='md:px-20 grid bg-gray-100 dark:bg-gray-900 sm:grid-cols-2 gap-12 md:grid-cols-3 lg:grid-cols-4 px-8'>
        {data.map((datas)=>(
        <div className='relative h-[360px]'>
                <img src={datas.gambar} alt='wisata' className=' w-full h-[80%] rounded-md'/>
                <div className='cursor-pointer opacity-80 absolute top-4 right-4 bg-slate-50 rounded-md px-3 py-2'>
                  <span className='text-xl'>
                    <ion-icon name="heart"/>
                  </span>
                </div>
                <div className='bg-white dark:bg-gray-800 dark:text-gray-200 absolute bottom-0 left-[18px] rounded-xl w-[88%] p-4 shadow-2xl flex flex-col items-center'>
                    <h2 className='text-2xl'>{datas.title}</h2>
                    {/* <p className='text-sm text-gray-500'>Anim veniam sit nulla reprehenderit veniam officia dolore ut velit occaecat velit voluptate ad est.</p> */}
                    <span className='flex items-center'>
                      <Rating
                        name="Rating Label"
                        value={ratingValue}
                        onChange={(event, newValue) => {
                          setRatingValue(newValue);
                        }}
                      />
                      <p className='ml-2 text-xl font-semibold'>{datas.rating}</p>
                    </span>
                    <p className='text-gray-500'>{datas.jumlah}</p>
                    <button className='bg-blue-500 rounded-md w-full py-2 mt-2'>Detail</button>
                </div>
            </div>
        ))}
        </div>
    </div>
  )
}

export default Destinasi