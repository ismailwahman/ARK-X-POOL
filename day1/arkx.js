//******Task 1 *******//
let firstName="ismail";
var lastName = "ait wahmane";
console.log(firstName);
console.log(lastName);

console.log(Math.PI);
var radius=5;
var favoriteSuperhero="dr.strang";
var favoriteQuote= "mental toughness is a lifrstyle";
const fullName = firstName + " " + lastName;
console.log(fullName);
//*****task 2 *****//

radius*radius
var area = Math.PI * Math.pow(radius, 2);
var perimeter = 2 * Math.PI * radius;
console.log("Radius:", radius);
console.log("Area of the circle:", area);
console.log("Perimeter of the circle:", perimeter);

//concatenation
var motivation = 'A wise man named ' + favoriteSuperhero + ': '+ favoriteQuote;
console.log(motivation);
//******Task 3******//
let a = 3;
let b = 10;
//destructuring
[a, b] = [b, a];
console.log("After swapping: a =", a, " and b =", b); 
//*******Conditional Statements */
//***Task 1 : Even or Odd */
let mynumber= 6;
if (mynumber % 2 == 0) {
  console.log("Even");
} else {
  console.log("Odd");
}

//****Task 2 :  Days of the week*/

let day=4;
    switch (day) {
        case 1:
            console.log("Monday");
            break;
        case 2:
            console.log("Tuesday");
            break;
        case 3:
            console.log("Wednesday");
           
        case 4:
            console.log("Thursday");
            break;
        case 5:
            console.log("Friday");
            break;
        case 6:
            console.log("Saturday");
            break;
        case 7:
            console.log("Sunday");
            break;
        default:
            console.log("Invalid Day");
    }

//*****Task 3 : Maximum *//
/*let A = -15;
let B = 6;
let C = 2.6;
let maxNumber = Math.max(A, B, C);
console.log("The maximum number is: " + maxNumber);*/
let q = -15;
let w = 6;
let e = 2.6;
if (q> w && q > e) {
  console.log(q);
} else if (w > q && w > e) {
  console.log(w);
} else {
  console.log(e);
}

//***Task 4 : The Teacher */
let score = 83;
let grade;
if (score > 85) {
    grade = 'A';
} else if (score > 70) {
    grade = 'B';
} else if (score > 55) {
    grade = 'C';
} else if (score > 40) {
    grade = 'D';
} else if (score > 15) {
    grade = 'E';
} else {
    grade = 'F'; 
}

console.log("The grade is: " + grade);