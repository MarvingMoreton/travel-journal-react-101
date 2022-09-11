import React from "react"

export default function Trip(props) {
  return (
    <section>
      <img className="trip-img" src={`${props.element.imageUrl}`} />
            <div className="trip-info">
                <div className="country-info">
                    <p className="country-name"><i className="fa-solid fa-location-dot"></i>{props.element.location}</p>
                    <a href={props.element.googleMapsUrl} className="google-maps-link">View on Google Maps</a>
                </div>
                <h2 className="city-name">{props.element.title}</h2>
                <p className="trip-date">{props.element.startDate} - {props.element.endDate}</p>
                <p className="trip-details">{props.element.description}</p>
            </div>
    </section>
  )
}
