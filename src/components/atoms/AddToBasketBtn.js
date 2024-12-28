"use client";

import { useSendToBasket } from "@/core/services/mutations";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const AddToBasketBtn = ({ id }) => {
	const { mutate } = useSendToBasket(id);
	const router = useRouter();

	const sendToBasket = () => {
		mutate(
			{ id },
			{
				onSuccess: (data) => {
					toast.success(data.data.message)
					router.push("/checkout");
				},
				onError: (error) => {
					toast.error(error.data.message)
					console.log(error);
				},
			}
		);
	};
	return (
		<button
			onClick={sendToBasket}
			className="lg:w-[204px] w-[154px] h-[42px] lg:h-[56px] lg:leading-[56px] text-center rounded-[10px] bg-primery text-white text-[20px] lg:text-[24px] "
		>
			رزرو و خرید
		</button>
	);
};

export default AddToBasketBtn;
