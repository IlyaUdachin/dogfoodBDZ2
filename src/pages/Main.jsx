import Promo from "../components/Promo/Promo"
import { PROMOARR } from "../env"

const Main = () => {
	return (<>

		<Promo {...PROMOARR[0]} />
		<div className="promoGroup"><Promo {...PROMOARR[1]} />
			<Promo {...PROMOARR[2]} />
		</div>
	</>
	);
}
export default Main;
