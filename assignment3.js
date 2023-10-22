//TASK: WEEK 3 ASSIGNMENT
//AUTHOR: GIDEON ONDURU AYIEKO

//QUESTION 1:Convert the value to a number
const number = "45";
x=Number(number)
console.log(x);

//QUESTION 2: let the result print 60. //*hint: 60.*
const printSum = (parseInt(20) + 40).toString();  
console.log(printSum);

const sentence = "I am " + (23 + 4) +" " + "years old"; //*hint: “I am 27 years old”*
console.log(sentence);

//QUESTION 3: Copy the code below and paste on your IDE, find the bug in the code below and fix it.
let myVaue = "May";
myVaue = 86;

//QUESTION 4: Declare three camel case variables of your first name, last name, guru coding course, 
//test score and initialize them with the right values. 

let firstName = "Gideon";
let lastName = "Ayieko";
let guruCodingCourse = "JavaScript";
let testScore = 99;

//QUESTION 5: Using a switch statement or If-else condition. The average scores of a JavaScript test is:
let averageScore=55;

if (averageScore > 0 && averageScore < 100)
{
    if(averageScore < 30)
        console.log("F");
    else if (averageScore > 30 && averageScore <= 40)
        console.log("E");
    else if (averageScore > 40 && averageScore <= 50)
        console.log("D");
    else if (averageScore > 50 && averageScore <= 60)
        console.log("C");
    else if(averageScore > 60 && averageScore <= 70)
        console.log("B");
    else if (averageScore > 70)
        console.log("A");
}
else
    console.log("The test score is out of range!");

//QUESTION 6: Write a program, that will count from 1 to 20.
let count = 1;

for (count; count <=20; count++){
    console.log(count);
}








