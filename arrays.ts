const carMakers: string[] = ['ford', 'toyota', 'chevy'];
const dates = [new Date(), new Date()];

const carsByMake: string[][] = [['f150'], ['corola'], ['camaro']];

// Help with inference when extracting values
const carOne = carMakers[0];
const myCar = carMakers.pop();

// Prevent incompatible values
carMakers.push('lexus');

// Help with 'map'
carMakers.map((car: string): string => {
  return car.toUpperCase();
});

// Flexible types
const importantDates = [new Date(), '2030-10-10'];
importantDates.push('2030-10-10');
importantDates.push(new Date());
