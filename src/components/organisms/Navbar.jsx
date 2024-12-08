"use client";
import Image from "next/image";
import Logo from "../../assets/torino.png";
import NavbarList from "../molecules/NavbarList";
import NavbarLoginStatus from "../molecules/NavbarLoginStatus";

const Navbar = () => {
	return (
		<nav className="flex w-full h-[74px] items-center justify-between px-[126px]">
			<Image priority src={Logo} width={146} height={44} alt="logo" />
			<NavbarList />
			<NavbarLoginStatus />
			
		</nav>
	);
};
export default Navbar;
