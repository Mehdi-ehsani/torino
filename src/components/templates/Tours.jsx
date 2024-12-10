"use client";
import { useTours } from "@/core/services/queries";
import Tour from "../common/Tour";

const Tours = () => {
	const { data } = useTours();
	return (
		<div className="px-[126px]">
			<h1 className="text-[32px] font-medium my-8">همه تور ها</h1>
      <div className="grid grid-cols-4 gap-7 ">
			{data?.data?.map((tour) => (
				<Tour tour={tour} />
			))}
      </div>
		</div>
	);
};

export default Tours;
