import Hero 		from '../components/sections/index/hero'
import Color 		from '../components/utils/page.colors.util'
import colors 		from '../content/index/_colors.json'

//
export default function HomePage() {

	return (
		<>
			<Color colors={colors} />
			<Hero />
			{/* <Career /> */}
		</>
	);
}
