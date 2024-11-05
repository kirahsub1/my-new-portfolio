import "./Card.css"

const Card = (props) => {
  return (
    <div>
      <div>
        <div className="project-card">
          <div className="card-img">
            <img src={props.image} alt="" />
          </div>
          <h2>{props.title}</h2>
          <p>{props.description}</p>
          <button>
            <a href={props.link}>View Project</a>
          </button>
          <button>
            <a href={props.source}>Source</a>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card