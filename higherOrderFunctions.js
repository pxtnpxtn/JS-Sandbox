// Data
const companies= [
    {name: "Company One", category: "Finance", start: 1981, end: 2004},
    {name: "Company Two", category: "Retail", start: 1992, end: 2008},
    {name: "Company Three", category: "Auto", start: 1999, end: 2007},
    {name: "Company Four", category: "Retail", start: 1989, end: 2010},
    {name: "Company Five", category: "Technology", start: 2009, end: 2014},
    {name: "Company Six", category: "Finance", start: 1987, end: 2010},
    {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
    {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
    {name: "Company Nine", category: "Retail", start: 1981, end: 1989}
  ];
  
const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

// forEach
companies.forEach((company) => {
  console.log(company.name); //Returns company 1 to 9.
})

// Filter
const canDrink = ages.filter(age => age >= 21);
console.log(canDrink); //Returns list of ages that can drink.

const retailCompanies = companies.filter(company => company.category === 'Retail');
console.log(retailCompanies); //Returns list of retail companies.

const eightiesCompanies = companies.filter(company => (company.start >= 1980 && company.start <= 1989));
console.log(eightiesCompanies); //Returns list of companies that started in the 80's.

const lastedTenYears = companies.filter(company => (company.end - company.start >= 10));
console.log(lastedTenYears); //Returns list of companies that were in business for at least 10 years.

// Map
const companyNames = companies.map(company => company.name);
console.log(companyNames); //Returns new array of company names.

const yearsInOperation = companies.map(company => `${company.name} [${company.start} - ${company.end}]`);
console.log(yearsInOperation); //Returns new array of years in operation.

const agesSquared = ages.map(age => Math.pow(age, 2));
console.log(agesSquared); //Returns new array of ages squared.

// Sort
const sortedComapnies = companies.sort((a, b) => (a.start > b.start ? 1 : -1));
console.log(sortedComapnies); //Returns list of companies, in order of when they started.

const descendingAges = ages.sort((a, b) => b - a);
console.log(descendingAges); //Returns list of ages in descending order.

// Reduce
const ageSum = ages.reduce((total, age) => total + age, 0);
console.log(ageSum); //Returns 460.

const totalYears = companies.reduce((total, company) => total + (company.end - company.start), 0);
console.log(totalYears); //Returns 119.

// Combine methods
const combined = ages
  .map(age => age * 2)
  .filter(age => age >= 40)
  .sort((a, b) => a - b)
  .reduce((a, b) => a + b, 0);
console.log(combined); //Returns 798.