// Core packages

// Section structure
import Section from '../../structure/section';
import Container from '../../structure/container';

// Section general blocks
import SectionTitle from '../../blocks/section.title.block'
import SectionGridBg from '../../blocks/section.grid.block'

// Section specific blocks
import BadgesBlock from '../../blocks/about.badges.block'

// Section scss
import about from '../../../styles/sections/index/about.module.scss';

/**
 * Section: About
 * An overview of yourself.
 * Highlight your top level attributes and disciplines.
 * 
 * @returns {jsx} <About />
 */
export default function About() {
	return (
		<Section id="Nosotros" classProp={about.section}>	
			<Container spacing={['verticalXXXLrg']}>
				<SectionTitle
					title="Nuestra expertiz"
					preTitle="Nosotr@s"
					subTitle="Sabemos que las Personas son quienes generan la Cultura de las organizaciones, y no al revés."
				/>
				<section className={about.content}>
					<div className={about.image}>
						<img src="/img/family-photo.jpg" alt="Nelson family photo"/>
						{/* <Image src="/img/family-photo.jpg" width={600} height={800}/> */}
					</div>
					<div className={about.copy} >
						
						<BadgesBlock 
							title="Posiciones complejas" 
							containerClass={about.container}
							list={methods} 
							fullContainer="fullContainer"
							block="methods" 
							icon="fingerprint"
							copy="A lo largo de más de 10 años de experiencia en TA y HR, consideramos tener un amplio espectro de herramientas, hábilidades y background, que nos permiten entender todo tipo de requerimientos específicos, incluyendo tecnologías, lenguajes y frameworks de IT."
							//invertedColor="invertedColor"
							headerIcon={`${about.icon}`}
						/>
					</div>
				</section>	
			</Container>
		</Section>
	)
}

const methods 	= [
	{ key: 'planet-moon', 		name: 'IT', 		type: 'fad' },
	{ key: 'qrcode', 			name: 'Inversiones', 	type: 'fad'},
	{ key: 'window', 			name: 'Banca', 	type: 'fad' },
	{ key: 'cubes', 			name: 'Seguros', 	type: 'far' },
	{ key: 'layer-plus', 		name: 'Estrategia', 	type: 'fad' },
	{ key: 'solar-system', 		name: 'Operaciones', 		type: 'fad' },
]
