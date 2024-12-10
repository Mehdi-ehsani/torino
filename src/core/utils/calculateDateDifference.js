const calculateDateDifference = (date1, date2) => {
    const firstDate = new Date(date1);
    const secondDate = new Date(date2);
  
    const timeDifference = Math.abs(firstDate - secondDate);
  
    const dayDifference = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));
  
    return dayDifference
  };
  
export default calculateDateDifference  
 
  