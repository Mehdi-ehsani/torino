const formatNumber = (num) => {
    let numStr = num.toString();
    let formattedStr = numStr.replace(/\B(?=(\d{3})+(?!\d))/g, '/');
  
    return formattedStr;
  };
export default formatNumber