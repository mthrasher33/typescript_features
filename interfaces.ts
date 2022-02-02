// interface is a type just like a number, string, boolean is a type
interface Reportable {
  summary(): string; // summary is a function that returns a string
}

// is a reportable interface
const oldCivic = {
  name: 'civic',
  year: new Date(),
  broken: true,
  summary(): string {
    return `Name: ${this.name}`;
  },
};

// is a reportable interface
// exporot statements module-scopes the const
export const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
  summary(): string {
    return `My drink has ${this.sugar} grams of sugar`;
  },
};

const printSummary = (item: Reportable): void => {
  console.log(item.summary());
};

printSummary(oldCivic);
