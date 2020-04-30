import React from "react";
import './component-styles/backdrop.css';


const Backdrop = (props) => (
    props.show ? <div className='Backdrop' onClick={props.clicked}/>: null
);

export default Backdrop;
