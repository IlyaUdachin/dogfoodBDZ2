import Card from "../components/Card";
const Catalog = ({ products }) => {
	return (
		<>
			{products.map((e, i) => <Card img={e.pictures} key={i} {...e} />)}
		</>
	);
}

export default Catalog;
