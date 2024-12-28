import { serverFetch } from "@/core/services/http";
import Tour from "../../components/common/Tour";
import SearchBox from "@/components/common/SearchBox";
import Spinner from "@/components/templates/spinner";

async function Tours({searchParams}) {
	const data = await serverFetch("tour", searchParams, { cache: "no-store" });
	
	if(!data) return <Spinner/>
	return (
		<div className="lg:px-[126px] px-[31px] mb-10 lg:mb-16">
			<SearchBox/>
			<h1 className="text-[20px] md:text-[32px] font-medium my-8">همه تور ها</h1>
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4  gap-7 ">
				{data?.map((tour) => (
					<Tour key={tour.id} tour={tour} />
				))}
			</div>
		</div>
	);
}
export default Tours;
