import pointer from "./pointer.svg"

export default function Card(props) {
  return (
    <div className="card">
      <div className="card--img-container">
        <img className="card--img" src={props.imageUrl} alt="card" />
      </div>
      <div className="card--info">
        <div className="card--info-1">
          <img className="card--icon" src={pointer} alt="pointer" />
          <p className="card--location">{props.location}</p>
          <a href={props.googleMapsUrl} className="card--link" target="_blank" rel="noreferrer">
            View on Google Maps
          </a>
        </div>
        <h2 className="card--title">{props.title}</h2>
        <div className="card--info-2">
          <p className="card--date">
            {props.startDate} - {props.endDate}
          </p>
          <p className="card--description">{props.description}</p>
        </div>
      </div>
    </div>
  );
}
