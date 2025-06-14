/*Constructor funtion*/

function book(title, author, year) {
  this.title = title;
  this.author = author;
  this.year = year;
}

/*variables built from constructor function*/

var book1 = new book("Permanent Midnight", "Jerry Stahl", 1995);
var book2 = new book("Perv: A Love Story", "Jerry Stahl", 1999);
var book3 = new book("Lunar Park", "Bret Easton Ellis", 2005);
var book4 = new book("The Pleasure of My Own Company", "Steve Martin", 2003);
var book5 = new book("Delusions of Grandma", "Carrie Fisher", 1994);

/*utilizing constructor variables*/

document.getElementById("constructorParagraph").innerHTML =
  "My favorite author is " +
  book1.author +
  " and I also like " +
  book3.author +
  ", " +
  book4.author +
  ", and " +
  book5.author +
  "! They have all written some of my favorite books, which include " +
  book1.title +
  ", " +
  book2.title +
  ", " +
  book3.title +
  ", " +
  book4.title +
  ", and " +
  book5.title +
  ".";
