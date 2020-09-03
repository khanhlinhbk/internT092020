import React, {useState,useEffect} from 'react';
import './content.css'
export default function Content(props){
    return(
        <div className="content">
            <img className="image" src={props.url}></img>
            <p className="title">{props.title}</p>
            <p className="date">{props.date}</p>
        </div>
    )
}