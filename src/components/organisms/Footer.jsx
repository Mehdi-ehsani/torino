"use client";

import FooterList from "../molecules/FooterList";
import FooterCopyrightNotice from "../atoms/FooterCopyrightNotice";
import FooterImageList from "../molecules/FooterImageList";
import FooterContactLogo from "../atoms/FooterContactLogo";

const Footer = () => {
	return (
		<footer>
			<div className="flex justify-between px-[126px] py-4">
				<FooterList />
				<div className="flex flex-col items-end gap-10">
					<FooterContactLogo />
					<FooterImageList />
				</div>
			</div>
			<FooterCopyrightNotice />
		</footer>
	);
};

export default Footer;
