import React,{ useState } from 'react';
import ReactMapGL, {Marker, Popup} from 'react-map-gl';
import getCenter from 'geolib/es/getCenter'
import { LocationMarkerIcon } from '@heroicons/react/outline';


const GoogleMap = ({hotels}) => {
    
    const [hotelLocation, setHotelLocation] = useState({})


    // Transfrom the search result object into the 
    //  { latitude: 52.516272, longitude: 13.377722 } object
    const corodinates = hotels.map(hotel =>({
        longitude: hotel.long,
        latitude: hotel.lat
    }))

    const center = getCenter(corodinates)
    console.log(center)

    const [viewPort, setViewPort] = useState({
        longitude: center.longitude,
        latitude: center.latitude,
        zoom: 11,
    });
     
    
    return (
        <ReactMapGL
            mapStyle='mapbox://styles/rajudeb/ckya467fz1l6p14qsmepgwxko'
            mapboxApiAccessToken='pk.eyJ1IjoicmFqdWRlYiIsImEiOiJja3lhM3h2bmIwMXUzMnBxdXV2aXRvOTJuIn0.2WhRYJ3pReuUNBdMcA6lzQ'
            {...viewPort}
            width= '100%'
           height= '100%'
            onViewportChange={(nextViewPort)=> setViewPort(nextViewPort)}
        >
            {hotels.map(hotel =>(
                <div key={hotel._id}>
                    <Marker
                     longitude={hotel.long}
                     latitude={hotel.lat}
                     offsetLeft={-20}
                     offsetTop={-10}
                    >
                    <p 
                    role="img"
                    onClick={()=> setHotelLocation(hotel)} className='cursor-pointer text-2xl animate-bounce'
                    aria-label='push-pin'
                    
                    > <LocationMarkerIcon className='h-8 w-8 text-red-500'/> </p>   
                    </Marker>
                     {/* show pop up */}
                     {hotelLocation.long === hotel.long ? (
                         <Popup
                         onClose={()=> setHotelLocation({})}
                         closeOnClick={true}
                         latitude={hotel.lat}
                         longitude={hotel.long}
                         >
                             {hotel.title}
                         </Popup>
                     ):(
                         false
                     )}
                </div>
            ))}
        </ReactMapGL >
    );
};

export default GoogleMap;