import SiteFeatures from "@/components/common/SiteFeatures";
import Header from "../components/common/Header";
import TorinoDetail from "../components/common/TorinoDetail";
import Tours from "./tour/page";
import ImageSlider from "@/components/common/ImageSlider";

export default function Home() {
	return (
		<div>
			<Header />
			<h1 className="sm:text-3xl text-[16px] text-center mt-6 font-semibold text-[#595959]">
				<span className="text-[#28A745]">تورینو</span> برگزار کننده بهترین تور
				های داخلی و خارجی
			</h1>
			<Tours />
			<TorinoDetail />
			<ImageSlider/>
			<SiteFeatures/>
		</div>
	);
}
