/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum Day {
 SATURDAY = "Saturday", 
  SUNDAY =  "Sunday",
} 


function isWeekend(dayOfWeek: Day): boolean {
 return dayOfWeek === Day.SATURDAY || dayOfWeek === Day.SUNDAY
  
}

console.log(isWeekend(Day.SATURDAY));
