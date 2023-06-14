import "./style.css"
import React from 'react';
import { Link } from "react-router-dom";

const Card = ({ img, name, price, _id }) => {
	return (
		<Link to={`/product/${_id}`} className="card" >
			<img src={img} className="card_image" alt="Картинка" />
			<span className="card_name">{name}</span>
			<span className="card_price">{price} р.</span>
			<button className="card_button">В корзину</button>
		</Link >
	);
}

export default Card;
