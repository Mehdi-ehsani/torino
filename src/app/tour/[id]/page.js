import api from "@/core/configs/api";
import calculateDateDifference from "@/core/utils/calculateDateDifference";
import formatNumber from "@/core/utils/formatNumber";
import Image from "next/image";
import dateToPersian from "@/core/utils/dateToPersian";


import userImg from "../../../assets/image/user-tick.png"
import mapImg from "../../../assets/image/map.png"
import starImg from "../../../assets/image/medal-star.png"
import routingImg from "../../../assets/image/routing-2.png"
import securityImg from "../../../assets/image/security.png"
import busImg from "../../../assets/image/bus.png"
import calendar2Img from "../../../assets/image/calendar-2.png"
import calendarImg from "../../../assets/image/calendar.png"
import profileImg from "../../../assets/image/profile-2user.png"
import AddToBasketBtn from "../../../components/atoms/AddToBasketBtn";

const TourDetail = async ({params}) => {
  const { id } = params;
	const { data } = await api.get(`tour/${id}`, {
		headers: { "Cache-Control": "no-store" },
	});
	const dayCount = calculateDateDifference(data.endDate, data.startDate);

	return (
		<div className="w-full flex items-center justify-center h-fit xl:h-[590px] py-14 bg-[#f3f3f3]">
			<div className="bg-white w-fit h-fit xl:h-[427px] mx-[126px] px-6 py-7  rounded-[10px] border border-[#00000020]">
				<div className="flex flex-col items-center xl:flex-row">
					<Image
						className="w-[397px] h-[265px] rounded-xl"
						width={397}
						height={265}
						src={data.image}
						alt="tour image"
					/>
					<div className="lg:mx-6">
						<div className="flex flex-row xl:flex-col xl:w-fit justify-between items-center">
						<h1 className="lg:text-[32px] text-[24px] font-bold">{data.title}</h1>
						<h2 className="lg:text-[20px] text-[15px] font-normal text-[#282828] my-4">
							{" " + dayCount + " "} روز {" " + dayCount - 1 + " "}شب    
						</h2>
						</div>
						<div className="flex justify-between gap-1 lg:gap-7">
							<div className="flex gap-2 items-center">
								<Image className="w-6 h-6" src={userImg} alt="logo"/>
								<p className="lg:text-[20px] text-[13px] text-[#7d7d7d] font-normal">تورلیدر از مبدا</p>
							</div>
							<div className="flex gap-2 items-center">
								<Image className="w-6 h-6" src={mapImg} alt="logo"/>
								<p className="lg:text-[20px] text-[13px] text-[#7d7d7d] font-normal">برنامه سفر</p>
							</div>
							<div className="flex gap-2 items-center">
								<Image className="w-6 h-6" src={starImg} alt="logo"/>
								<p className="lg:text-[20px] text-[13px] text-[#7d7d7d] font-normal">تضمین کیفیت</p>
							</div>
						</div>
						<div className=" mt-4 lg:mt-14 flex-row-reverse lg:flex-row  flex items-center justify-between w-full lg:w-[400px] xl:w-[650px]">
							<h2 className="flex items-center gap-1 text-[22px] lg:text-[28px] font-medium text-[#009ECA]">
								{formatNumber(data.price)}
								<span className="text-[14px] font-normal text-[#28282880]">تومان</span>
							</h2>
							<AddToBasketBtn id={id} />
						</div>
					</div>
				</div>
				<div className="grid grid-cols-3 lg:grid-cols-6 justify-between mt-7">
							<div className="lg:block hidden">
								<div className="flex items-center gap-2 mt-4" >
									<Image src={routingImg} alt="icon" />
									<p className="lg:text-[18px] text-[16px] text-[#444444] ">مبدا</p>
								</div>
								<p className="font-medium lg:text-[16px] text-[14px] text-[#000000] mt-3">{data.origin.name}</p>
							</div>
							<div className="lg:block hidden">
								<div className="flex items-center gap-2 mt-4" >
									<Image src={calendarImg} alt="icon"/>
									<p className="lg:text-[18px] text-[16px] text-[#444444] ">تاریخ رفت</p>
								</div>
								<p className="font-medium lg:text-[16px] text-[14px] text-[#000000] mt-3">{dateToPersian(data.startDate)}</p>
							</div>
							<div className="lg:block hidden">
								<div className="flex items-center gap-2 mt-4" >
									<Image src={calendar2Img} alt="icon" />
									<p className="lg:text-[18px] text-[16px] text-[#444444] ">تاریخ برگشت</p>
								</div>
								<p className="font-medium lg:text-[16px] text-[14px] text-[#000000] mt-3">{dateToPersian(data.endDate)}</p>
							</div>
							<div>
								<div className="flex items-center gap-2 mt-4" >
									<Image src={busImg} alt="icon" />
									<p className="lg:text-[18px] text-[16px] text-[#444444] ">حمل ونقل</p>
								</div>
								<p className="font-medium lg:text-[16px] text-[14px] text-[#000000] mt-3">{data.fleetVehicle}</p>
							</div>
							<div>
								<div className="flex items-center gap-2 mt-4" >
									<Image src={profileImg} alt="icon"/>
									<p className="lg:text-[18px] text-[16px] text-[#444444] ">ظرفیت</p>
								</div>
								<p className="font-medium lg:text-[16px] text-[14px] text-[#000000] mt-3"> حداکثر تا {data.availableSeats} نفر </p>
							</div>
							<div>
								<div className="flex items-center gap-2 mt-4" >
									<Image src={securityImg} alt="icon" />
									<p className="lg:text-[18px] text-[16px] text-[#444444] ">بیمه</p>
								</div>
								<p className="font-medium lg:text-[16px] text-[14px] text-[#000000] mt-3">بیمه 50 هزار دیناری</p>
							</div>
						</div>
			</div>
		</div>
	);
}

export default TourDetail