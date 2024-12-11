import Image from "next/image";
import { useRouter } from "next/navigation";

import calculateDateDifference from "@/core/utils/calculateDateDifference";
import changeVehicleName from "@/core/utils/changeVehicleName";
import formatNumber from "@/core/utils/formatNumber";
import getPersianMonth from "@/core/utils/gePersianMonth";

const Tour = ({tour}) => {
    const router = useRouter()
    const goTourDetails = () => {
      router.push(`/tour/${tour.id}`)
    }
	return (
		<div onClick={goTourDetails} className="border border-[#00000012] rounded-[10px]" key={tour.id}>
			<div className=" relative w-full h-[159px]">
				<Image
					className="w-auto h-auto"
					fill
					sizes="width: auto , height: auto"
					src={tour.image}
					alt="tour img"
				/>
			</div>
			<h2 className="text-[22px] font-medium m-2">{tour.title}</h2>
			<p className="mx-2 mb-1 text-[15px] text-[#28282870]">
				{getPersianMonth(tour.startDate)} -{" "}
				{calculateDateDifference(tour.endDate, tour.startDate)}روزه -{" "}
				{changeVehicleName(tour.fleetVehicle)} - هتل 3 ...
			</p>
			<div className="flex justify-between items-center border-t border-[#00000012] p-2 ">
				<button className="rounded px-5 bg-primery text-lg text-white">
					رزرو
				</button>
				<p className="text-[#009ECA]">
					{formatNumber(tour.price)}{" "}
					<span className="text-[#28282880] text-sm">تومان</span>
				</p>
			</div>
		</div>
	);
};

export default Tour;
