import React from 'react';

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
    <div className="box">
      <div className="title">{props.info.name}</div>
      <div>
        <span className="bld">{props.info.bld}</span>  
        <span className="dot"> · </span>
        <span className="category">{props.info.category}</span>  
        <span className="dot"> · </span>
        <span className="dollar">{dollar}</span>
      </div>
    </div>
    );
};

export default NameInfoBar;


