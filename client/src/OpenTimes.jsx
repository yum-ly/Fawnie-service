import React from'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const OpenTimes = (props) => {
    

    return(
        <div className="boxTime">
           <div className="openTimes" onClick={props.onClickHandel}> 
            <FontAwesomeIcon icon="clock" /> OPEN NOW · {props.info.openTimes.sunday[0]} - 
            <br/>  {props.info.openTimes.sunday[1]}  <FontAwesomeIcon icon="chevron-down" />
           </div>
        </div>
    )


}

export default OpenTimes;