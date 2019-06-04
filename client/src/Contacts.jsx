import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Contacts = (props) => {
    const divStyle = {
        top: 40 + props.size
    }
    const spaceStyle = {
        wordSpacing: '30px'
    }


    return(
        <div className="boxTimeTwoInfo" style={divStyle}>
            <div className="contactsInfo">
                <div className="addressInfo">
                    <span style={spaceStyle}><FontAwesomeIcon icon="map-marker-alt" className="iconInfo" /> </span>
                    <span>{props.info.address}</span>
                </div>
                <div className="phoneInfo">
                    <span style={spaceStyle}><FontAwesomeIcon icon="phone" className="iconInfo" /> </span>  
                    <span>{props.info.phone}</span>
                </div>
                <div className="emailInfo">
                    <span style={spaceStyle}><FontAwesomeIcon icon="envelope-square" className="iconInfo" /> </span>
                    <span>{props.info.email}</span>
                </div>
                <div className="websiteInfo">
                    <span style={spaceStyle}><FontAwesomeIcon icon="window-maximize" className="iconInfo" /> </span>
                    <span>{props.info.url}</span>
                </div>
                <div className="directionsInfo">
                    <span style={spaceStyle}><FontAwesomeIcon icon="directions" className="iconInfo" /> </span>
                    <span>Get Directions</span>
                </div>
            </div>
        </div>
    )

}

export default Contacts;
