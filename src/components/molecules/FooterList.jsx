"use client";
import FooterLink from "../atoms/FooterLink"

const FooterList = () => {
    const linkData = [
        {href:"/about", text:"درباره ما"},
        {href:"#", text:"پشتیبانی آنلاین"},
        {href:"/contact", text:"تماس با ما"},
        {href:"#", text:"راهنمای خرید"},
        {href:"#", text:"چرا تورینو"},
        {href:"#", text:"راهنمای استرداد"},
        {href:"#", text:"بیمه مسافرتی"},
        {href:"#", text:"پرسش و پاسخ"},
      ]
	return (
		<div className="grid grid-cols-2 gap-x-8 gap-y-2">
			<h1 className="font-semibold text-[24px] mb-3">تورینو</h1>
			<h1 className="font-semibold text-[24px] mb-3">خدمات مشتریان</h1>
			{linkData.map((link) => (
				<FooterLink key={link.text} href={link.href} text={link.text} />
			))}
		</div>
	);
};

export default FooterList;
