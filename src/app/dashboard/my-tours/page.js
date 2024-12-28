"use client";
import Image from "next/image";

import { useUserTours } from "@/core/services/queries";
import changeVehicleName from "@/core/utils/changeVehicleName";
import sunImg from "../../../assets/image/sun-fog.png";
import dateToPersian from "@/core/utils/dateToPersian";
import formatNumber from "@/core/utils/formatNumber";
import Spinner from "@/components/templates/spinner";
import Empty from "@/components/atoms/Empty";

const MyTours = () => {
	const { data, isPending } = useUserTours();

	if (isPending) return <Spinner/>;
	if (data.data.length === 0) return <Empty txt="سبد خرید شما خالی است" />;
	return (
		<>
			{data.data.map((tour) => (
				<div key={tour.id + Math.random() * 100} className="h-[168px] border border-[#00000020] rounded-[10px] px-4 relative m-4">
					<div className="grid grid-cols-3 border-b border-[#00000020] h-2/3">
						<div className="col-span-1 flex gap-2 text-black items-center">
							<Image src={sunImg} alt="icon" />
							<p>{tour.title}</p>
						
						</div>
						<div className="col-span-2 flex gap-2 text-black items-center">
							<Image src={sunImg} alt="icon" />
							<p>{changeVehicleName(tour.fleetVehicle)}</p>
						</div>
						<div className="col-span-1 flex items-center gap-2 text-[#00000060]">
							<h2 className="text-black font-semibold">
								{tour.origin.name} به {tour.title}
							</h2>
							.
							<p className="text-[#00000060]">
								{dateToPersian(tour.startDate)}
							</p>
						</div>
						<div className="col-span-2 flex items-center gap-2 text-[#00000060]">
							<h2 className="text-black font-semibold">تاریخ برگشت</h2>.
							<p className="text-[#00000060]">{dateToPersian(tour.endDate)}</p>
						</div>
					</div>
					<div className="grid grid-cols-3 items-center h-1/3">
						<div className="flex items-center gap-3 border-l border-[#00000020] ml-4">
							<p className="text-[#00000060]">شماره تور</p>
							<h2 className="text-black font-semibold">102095404</h2>
						</div>

						<div className="flex items-center gap-3 ">
							<p className="text-[#00000060]">مبلغ پرداخت شده</p>
							<h2 className="text-black font-semibold">
								{formatNumber(tour.price)}{" "}
								<span className="text-[#00000060] font-normal">تومان</span>{" "}
							</h2>
						</div>
					</div>
          <p className=" top-3 left-3 absolute w-[89px] h-[20px] rounded-[27px] bg-[#28A74530] text-primery text-[14px] text-center">
          به اتمام رسیده  
          </p>
				</div>
			))}
		</>
	);
};

export default MyTours;
