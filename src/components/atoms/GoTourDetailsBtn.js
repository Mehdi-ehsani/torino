"use client";
import { useRouter } from "next/navigation";

const GoTourDetailsBtn = ({id}) => {
	const router = useRouter();
	const goTourDetails = () => {
		router.push(`/tour/${id}`);
	};
	return (
		<button
			onClick={goTourDetails}
			className="rounded px-5 bg-primery text-lg text-white"
		>
			رزرو
		</button>
	);
};

export default GoTourDetailsBtn;
