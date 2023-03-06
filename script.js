const dob = document.getElementById("dob");
const cur = document.getElementById("currentDate");
const result = document.getElementById("result");
const calc = document.getElementById("calculateAge");

// call the arrow function btn
calc.addEventListener("click", function () {
  if (dob.value == "" || cur.value == "") {
    result.innerHTML = "plese select the date";
  } else {
    calculateAgeDifference(cur.value, dob.value);
  }
});

const calculateAgeDifference = (start, end) => {
  let dobYear = parseInt(end.substring(0, 4), 10); // define year index in base 10
  let dobMonth = parseInt(end.substring(5, 7), 10);
  let dobDate = parseInt(end.substring(8, 10), 10);
  let curYear = parseInt(start.substring(0, 4), 10);
  let curMonth = parseInt(start.substring(5, 7), 10);
  let curDate = parseInt(start.substring(8, 10), 10);

  // year difference
  let yearAgeDiff = curYear - dobYear;
    console.log(yearAgeDiff)
  // month difference
  let monthAgeDiff;
  if (curMonth >= dobMonth) {
    monthAgeDiff = curMonth - dobMonth;
  } else {
    yearAgeDiff--;
    monthAgeDiff = 12 + curMonth - dobMonth;
  }

  //  Dates difference
  let DateAgeDiff;
  if (curDate >= dobDate) {
    DateAgeDiff = curDate - dobDate;
  } else {
   monthAgeDiff--;
    noofDaysInDob = 31 + curDate - dobDate; //daysInMonth(dobMonth, dobYear); //if provide a how many year or date in a year this DatesInMonth function return a Dates;
    DateAgeDiff = noofDaysInDob + curDate - dobDate;

    //in case when monthAgediff goes negative
    if (monthAgeDiff < 0) {
      monthAgeDiff = 11;
      yearAgeDiff--;
    }
  }

  result.innerHTML =
    yearAgeDiff +
    " Years, " +
    monthAgeDiff +
    " Months, " +
    DateAgeDiff +
    " Days.";
  console.log(result);
};

// function daysInMonth(Year, Month) {
//   return new Date(Year, Month, 0).getDate;
// }
