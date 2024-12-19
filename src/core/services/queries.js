import { useQuery } from "@tanstack/react-query";
import api from "@/core/configs/api";

const useProfile = () => {
	const queryFn = () => {
		return api.get("user/profile");
	};
	return useQuery({ queryKey: ["profile"], queryFn });
};

const useTours = () => {
	const queryFn = () => {
		return  api.get("tour");
	};
	return useQuery({ queryKey: ["tour"],  queryFn });
};
const useTourDetail = (id) => {
	const queryFn = () => {
		return  api.get(`tour/${id}`);
	};
	return useQuery({ queryKey: ["tour/datail"],  queryFn });
};
export { useProfile, useTours , useTourDetail };
