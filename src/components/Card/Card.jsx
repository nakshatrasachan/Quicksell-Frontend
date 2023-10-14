import React from 'react'
import './Card.css';

const Card = ({id, title, tag, status}) => {
  return (
    <div className="CContainer flex-gap-10" style={{gap : '5px'}}>
        <div className="cardHeading flex-sb">
            <span style={{textTransform : "uppercase"}} className='color-grey'>{id}</span>
            
        </div>
        <div className="cardName" style={{fontWeight : 250}} >
            <p>{title}</p>
        </div>
        
    </div>
  )
}

export default Card;