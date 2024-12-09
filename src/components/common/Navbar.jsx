'use client'
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect , useState } from "react";

import Logo from "../../assets/image/torino.png";
import { getCookie } from "@/core/utils/cookie";
import NavbarLoginBtn from "./NavbarLoginBtn";
import NavbarProfileBtn from "./NavbarProfileBtn";


const Navbar = () => {
	const path = usePathname();
	const [token , setToken] = useState(null)
	useEffect(() => {
		const tokenFromCookie = getCookie("accessToken");
		setToken(tokenFromCookie)
	},[])

	const linkData = [
		{ href: "/", text: "صفحه اصلی" },
		{ href: "/services", text: "خدمات گردشگری" },
		{ href: "/about", text: "درباره ما" },
		{ href: "/contact", text: "تماس با ما" },
	];
	return (
		<nav className="flex w-full h-[74px] items-center justify-between px-[126px]">
			<Image priority src={Logo} width={146} height={44} alt="logo" />
			<ul className="flex items-center gap-10">
				{linkData.map((link) => (
					<li 
					key={link.href}
						className={`font-medium text-base cursor-pointer text-[#282828] hover:text-primery ${
							path === link.href ? "text-primery" : ""
						} `}
					>
						<Link href={link.href}>{link.text}</Link>
					</li>
				))}
			</ul>
			{!!token ? <NavbarProfileBtn /> : <NavbarLoginBtn />}
		</nav>
	);
};
export default Navbar;
