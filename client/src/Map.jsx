import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';






const Map = (props) => {
    console.log(props.info.GPS.x, 'x coordinates')
   
    
    return (
        <div className="boxTimeThree">
        <LoadScript
          id="script-loader"
          googleMapsApiKey='AIzaSyBHC7zgSq4ktthalaz7n-nzmEUqKZGzLsI'
         
        >
          <GoogleMap
            id='example-map'
            mapContainerStyle={{
                height: '300px',
                width: '300px'
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

