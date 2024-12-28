'use client'
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import Logo from "../../assets/image/torino.png";
import menu from "../../assets/image/menu-icon.png";
import NavbarLoginBtn from "./NavbarLoginBtn";
import NavbarProfileBtn from "./NavbarProfileBtn";
import { useProfile } from "@/core/services/queries";


const Navbar = () => {
    const {data} = useProfile()
	const path = usePathname();

	const linkData = [
		{ href: "/", text: "صفحه اصلی" },
		{ href: "/tour", text: "خدمات گردشگری" },
		{ href: "/about", text: "درباره ما" },
		{ href: "/contact", text: "تماس با ما" },
	];
	return (
		<nav className="flex w-full  h-[74px] items-center justify-between p-[31px] 2xl:px-[126px] shadow-[0px_1px_0px_#00000016]">
			<Image className="hidden md:block" priority src={Logo} width={146} height={44} alt="logo" />
			<Image className="block md:hidden cursor-pointer" priority src={menu} width={26} height={14} alt="icon" />
			<ul className="flex items-center gap-10">
				{linkData.map((link) => (
					<li 
					key={link.href}
						className={`font-medium text-base cursor-pointer hidden md:block text-[#282828] hover:text-primery ${
							path === link.href ? "text-primery" : ""
						} `}
					>
						<Link href={link.href}>{link.text}</Link>
					</li>
				))}
			</ul>
			{data?.data ? <NavbarProfileBtn /> : <NavbarLoginBtn />}
		</nav>
	);
};
export default Navbar;
