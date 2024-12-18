"use client";
import { useTours } from "@/core/services/queries";
import Tour from "../common/Tour";

const ToursPage = () => {
	const { data } = useTours();
	return (
		<div className="px-[126px] mb-16">
			<h1 className="text-[32px] font-medium my-8">همه تور ها</h1>
      <div className="grid grid-cols-4 gap-7 ">
			{data?.data?.map((tour) => (
				<Tour key={tour.id} tour={tour} />
			))}
      </div>
		</div>
	);
};

export default ToursPage;
