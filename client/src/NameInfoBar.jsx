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
    <>
      <div>{props.info.name}</div>
      <div>
        <span> {props.info.bld} </span>  
        <span> . </span>
        <span> {props.info.category} </span>  
        <span> . </span>
        <span> {dollar} </span>
      </div>
    </>
    );
};

export default NameInfoBar;


