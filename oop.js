// ES5 (Constructors and prototypes)
// Factory Function
function createCircle(radius) {
  return {
    radius,
    draw: function() {
      console.log("draw");
    }
  };
}
const circle = createCircle(1);

// Constructor Function
function Circle(radius) {
  this.radius = radius;
  this.draw = function() {
    console.log("draw");
  };
}

// console.log(Object.values(book1));
// console.log(Object.keys(book1));

// Constructor
function Book(title, author, year) {
  this.title = title;
  this.author = author;
  this.year = year;
}
// getSummary
Book.prototype.getSummary = function() {
  return `${this.title} was written by ${this.author} in ${this.year}`;
};

// getAge
Book.prototype.getAge = function() {
  const years = new Date().getFullYear() - this.year;
  return `${this.title} is ${years} years old`;
};

// Change Year
Book.prototype.revise = function(newYear) {
  this.year = newYear;
  this.revised = true;
};

// Instantiate an object
const book1 = new Book("Book One", "John Doe", "2013");
const book2 = new Book("Book Two", "Jane Dane", "2015");

console.log(book2.getAge());

console.log(book2);
book2.revise("2018");
console.log(book2);

// Magazine Constructor
function Magazine(title, author, year, month) {
  Book.call(this, title, author, year);

  this.month = month;
}

// Instantiate Magazine Object
const mag1 = new Magazine("Mag One", "John Doe", "2017", "Jan");

// Magazine prototype function (used Book prototype before)
Magazine.prototype.constructor = Magazine;

// Object of Protos
const bookProtos = {
  getSummary: function() {
    return `${this.title} was written by ${this.author} in ${this.year}`;
  },
  getAge: function() {
    const years = new Date().getFullYear() - this.year;
    return `${this.title} is ${years} years old`;
  }
};

// Create Object
const book3 = Object.create(bookProtos);
book3.title = "Book Three";
book3.author = "Book Three";
book3.year = "Book Three";

// ES6 (Class)
class Journal {
  constructor(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
  }
  getSummary() {
    return `${this.title} was written by ${this.author} in ${this.year}`;
  }
  getAge() {
    const years = new Date().getFullYear() - this.year;
    return `${this.title} is ${years} years old`;
  }
  // Static Method
  static topBookStore() {
    return "Barnes & Noble";
  }
}

const book4 = new Journal("Journal One", "John Doe", "2011");
console.log(book4);

console.log(Journal.topBookStore());

// Subclass
class Notebook extends Journal {
  constructor(title, author, year, month) {
    super(title, author, year);
    this.month = month;
  }
}

// Instantiate Notebook
const journal1 = new Journal("Journal One", "Jane Journal", "2018", "Oct");

console.log(journal1.getAge());
