// Function to get the hours of sleep for each day
const getSleepHours = (day) => {
  const sleepSchedule = {
    monday: 8,
    tuesday: 7,
    wednesday: 6,
    thursday: 5,
    friday: 7,
    saturday: 8,
    sunday: 9,
  };
  return sleepSchedule[day.toLowerCase()] || 0;
};

const getActualSleepHours = () =>
  Object.values({
    monday: 8,
    tuesday: 7,
    wednesday: 6,
    thursday: 5,
    friday: 7,
    saturday: 8,
    sunday: 9,
  }).reduce((total, hours) => total + hours, 0);

const getIdealSleepHours = (idealHours) => idealHours * 7;

const calculateSleepDebt = () => {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours(8); 
  const sleepDifference = actualSleepHours - idealSleepHours;

  if (sleepDifference === 0) {
    console.log('You got the perfect amount of sleep.');
  } else if (sleepDifference > 0) {
    console.log(`You got more sleep than needed by ${sleepDifference} hours.`);
  } else {
    console.log(`You should get some rest. You are short by ${-sleepDifference} hours.`);
  }
};


calculateSleepDebt();
