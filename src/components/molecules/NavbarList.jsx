'use client'
import NavbarLink from "../atoms/NavbarLink";
import { usePathname } from "next/navigation";


const NavbarList = () => {
	const path = usePathname();

    const linkData = [
		{href: "/" , text: "صفحه اصلی"},
		{href: "/services" , text: "خدمات گردشگری"},
		{href: "/about" , text: "درباره ما"},
		{href: "/contact" , text: "تماس با ما"}
	]
	return (
		<ul className="flex items-center gap-10">
			{linkData.map((link) => (
				<NavbarLink
					key={link.href}
					href={link.href}
					text={link.text}
					path={path}
				/>
			))}
		</ul>
	);
};

export default NavbarList;
