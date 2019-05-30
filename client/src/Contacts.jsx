import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Contacts = (props) => {


    return(
        <div className="boxTimeTwo">
            <div className="contacts">
            <div className="address"><FontAwesomeIcon icon="map-marker-alt" />  {props.info.address}</div>
            <div className="phone"><FontAwesomeIcon icon="phone" />  {props.info.phone}</div>
            <div className="email"><FontAwesomeIcon icon="envelope-square" /> {props.info.email}</div>
            <div className="website"><FontAwesomeIcon icon="window-maximize" /> {props.info.url}</div>
            <div className="directions"><FontAwesomeIcon icon="directions" /> Get Directions</div>
            
            
            </div>

        </div>
    )

}

export default Contacts;
