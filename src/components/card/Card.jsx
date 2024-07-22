import React from 'react'
import "./card.scss"
const Card = ({title, images,sub}) => {
  return (
    <div id='card'>
      <h3>{title}</h3>
      <div className="img">
        {images.map((data, index)=>(
          <div className="details" key={index}>
            <img src={data} alt="" />
            <p className='sub'>{sub[index]}</p>
          </div>
        ))}
      </div>
      <p>Explore all</p>
    </div>
  )
}

export default Card
