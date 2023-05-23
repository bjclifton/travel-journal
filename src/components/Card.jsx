import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

export default function Card(props) {
    return (
        <div className="card">
            <img className="card--image" src={props.image} alt={props.title} />
            <div className="card--content">
                <div className="card--location">
                    <FontAwesomeIcon icon={faLocationDot} className="card--location-icon" />
                    <h4 className='card--country'>{props.country}</h4>
                    <a href={props.link} target="_blank" rel="noreferrer">View on Google Maps</a>
                </div>
                <h3 className='card--title'>{props.title}</h3>
                <h4 className='card--date'>{props.date}</h4>
                <p className='card--description'>{props.description}</p>
            </div>
        </div>
    )
}