import moment from 'jalali-moment';

const dateAndTimeToPersian = (date) => {
 
  const jalaliDate = moment(date, 'YYYY-MM-DDTHH:mm:ss.SSSZ').locale('fa').format('jYYYY/jMM/jDD HH:mm:ss');
  return jalaliDate;
};
export default dateAndTimeToPersian
