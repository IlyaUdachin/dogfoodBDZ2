import { useState, useEffect } from "react"
import { Header, Nav, Footer } from "./components/General"


import Modal from "./components/Modal"
import DogfoodRoutes from "./routes/DogsfoodRoutes"


const App = () => {
	const [user, setUser] = useState(localStorage.getItem("dogUser"))
	const [dogToken, setDogToken] = useState(localStorage.getItem("dogToken"))
	const [modalAcive, setModalActive] = useState(false)
	const [serverProducts, setServerProducts] = useState([]);
	const [products, setProducts] = useState(serverProducts)
	//const discountProducts = []			//массив с товарами со скидкой

	useEffect(() => {
		if (dogToken) {
			fetch(
				"https://api.react-learning.ru/products",
				{ headers: { "Authorization": `Bearer ${dogToken}` } })
				.then(res => res.json())
				.then(data => {
					setServerProducts(data.products)
					//выбираем все товары со скидкой
					/* 					data.products.map((e) => { return e.discount > 0 ? discountProducts.push(e) : "" });
										discountProducts.sort((a, b) => a.discount < b.discount ? 1 : -1)
										console.log(discountProducts) */

				})
		}
	}, [dogToken])
	useEffect(() => {
		setProducts(serverProducts)
	}, [serverProducts])


	useEffect(() => {
		if (user) {
			setDogToken(localStorage.getItem("dogToken"))
		} else {
			setDogToken("")
		}
	}, [user])
	return (
		<>
			<Nav user={user} prodArr={serverProducts} setProducts={setProducts} />
			<Header user={user} setUser={setUser} setModalActive={setModalActive} />
			<DogfoodRoutes products={products} user={user} setUser={setUser} dogToken={dogToken} />
			<Footer user={user} />
			<Modal active={modalAcive} setActive={setModalActive} setUser={setUser} />
		</>
	);



};
export default App;
