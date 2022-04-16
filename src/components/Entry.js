import React from 'react'
import '../style.css'

export default function Header(props) {
    return (
        <div className="entry">
            <img src={props.entry.imageUrl} className="image" />
            <div className="entry--text">
                <div className="entry--text--location">
                    <p className="location">{props.entry.location}</p>
                    <a href={props.entry.googleMapsUrl}>View on Google Maps</a>
                </div>
                <h1>{props.entry.title}</h1>
                <p className="date">{props.entry.startDate} - {props.entry.endDate}</p>
                <p>{props.entry.description}</p>
            </div>
        </div>

    )
}
