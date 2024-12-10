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
export { useProfile, useTours };
