/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { MapContainer, TileLayer, Marker, ZoomControl } from 'react-leaflet';
//import {FaAccusoft} from "react-icons/fa"
import { icon } from 'leaflet';
const iconUrl =
  'https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon-2x.png';
const markerIcon = icon({
  iconUrl: iconUrl,
  iconSize: [10, 15],
});
type SlicedDataType = {
  data: Array<[number, number] | undefined>
}

const IncidentMapTemplate = (data: SlicedDataType) => {
  console.log(data);
  
  return (
    <div className="mt-4">
      <MapContainer center={[40.695051, -73.917793]} zoom={7} scrollWheelZoom={false} zoomControl={false} className='h-[400px] w-[50%] z-0 rounded-lg relative'>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <ZoomControl position='bottomright' />
        {/* {position.map((posit, i) => (
        <Marker key={i} position={posit} icon={markerIcon}></Marker>
      ))} */}
      </MapContainer>

    </div>
  )
}
export default IncidentMapTemplate;