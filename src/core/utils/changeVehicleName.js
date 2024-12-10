const changeVehicleName = (name) => {
	switch (name.toLowerCase()) {
		case "bus":
			return "اتوبوس";
		case "suv":
			return "خودرو ورزشی";
		case "van":
			return "ون";
		case "airplane":
			return "هواپیما";
	}
};

export default changeVehicleName;
