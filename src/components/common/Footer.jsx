import Link from "next/link";
import Image from "next/image";

import Logo1 from "../../assets/image/footer-logo1.png";
import Logo2 from "../../assets/image/footer-logo2.png";
import Logo3 from "../../assets/image/footer-logo3.png";
import Logo4 from "../../assets/image/footer-logo4.png";
import Logo5 from "../../assets/image/footer-logo5.png";
import TorinoLogo from "../../assets/image/torino.png";

const Footer = () => {
	const linkData = [
		{ href: "/about", text: "درباره ما" },
		{ href: "#", text: "پشتیبانی آنلاین" },
		{ href: "/contact", text: "تماس با ما" },
		{ href: "#", text: "راهنمای خرید" },
		{ href: "#", text: "چرا تورینو" },
		{ href: "#", text: "راهنمای استرداد" },
		{ href: "#", text: "بیمه مسافرتی" },
		{ href: "#", text: "پرسش و پاسخ" },
	];
	return (
		<footer>
			<div className="flex flex-col items-center gap-5 mt-2 md:flex-row justify-between mx-[31px] lg:mx-[126px] py-6 border-t border-[#00000020]">
				<div className="grid grid-cols-2 gap-x-8 gap-y-2">
					<h1 className="font-semibold text-[22px] lg:text-[24px] mb-3">تورینو</h1>
					<h1 className="font-semibold text-[22px] lg:text-[24px] mb-3">خدمات مشتریان</h1>
					{linkData.map((link) => (
						<Link
						    key={link.text}         
							className="lg:text-lg text-base text-[#282828] font-normal hover:text-primery transition-colors"
							href={link.href}
						>
							{link.text}
						</Link>
					))}
				</div>
				<div className="flex flex-row-reverse lg:flex-col items-end gap-10">
					<div className="flex flex-col gap-4 items-end">
						<Image src={TorinoLogo} alt="torino logo" />
						<p>تلفن پشتیبانی: 8735-021</p>
					</div>
					<div className="grid lg:grid-cols-5 grid-cols-3  gap-4">
						<Image src={Logo1} alt="logo" />
						<Image src={Logo2} alt="logo" />
						<Image src={Logo3} alt="logo" />
						<Image src={Logo4} alt="logo" />
						<Image src={Logo5} alt="logo" />
					</div>
				</div>
			</div>
			<div className="w-full  text-center border-t border-[#00000020]">
				<p className="text-[#00000080] leading-10 text-[12px] md:text-[15px] font-normal">
					کلیه حقوق این وب سایت متعلق به تورینو میباشد.
				</p>
			</div>
		</footer>
	);
};

export default Footer;
