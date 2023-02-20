import React from 'react';

function Movie(props) {
    return (
    <div  className="movie card">
        <div className="card-image">
          <img src={props.poster}/>
          
          <span className="card-title">{props.title}</span>
        </div>
        <div className="card-content">
          <p>{props.year}</p>
          <br />
          <p>{props.type}</p>
        </div>
    </div>
    );
}

export { Movie };
