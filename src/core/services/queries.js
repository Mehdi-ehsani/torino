import { useQuery } from "@tanstack/react-query";
import api from "@/core/configs/api";

const useProfile = () => {
	const queryFn = () => {
		return api.get("user/profile");
	};
	return useQuery({ queryKey: ["profile"], queryFn });
};

const useTours = (query) => {
	const queryFn = () => {
		return  api.get(`tour${query}`);
	};
	return useQuery({ queryKey: ["tour"],  queryFn });
};
const useTourDetail = (id) => {
	const queryFn = () => {
		return  api.get(`tour/${id}`);
	};
	return useQuery({ queryKey: ["tour/datail"],  queryFn });
};
const useUserTours = () => {
	const queryFn = () => {
		return  api.get("user/tours");
	};
	return useQuery({ queryKey: ["user/tours"],  queryFn });
};
const useUserTransactions = () => {
	const queryFn = () => {
		return  api.get("user/transactions");
	};
	return useQuery({ queryKey: ["user/transactions"],  queryFn });
};
const useGetBasket = () => {
	const queryFn = () => {
		return  api.get("basket");
	};
	return useQuery({ queryKey: ["basket"],  queryFn });
};

export { useProfile, useTours , useTourDetail ,useUserTours , useUserTransactions , useGetBasket };
