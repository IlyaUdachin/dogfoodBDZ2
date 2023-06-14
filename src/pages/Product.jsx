import { useState, useEffect } from "react";
import { useParams } from "react-router-dom"
import Loader from "../components/Loader";

const Product = ({ dogToken }) => {
	const [product, setProduct] = useState({})
	const { id } = useParams()
	useEffect(() => {
		fetch(`https://api.react-learning.ru/products/${id}`,
			{ headers: { "Authorization": `Bearer ${dogToken}` } })
			.then(res => res.json())
			.then(data => setProduct(data))
	}, [])

	return (
		<div className="product">
			{!product.name
				?
				<Loader />
				:
				<>
					<h1>
						{product.name ? product.name : "Страница одного товара"}
					</h1>
					{product.pictures && <img src={product.pictures} alt={product.name} />}
					{product.price && <mark>{product.price}</mark>}</>
			}
		</div>
	);
}

export default Product;
