import React from "react"

export default function Card(props){
    return (
        <div className="card">
            <img src={props.imageUrl} className='card-img'/>
            <div className='card-info'>
                <div className='card-info-addr'> 
                    <p className='card-info-location'>{props.location.toUpperCase()}</p>
                    <a href={props.googleMapsUrl} className='card-info-map'>View on Google Maps</a>
                </div>
                <div className='card-info-intro'> 
                    <p className='card-info-title'>{props.title}</p>
                    <div className='card-info-date'>{props.startDate} - {props.endDate}</div>
                    <p className='card-info-desc'>{props.description}</p>
                </div>
            </div>
        </div>
    )
}