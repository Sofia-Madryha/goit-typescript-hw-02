/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum Day {
 suturday = "Suturday", 
  sunday =  "Sunday",
} 
function isWeekend(Day): boolean {
  if (Day.suturday || Day.sunday) {
    return true
  } else {
    return false
  }
}

console.log(isWeekend("Suturday"));
