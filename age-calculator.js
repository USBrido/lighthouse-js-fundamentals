function ageCalculator(name, yearOfBirth, currentYear) {
  let age = (currentYear - yearOfBirth);

  return name + " is " + age + " years old.";
}

console.log(ageCalculator("Suzie", 1987, 2019));
console.log(ageCalculator("Jack", 2007, 2019));
console.log(ageCalculator("Ali", 2019, 2019));