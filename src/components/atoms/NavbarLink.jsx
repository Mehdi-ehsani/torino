"use client"
import Link from "next/link";


const NavbarLink = ({ href, path, text }) => {
	return (
		<li
			className={`font-medium text-base cursor-pointer text-[#282828] hover:text-primery ${
				path === href ? "text-primery" : ""
			} `}
		>
			<Link href={href}>{text}</Link>
		</li>
	);
};

export default NavbarLink;
