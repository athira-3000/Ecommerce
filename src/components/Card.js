import React from 'react'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
function Card(props) {
  return (
    <div className="card">
        <div className="cardImg"><img src={props.src} alt={props.alt}/></div>
        <div className="cardDescItem">
            <h2>{props.title}</h2>
            <p>{props.description}</p>
        </div>
        <div className="cardDescPrice">
            <h3>
                ${props.cost}
            </h3>
            <AddIcon/>
            <RemoveIcon/>
        </div>
    </div>
  )
}

export default Card
