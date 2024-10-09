
// current time
const getCurrentTime = (): string => {
    const currentDate = new Date();
    const hours = currentDate.getHours().toString().padStart(2, '0');
    const minutes = currentDate.getMinutes().toString().padStart(2, '0');
    return `${hours}:${minutes}`;
  };
  
  // current year
  const getCurrentYear = (): number => {
    const currentDate = new Date();
    return currentDate.getFullYear();
  };
  
  // current year in 2 digits
  const getCurrentYearTwoDigits = (): string => {
    const currentDate = new Date();
    return currentDate.getFullYear().toString().slice(-2);
  };
  
  // current month
  const getCurrentMonth = (): string => {
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const currentDate = new Date();
    return monthNames[currentDate.getMonth()];
  };
  
  // get day
  const getCurrentDayOfMonth = (): number => {
    const currentDate = new Date();
    return currentDate.getDate();
  };
  
  export const data = {
    email: '', //recipient email address
    name: '', //recipient name
    message: '', //detention message
    time: getCurrentTime(),
    date: {
      day:getCurrentDayOfMonth(),
      month:getCurrentMonth(),
      year: getCurrentYear(),
      year_two_digits: getCurrentYearTwoDigits(),
    }
  };

  

