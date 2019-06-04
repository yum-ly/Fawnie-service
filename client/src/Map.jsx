import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';



const apiKey = process.env.API_KEY;


const Map = (props) => {
   // console.log(props.info.GPS.x, 'x coordinates')

    const divStyle = {
        top: 250 + props.size
    }
   
    
    return (
        <div className="boxTimeThreeInfo" style={divStyle}>
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
                lat: 30.265824,
                lng: -97.74926
              }}
              
           
          >
           
          </GoogleMap>
        </LoadScript>
        </div>
       )
}

export default Map;

