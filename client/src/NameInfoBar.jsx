import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const NameInfoBar = (props) => {


    let dollar = '';

    if(props.info.pricing === 1){
        dollar = '$';
    }else if(props.info.pricing === 2){
        dollar = '$$';
    }else if(props.info.pricing === 3){
        dollar = '$$$';
    }else if(props.info.pricing === 4){
        dollar = '$$$$';
    } else if(props.info.pricing === 5){
        dollar = '$$$$$';
    }
    
    return (
    <div className="boxTitleInfo">
      <div className="titleInfo">{props.info.name}</div>
      <div>
        <span className="bldInfo">{props.info.bld}</span>  
        <span className="dotInfo"> · </span>
        <span className="categoryInfo">{props.info.category}</span>  
        <span className="dotInfo"> · </span>
        <span className="dollarInfo">{dollar}</span>
      </div>
      <div className="reviewInfo">
        <div className="reviewTitleInfo">THE YUM.LY REVIEW</div>
        <div className="reviewTextInfo">
        {props.info.review[0].text}
        {props.info.review[1].text}
        {props.info.review[2].text}
        </div> 
      </div>
    </div>
    );
};

export default NameInfoBar;


