/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { MapContainer, TileLayer, Marker, ZoomControl, Popup } from 'react-leaflet';
//import {FaAccusoft} from "react-icons/fa"
import { icon } from 'leaflet';
import { DataReturn } from "@/types/dataTypes";
const iconUrl =
  'https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon-2x.png';
const markerIcon = icon({
  iconUrl: iconUrl,
  iconSize: [10, 15],
});
type SlicedDataType = {
  data: Array<[number, number] | undefined>
}

const IncidentMapTemplate = ({data}: {data: Array<DataReturn>}) => {
  
  return (
    <div className="mt-4">
      <MapContainer center={data[0].coordinates} zoom={7} scrollWheelZoom={false} zoomControl={false} className='h-screen w-[100%] z-0 rounded-lg relative'>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <ZoomControl position='bottomright' />
        {data.map((obj, i) => (
        <Marker key={i} position={obj.coordinates} icon={markerIcon}>
          <Popup>
            Age Group: {obj.ageGroup} <br />
            Murdered: {obj.murderOutcome} <br />
            Color/Eth: {obj.race} <br />
            Sex: {obj.sex} <br />
          </Popup>
        </Marker>
      ))}
      </MapContainer>
    </div>
  )
}
export default IncidentMapTemplate;