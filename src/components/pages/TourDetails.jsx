import api from "@/core/configs/api";
import calculateDateDifference from "@/core/utils/calculateDateDifference";
import formatNumber from "@/core/utils/formatNumber";
import Image from "next/image";

import userImg from "../../assets/image/user-tick.png"
import mapImg from "../../assets/image/map.png"
import starImg from "../../assets/image/medal-star.png"
import dateToPersian from "@/core/utils/dateToPersian";
// import userImg from "../../assets/image/user-tick.png"
// import userImg from "../../assets/image/user-tick.png"
// import userImg from "../../assets/image/user-tick.png"
// import userImg from "../../assets/image/user-tick.png"
// import userImg from "../../assets/image/user-tick.png"
// import userImg from "../../assets/image/user-tick.png"
// import userImg from "../../assets/image/user-tick.png"

const TourDetails = async ({ params }) => {
	const { id } = params;
	const { data } = await api.get(`tour/${id}`, {
		headers: { "Cache-Control": "no-store" },
	});
	const dayCount = calculateDateDifference(data.endDate, data.startDate);

	return (
		<div className="w-full h-[590px] pt-14 bg-[#f3f3f3]">
			<div className="w-[1118px] h-[427px] mx-[126px] px-6 py-7  rounded-[10px] border border-[#00000020]">
				<div className="flex">
					<Image
						className="w-[397px] h-[265px] rounded-xl"
						width={397}
						height={265}
						src={data.image}
						alt="tour image"
					/>
					<div className="mx-6">
						<h1 className="text-[32px] font-bold">{data.title}</h1>
						<h2 className="text-[20px] font-normal text-[#282828] my-4">
							{" " + dayCount + " "} روز {" " + dayCount - 1 + " "}شب    
						</h2>
						<div className="flex gap-7">
							<div className="flex gap-2 items-center">
								<Image className="w-6 h-6" src={userImg} alt="logo"/>
								<p className="text-[20px] text-[#7d7d7d] font-normal">تورلیدر از مبدا</p>
							</div>
							<div className="flex gap-2 items-center">
								<Image className="w-6 h-6" src={mapImg} alt="logo"/>
								<p className="text-[20px] text-[#7d7d7d] font-normal">برنامه سفر</p>
							</div>
							<div className="flex gap-2 items-center">
								<Image className="w-6 h-6" src={starImg} alt="logo"/>
								<p className="text-[20px] text-[#7d7d7d] font-normal">تضمین کیفیت</p>
							</div>
						</div>
						<div className=" mt-14 flex items-center justify-between w-[650px]">
							<h2 className="flex items-center gap-1 text-[28px] font-medium text-[#009ECA]">
								{formatNumber(data.price)}
								<span className="text-[14px] font-normal text-[#28282880]">تومان</span>
							</h2>
							<button className="w-[204px] h-[56px] rounded-[10px] bg-primery text-white text-[24px] ">رزرو و خرید</button>
						</div>
					</div>
				</div>
				<div className="flex">
							<div>
								<div>
									<Image />
									<p>مبدا</p>
								</div>
								<p>{data.origin.name}</p>
							</div>
							<div>
								<div>
									<Image />
									<p>تاریخ رفت</p>
								</div>
								<p>{dateToPersian(data.startDate)}</p>
							</div>
							<div>
								<div>
									<Image />
									<p>تاریخ برگشت</p>
								</div>
								<p>{dateToPersian(data.endDate)}</p>
							</div>
							<div>
								<div>
									<Image />
									<p>حمل ونقل</p>
								</div>
								<p>{data.fleetVehicle}</p>
							</div>
							<div>
								<div>
									<Image />
									<p>ظرفیت</p>
								</div>
								<p> حداکثر تا {data.availableSeats} نفر </p>
							</div>
							<div>
								<div>
									<Image />
									<p>بیمه</p>
								</div>
								<p>بیمه 50 هزار دیناری</p>
							</div>
						</div>
			</div>
		</div>
	);
};

export default TourDetails;
