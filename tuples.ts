const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
};

type Drink = [string, boolean, number];
// what makes this a tuple is that we order the property types in the array
const pepsi: Drink = ['brown', true, 40];
const sprite: Drink = ['clear', true, 40];
const tea: Drink = ['brown', false, 0];

// not clear what we're working with in this tuple
const carSpecs: [number, number] = [400, 3354];

// objects have clear keys associated to the values
const carStats: { horsepower: number; weight: number } = {
  horsepower: 400,
  weight: 3354,
};
