import { useQuery } from "@tanstack/react-query";
import api from "@/core/configs/api";

const useProfile = (pageNumber, name) => {
	const queryFn = async (data) => {
		return api.get("user/profile");
	};
	return useQuery({ queryKey: ["profile"], queryFn });
};
export { useProfile };
