import moment from "jalali-moment"
const dateToPersian = (date) => {
    const jalaliDate = moment(date).locale('fa').format('D MMMM YYYY');
    return jalaliDate;
}

export default dateToPersian