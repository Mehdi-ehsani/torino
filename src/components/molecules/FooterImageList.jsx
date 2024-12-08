"use client";
import Image from "next/image";

import Logo1 from "../../assets/footer-logo1.png";
import Logo2 from "../../assets/footer-logo2.png";
import Logo3 from "../../assets/footer-logo3.png";
import Logo4 from "../../assets/footer-logo4.png";
import Logo5 from "../../assets/footer-logo5.png";

const FooterImageList = () => {
	return (
		<div className="flex gap-4">
			<Image src={Logo1} alt="logo" />
			<Image src={Logo2} alt="logo" />
			<Image src={Logo3} alt="logo" />
			<Image src={Logo4} alt="logo" />
			<Image src={Logo5} alt="logo" />
		</div>
	);
};

export default FooterImageList;
