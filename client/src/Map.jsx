import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';



const apiKey = process.env.API_KEY;


const Map = (props) => {
    console.log(props.info.GPS.x, 'x coordinates')
   
    
    return (
        <div className="boxTimeThree">
        <LoadScript
          id="script-loader"
          googleMapsApiKey={apiKey}
         
        >
          <GoogleMap
            id='example-map'
            mapContainerStyle={{
                height: '400px',
                width: '400px'
              }}
              zoom={16}
              center={{
                lat: 30.266926,
                lng: -97.750519
              }}
           
          >
           
          </GoogleMap>
        </LoadScript>
        </div>
       )
}

export default Map;

