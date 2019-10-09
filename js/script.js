//alert ('Hello from external JS file;')

document.write('greetings from document.write()');

console.log('Hi, I am happy to help you with debugging');

console.log('you can\'t delete me');

// /* add a + symbol to add both functions into the website otherwise one takes 
// over the other one, but is not a secure way*/
// document.getElementById('heading').innerHTML += "</br>Learning JS </br>";


// //secured but reduced performance
// document.getElementById('heading').innerText += 'Hi, I am produced by innerText';

// //secured and increased performance
// document.getElementById('heading').textContent += 'Hello from textContent';

/*Data types
data- raw values, facts, and figures after processing data will be called as 
information numeric type...example +1, -5, 5.4
string type==> non numeric can contain alphabets, numbers, special characters
boolean or logical  type ( 0 1, false true, no yes, low high, off on)
Date fomat 
Time format 
currency format - $. pound symbol*/


//values to be sorted in a variable should be declare

var name = "Daniel"; //vas is a keyword used to declare a variable/ A variable is a name used to store a value/Data
var myName = "Beula"; //double or single quotes can be used to store a string value 
var yourName = "Samuel"; 
var myAge = 16; //semicolon is used at the end of every statement to denote the end//
				//numeric values are not written with quotation mark, only strings are.
				//camelcase is preferred over the ihone 
				//double or single quotes can be used to store a string value
				//numeric values are not writen with quotation mark, only strings are


var a = 5;
var b = 12;
var c = a + b;


console.log('c'); //produces the letter c, trats as a string values
console.log(c); //produces the value of c that is calculated

console.log (myName + '' + yourName); // adding strings is called string concatenation

var x = '650'; //string value
var y = '50'; //string values
var z = x + y;
console.log (z);

/*operators
Mathematical /arithmetic operators ..... + ...-....*(asterisk)..../(slash)
relational operators .....<(less than)...>(greater than).....
<=(less than or equal).....>=(greater than or equal)
==(equal)
*/

var myExpression = a + 25 - 3 * 2; //24 not 60 ; follows BODMAS
console.log(myExpression);





