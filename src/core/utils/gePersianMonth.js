const getPersianMonth = (dateString) => {
    const date = new Date(dateString);

    const formatter = new Intl.DateTimeFormat('fa-IR', { month: 'long' });
    const monthName = formatter.format(date);

    return monthName
}

export default getPersianMonth;