import React from 'react';
import {
	SidebarContainer,
	Icon,
	CloseIcon,
	SidebarMenu,
	SidebarLink,
	
} from './SideBarElements';

function Sidebar({ isOpen, toggle }) {
	
	return (
		<SidebarContainer isOpen={isOpen}>
			<Icon onClick={toggle}>
				<CloseIcon />
			</Icon>
			<SidebarMenu>
				<SidebarLink to='/'>Home</SidebarLink>
				<SidebarLink to='/'>Inicio de sesión</SidebarLink>
				<SidebarLink to='/'>Perfil</SidebarLink>
			
			</SidebarMenu>
			{/* <SideBtnWrap>
				<SidebarRoute to='/'>Order Now</SidebarRoute>
			</SideBtnWrap> */}
		</SidebarContainer>
	);
}

export default Sidebar;