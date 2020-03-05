
const numberToMonth = [
  "",
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
]

export const dateConversionFromNumbers = (date) => {
  console.log(date);
  if(!date) return null
  try {
    return `${numberToMonth[Number(date.match(/^\d+/)[0])]}, ${date.match(/\d+$/)[0]}`;
  }
  catch(err) {
    console.log(err)
    // if start/end date is not in correct format, return the initial date
    return date;
  }
}
