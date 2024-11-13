import "./Card.css"
import React, {useState} from"react"

const Card = (props,{text}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand =()=> {
  setIsExpanded((prevExpanded)=> !prevExpanded);
  };


  return (
    <div>
      <div className={`CardSection ${props.color}`}>
        <div className="project-card">
          <div className="card-img">
            <img src={props.image} alt="" />
          </div>
          <h2>{props.title}</h2>
          <p>
            {isExpanded
              ? props.description
              : `${props.description.substring(
                  0,
                  props.characterLimit || 100
                )}...`}
          </p>
          <button onClick={toggleExpand}>
            {isExpanded
              ? props.collapseLabel || "Show Less"
              : props.expandLabel || "Read More"}
          </button>
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