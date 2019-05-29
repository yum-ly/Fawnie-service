import React from'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const OpenTimes = (props) => {
    

    return(
        <div className="boxTime">
           <div className="openTimes" onClick={props.onClickHandel}> 
            <FontAwesomeIcon icon="clock" /> OPEN NOW · {props.info.openTimes.sunday[0]} - 
            <br/>  {props.info.openTimes.sunday[1]}  <FontAwesomeIcon icon="chevron-down" />
                <div className="addTimes" style={props.styling}>
                <br/>Monday.......... {props.info.openTimes.sunday[0]} - {props.info.openTimes.sunday[1]}
                <br/>Tuesday.......... {props.info.openTimes.sunday[0]} - {props.info.openTimes.sunday[1]}
                <br/>Wednesday..... {props.info.openTimes.sunday[0]} - {props.info.openTimes.sunday[1]}
                <br/>Thursday........ {props.info.openTimes.sunday[0]} - {props.info.openTimes.sunday[1]}
                <br/>Friday............. {props.info.openTimes.sunday[0]} - {props.info.openTimes.sunday[1]}
                <br/>Saterday......... {props.info.openTimes.sunday[0]} - {props.info.openTimes.sunday[1]}
                <br/>Sunday........... {props.info.openTimes.sunday[0]} - {props.info.openTimes.sunday[1]}
                </div>
           </div>
           
        </div>
    )


}

export default OpenTimes;