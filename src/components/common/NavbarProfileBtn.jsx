import { useProfile } from "@/core/services/queries";
import userLogo from "../../assets/image/user.png";
import arrowDown from "../../assets/image/arrow-down.png";
import Image from "next/image";

const NavbarProfileBtn = () => {
	const { data } = useProfile();
	return (
		<div className="flex items-center gap-2 cursor-pointer">
			<Image src={userLogo} alt="user logo" />
			<h1 className="text-primery text-[18px] leading-[18px] font-medium">
				{data?.data?.mobile}
			</h1>
			<Image src={arrowDown} alt="arrow" />
		</div>
	);
};

export default NavbarProfileBtn;
