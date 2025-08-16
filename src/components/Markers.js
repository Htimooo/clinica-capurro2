import React from 'react';
import {Marker} from 'react-leaflet';
import { IconLocation } from './IconLocation';


 const Markers = () => {
  return (
    <Marker position={{ lat: '-34.90320', lng: '-56.15934' }} icon={IconLocation}/>
  )
}

export default Markers;