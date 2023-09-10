import React, { useState } from 'react';
import NavBar from '../Navbar/Navbar';
import Sidebar from '../Sidebar/Sidebar';
import {
	HeroContainer,
	HeroContent,
	HeroItems,
	HeroH1,
	HeroP,
	HeroBtn,
} from './HeroElements';

function Hero() {
	const [isOpen, setIsOpen] = useState(false);

	const toggle = () => {
		setIsOpen(!isOpen);
	};

	return (
		<HeroContainer>
			<NavBar toggle={toggle} />
			<Sidebar isOpen={isOpen} toggle={toggle} />
			<HeroContent>
				<HeroItems>
					<HeroH1> <img src="./images/flicker_blanco.svg" alt="add_pin" className="pint_mock_icon" /></HeroH1>
					<HeroP>Descubre inspiración infinita en cada rincón.</HeroP>
					{/* <HeroBtn>Place Order</HeroBtn> */}
				</HeroItems>
			</HeroContent>
		</HeroContainer>
	);
}

export default Hero;
