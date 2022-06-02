import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

const Map = () => {
    const center = [-2.5478741, 106.3506705];
    const icon = L.icon({ iconUrl: "marker-icon.png"});
  return (
    <MapContainer className='w-screen h-[60vh] sm:h-[40vh] -z-10 sm:z-0' center={center} zoom={11}>
  <TileLayer
        url="https://api.maptiler.com/maps/basic/256/{z}/{x}/{y}.png?key=BAlQDblR3YPwUeGd5ukZ"
        attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
      />
  <Marker position={center} icon={icon}>
    <Popup>
      <h1 className='text-xl text-center'>Danau Kaolin. <br/> <span className='text-sm'>jl.Raya Air Bara</span></h1>
      <button className='mt-4 bg-blue-400 rounded-md w-full py-1'><a href='https://www.google.com/maps/dir//Danau+Kaolin,+Jl.+Raya+Gadung,+Nibung,+Kec.+Koba,+Kabupaten+Bangka+Tengah,+Kepulauan+Bangka+Belitung+33782/@-2.5583328,106.3605236,15z/data=!4m9!4m8!1m0!1m5!1m1!1s0x2e3d4513bce66569:0xb60b7ec414d881df!2m2!1d106.3528592!2d-2.5478741!3e0'>Telusuri Map</a></button>
    </Popup>
  </Marker>
</MapContainer>
  )
}

export default Map