import Header from "../common/Header";
import SearchBox from "../common/SearchBox";
import Tours from "../templates/Tours";

const Homepage = () => {
	return (
		<div>
			<Header />
			<h1 className="text-3xl text-center mt-6 font-semibold text-[#595959]">
				<span className="text-[#28A745]">تورینو</span> برگزار کننده بهترین تور
				های داخلی و خارجی
			</h1>
			<SearchBox />
			<Tours />
		</div>
	);
};

export default Homepage;
