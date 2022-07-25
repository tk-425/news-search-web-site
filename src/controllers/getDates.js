const date = new Date();

// search news date range (7 days)
const lastDate = 31;
const fromYear = date.getFullYear();
const fromMonth = date.getMonth() + 1;
const fromDate = date.getDate();
const toYear = fromMonth === `1` ? fromYear - 1 : fromYear;
const toMonth = fromMonth;
const toDate = fromDate - 7 <= 0 ? lastDate - 7 : fromDate - 7;
const dateRange = `from=${fromYear}-${fromMonth}-${fromDate}&to=${toYear}-${toMonth}-${toDate}`;

exports.dateRange = dateRange;