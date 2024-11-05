import "./Card.css"

const Card = (props) => {
  return (
    <div>
      <div className={`CardSection ${props.color}`}>
        
        <div className="project-card">
          <div className="card-img">
            <img src={props.image} alt="" />
          </div>
          <h2>{props.title}</h2>
          <p>{props.description}</p>
          <div className="card-btn">
            <button className="card-btn1">
              <a href={props.link}>View Project</a>
            </button>
            <button className="card-btn2">
              <a href={props.source}>Source</a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card