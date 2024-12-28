import heartImg from "../../assets/image/heart.png";
import messageImg from "../../assets/image/message.png";
import persentImg from "../../assets/image/persent.png";

import Image from "next/image";

const SiteFeatures = () => {
	return (
		<main className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 items-start justify-between gap-28 py-9 px-[31px] lg:px-[126px]">
			<div className="flex items-center gap-4 mx-auto md:mx-0">
                <Image src={persentImg} alt="icon" />
                <div>
                    <h1 className="font-medium text-[26px] text-[#282828]">بصرفه ترین قیمت</h1>
                    <h2 className="font-light text-[16px] mt-1 text-[#282828]">بصرفه ترین و ارزان ترین قیمت تور را از ما بخواهید.</h2>
                </div>
            </div>
            <div className="flex items-center gap-4 mx-auto md:mx-0">
                <Image src={messageImg} alt="icon" />
                <div>
                    <h1 className="font-medium text-[26px] text-[#282828]">پشتیبانی</h1>
                    <h2 className="font-light text-[16px] mt-1 text-[#282828]">پشتیبانی و همراهی 24 ساعته در تمامی مراحل سفر شما.</h2>
                </div>
            </div>
            <div className="flex items-center gap-4 mx-auto md:mx-0">
                <Image src={heartImg} alt="icon" />
                <div>
                    <h1 className="font-medium text-[26px] text-[#282828]">رضایت کاربران</h1>
                    <h2 className="font-light text-[16px] mt-1 text-[#282828]">رضایت بیش از 10 هزار کاربر از تور های ما. </h2>
                </div>
            </div>
		</main>
	);
};

export default SiteFeatures;
