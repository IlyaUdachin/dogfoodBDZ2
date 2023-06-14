import { useState, useEffect, useContext } from "react";
import Carousel from "better-react-carousel"
import Ctx from "../../context"
import "./style.css"

const News = () => {
	const { news } = useContext(Ctx);
	const [data, setData] = useState(news || [])

	useEffect(() => {
		// if (data.length) {
		const id = setTimeout(() => {
			let updateArr = [...data];
			let firstNew = updateArr.shift();
			updateArr.push(firstNew);
			setData(updateArr);

		}, 2000)
		return () => clearTimeout(id);
		// 	} else {
		// 		setData(news.slice(0, 4))
		// }
		// 	})
	}, [data])
	useEffect(() => {
		setData(news)

	}, [news])



	return <>
		<div>
			<h2>Новости</h2>
			<div className="news-block">
				{data.slice(0, 5).map((el, i) => <img
					key={i}
					src={el.urlToImage}
					alt={el.title}
					style={{
						animation: "slide 2000ms linear 1"
					}}
				/>)}
			</div>
		</div>

	</>
}

export default News;