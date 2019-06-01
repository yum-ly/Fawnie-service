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
        <div className="boxTimeTwo" style={divStyle}>
            <div className="contacts">
                <div className="address">
                    <span style={spaceStyle}><FontAwesomeIcon icon="map-marker-alt" className="icon" /> </span>
                    <span>{props.info.address}</span>
                </div>
                <div className="phone">
                    <span style={spaceStyle}><FontAwesomeIcon icon="phone" className="icon" /> </span>  
                    <span>{props.info.phone}</span>
                </div>
                <div className="email">
                    <span style={spaceStyle}><FontAwesomeIcon icon="envelope-square" className="icon" /> </span>
                    <span>{props.info.email}</span>
                </div>
                <div className="website">
                    <span style={spaceStyle}><FontAwesomeIcon icon="window-maximize" className="icon" /> </span>
                    <span>{props.info.url}</span>
                </div>
                <div className="directions">
                    <span style={spaceStyle}><FontAwesomeIcon icon="directions" className="icon" /> </span>
                    <span>Get Directions</span>
                </div>
            </div>
        </div>
    )

}

export default Contacts;
