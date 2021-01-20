import React from 'react';
import './Business.css';
const bussines={
  imageSrc: './pizza.webp',
name: 'MarginOtto Pizzeria',
address: '1010 Paddington Way',
city: 'Flavortown',
state: 'NY',
zipCode: '10101',
category: 'Italian',
rating: 4.5,
reviewCount: 90

}
class Business extends React.Component{
  render(){
    return(
    <div className="Business">
      <div className="image-container">
        <img src={bussines.imageSrc} alt={bussines.category}/>
      </div>
      <h2>{bussines.name}</h2>
      <div className="Business-information">
        <div className="Business-address">
          <p>{bussines.address}</p>
          <p>{bussines.city}</p>
          <p>{bussines.state} {bussines.zipCode}</p>
        </div>
        <div className="Business-reviews">
          <h3>{bussines.category}</h3>
          <h3 className="rating">{bussines.rating} stars</h3>
          <p>{bussines.reviewCount} reviews</p>
        </div>
      </div>
    </div>
    )
  }
}
export default Business