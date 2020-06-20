// Chapter # 1 - Start

// Chapter # 1 - Task # 1

alert("Hello");

// Chapter # 1 - Task # 2

alert("Error! Please enter a valid password.");

// Chapter # 1 - Task # 3

alert(" Welcome to JS Land... \n Happy Coding! ");

// Chapter # 1 - Task # 4

alert("Welcome to JS Land");
alert("Happy Coding!");

// Chapter # 1 - Task # 5

alert("Hello... I can run JS through my web browser's console");

// Chapter # 1 - Task # 6 (Advance level task)

// Chapter # 1 - Task # 7 (Advance level task)

// Chapter # 1 - End


// Chapter # 2 - Start

// Chapter # 2 - Task # 1

var username;

// Chapter # 2 - Task # 2

var myname = "Abdul Raheem";

// Chapter # 2 - Task # 3

var message;
message = "Hello World";
alert(message);

// Chapter # 2 - Task # 4

var studentName = "Abdul Raheem";
var studentAge = "22 years old";
var studentCourse = "Certified Mobile Application Development";
alert(studentName);
alert(studentAge);
alert(studentCourse);

// Chapter # 2 - Task # 5

var pizza = " PIZZA \n PIZZ \n PIZ \n PI \n P ";
alert(pizza);

// Chapter # 2 - Task # 6

var email = "Rahimansari1697@gmail.com";
alert("My email address is " + email);

// Chapter # 2 - Task # 7

var book = "A smarter way to learn JavaScript";
alert("I am trying to learn from the Book " + book);

// Chapter # 2 - Task # 8

document.write("Yah! I can write HTML content through JavaScript");

// Chapter # 2 - Task # 9

var symbStr = "▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬";
document.write(symbStr);
alert(symbStr);

// Chapter # 2 - End

// Chapter # 3 - Start

// Chapter # 3 - Task # 1

var age = 22;
alert("I am " + age + " years old");

// Chapter # 3 - Task # 2

var n = 14;
alert("You have visited this site " + n + " times");

// Chapter # 3 - Task # 3

var birthYear = 1997;
document.write("My birth year is " + birthYear + "<br /> Data type of my declared variable is number");

// Chapter # 3 - Task # 4

var visitorName = "John Doe";
var productTittle = "T-Shirt";
var productQuantity = 5;
document.write(visitorName + " ordered " + productQuantity + " " + productTittle +"(s) on XYZ clothing store");

// Chapter # 3 - End

// Chapter # 4 - Start

// Chapter # 4 - Task # 1

var userName, userId, userPassword ;

// Chapter # 4 - Task # 2

var userName, $userAge, user_gender, _userEmail, userPhoneNumber_1;

//var 123, &userAge, user-gender, *userEmail, 1userPhoneNumber_1;

// Chapter # 4 - Task # 3

document.write("<h1>Rules for naming JS variables</h1> Vriable names can only contain letters, numbers, $ or _ . For example $my_1stVariable <br /> Variables must begin with a letter, $ or _ . For example $name, _name or name <br /> Variable names are case sensitive <br /> Variable names should not be JS keywords");

// Chapter # 4 - End

// Chapter # 5 - Start

// Chapter # 5 - Task # 1

var numberOne = +prompt("Enter first number");
var numberTwo = +prompt("Enter first number");
var sum = numberOne + numberTwo;
document.write("Sum of " + numberOne + " and " + numberTwo + " is " + sum);

// Chapter # 5 - Task # 2

var numberOne = +prompt("Enter first number");
var numberTwo = +prompt("Enter first number");
var sub = numberOne - numberTwo;
var mul = numberOne * numberTwo;
var div = numberOne / numberTwo;
var mod = numberOne % numberTwo;
document.write("Subtraction of " + numberOne + " and " + numberTwo + " is " + sub + "<br />");
document.write("Multiplication of " + numberOne + " and " + numberTwo + " is " + mul + "<br />");
document.write("Division of " + numberOne + " and " + numberTwo + " is " + div + "<br />");
document.write("Modulus of " + numberOne + " and " + numberTwo + " is " + mod + "<br />");

// Chapter # 5 - Task # 3

var number;
document.write("Value after variable declaration is " + number + "<br />");
number = 5;
document.write("Initial value: " + number + "<br />");
++number;
document.write("Value after increment is: " + number + "<br />");
number += 7;
document.write("Value after addition is: " + number + "<br />");
--number;
document.write("Value after decrement is: " + number + "<br />");
number %= 3;
document.write("The remainder is: " + number + "<br />");

// Chapter # 5 - Task # 4

var price = 600;
var quantity = 5;
var totalCost = price * quantity;
document.write("Total cost to buy " + quantity + " tickets to a movie is " + totalCost + "PKR <br />");

// Chapter # 5 - Task # 5

var num = 4;
var count;
document.write("Table of " + num + "<br />");
	for(count=1; count<=10; count++)
	{
		document.write(num + " x " + count + " = " + num*count + "<br/>");
	}

// Chapter # 5 - Task # 6

var celsius, fahrenheit, celsiusToFahrenheit, fahrenheitToCelsius;
celsius = 25;
fahrenheit = 70;
celsiusToFahrenheit = (celsius * 9/5) + 32;
fahrenheitToCelsius = (fahrenheit - 32) * 5/9;
document.write(celsius + "<sup>o</sup>C is " + celsiusToFahrenheit + "<sup>o</sup>F" + "<br />");
document.write(fahrenheit + "<sup>o</sup>F is " + fahrenheitToCelsius + "<sup>o</sup>C" + "<br />");

// Chapter # 5 - Task # 7

var priceOfItem_1, priceOfItem_2, quantityOfItem_1, quantityOfItem_2, shippingCharges, totalCost;
priceOfItem_1 = 650;
priceOfItem_2 = 100;
quantityOfItem_1 = 3;
quantityOfItem_2 = 7;
shippingCharges = 100;
totalCost = (priceOfItem_1 * quantityOfItem_1) + (priceOfItem_2 * quantityOfItem_2) + shippingCharges;
document.write("<h1>Shopping Cart</h1> <br />");
document.write("Price of item 1 is " + priceOfItem_1 + "<br />");
document.write("Quantity of item 1 is " + quantityOfItem_1 + "<br />");
document.write("Price of item 2 is " + priceOfItem_2 + "<br />");
document.write("Quantity of item 2 is " + quantityOfItem_2 + "<br />");
document.write("Shipping Charges " + shippingCharges + "<br /><br />");
document.write("Total Cost of your order is " + totalCost + "<br />");

// Chapter # 5 - Task # 8

var totalMarks, marksObtained ;
totalMarks = 980;
marksObtained = 804;
percentage = (marksObtained/totalMarks) * 100;
document.write("<h1>Marks Sheet</h1> <br />");
document.write("Total Marks: " + totalMarks + "<br />");
document.write("Marks Obtained: " + marksObtained + "<br />");
document.write("Percentage: " + percentage + "%");

// Chapter # 5 - Task # 9

var usDollars, saudiRiyals, totalPakistaniCurrency;
usDollars = 10;
saudiRiyals = 25;
totalPakistaniCurrency = (usDollars * 104.80) + (saudiRiyals * 28) ;
document.write("<h1>Currency in PKR</h1> <br />");
document.write("US Dollars: " + usDollars + "<br />");
document.write("Saudi Riyal: " + saudiRiyals + "<br /><br />");
document.write("Total of US Dollars & Saudi Riyals Currency in PKR: " + totalPakistaniCurrency);

// Chapter # 5 - Task # 10

var num = 10;
var result;

result = (num + 5) * 10 / 2;
document.write(result);

// Chapter # 5 - Task # 11

var currentYear, birthYear, age;
currentYear = 2016;
birthYear = 1992;
age = currentYear - birthYear;
document.write("<h1>Age Calculator</h1> <br />");
document.write("Current Year: " + currentYear + "<br />");
document.write("Birth Year: " + birthYear + "<br />");
document.write("Your Age is: " + age);

// Chapter # 5 - Task # 12

var radius, circumference, area;
const pi = 3.142;
radius = 20;
circumference = 2 * pi * radius;
area = pi * (radius *radius);
document.write("<h1>The Geometrizer</h1> <br />");
document.write("Radius of a circle: " + radius + "<br />");
document.write("The circumference is: " + circumference + "<br />");
document.write("The area is: " + area);

// Chapter # 5 - Task # 13

var favouriteSnacks, currentAge, maximumAge, estimatedAmount, years, totalDays, totalSnacks;
favouriteSnacks = "chocolate chip";
currentAge = 15;
maximumAge = 65;
estimatedAmount = 3;
years = maximumAge - currentAge;
totalDays = 365 * years;
totalSnacks = estimatedAmount * totalDays;
document.write("<h1>The Lifetime Supply Calculator</h1> <br />");
document.write("Favourite Snack: " + favouriteSnacks + "<br />");
document.write("Current Age: " + currentAge + "<br />");
document.write("Estimated Maximum Age: " + maximumAge + "<br />");
document.write("Amount of snacks per day: " + estimatedAmount + "<br />");
document.write("You will need " + totalSnacks + " chocolate chip to last you until the ripe old age of " + maximumAge + "<br />");

// Chapter # 5 - End

// Chapter # 6-9 - Start

// Chapter # 6-9 - Task # 1

var a = +prompt("Enter the value of a:");
document.write("Result: <br /> The value of a is: " + a + "<br /> ................................. <br /><br />");

var preInc, postInc, preDec, postDec;

preInc = ++a;
document.write("The value of ++a is: "+ preInc +"<br />");
document.write("Now the value of a is: " + a + "<br /><br />");

postInc = a++;
document.write("The value of a++ is: " + postInc + "<br />");
document.write("Now the value of a is: " + a + "<br /><br />");

preDec = --a;
document.write("The value of --a is: " + preDec + "<br />");
document.write("Now the value of a is: " + a + "<br /><br />");

postDec = a--;
document.write("The value of a-- is: " + postDec + "<br />");
document.write("Now the value of a is: " + a);

// Chapter # 6-9 - Task # 2

var a = 2, b = 1;
var result = --a - --b + ++b + b--;

document.write("a is " + a + "<br />");
document.write("b is " + b + "<br />");
document.write("result is " + result);

// Chapter # 6-9 - Task # 3

var username = prompt("Enter your name");
alert("Hello " + username);

// Chapter # 6-9 - Task # 4 is not given in pdf

// Chapter # 6-9 - Task # 5

var number = +prompt("Enter number");
var count, defaultNumber = 5;
if(number!=0)
{
	for(count=1; count<=10; count++)
	{
		document.write(number + " x " + count + " = " + number*count + "<br />");
	}
}
else
{
	for(count=1; count<=10; count++)
	{
		document.write(defaultNumber + " x " + count + " = " + defaultNumber*count + "<br />");
	}
}

// Chapter # 6-9 - Task # 6

var totalMarksSubjectOne = 100, totalMarksSubjectTwo = 100, totalMarksSubjectThree = 100;
var totalMarks = totalMarksSubjectOne + totalMarksSubjectTwo + totalMarksSubjectThree;

var subjectOne = prompt("Enter First Subject Name");
var subjectTwo = prompt("Enter Second Subject Name");
var subjectThree = prompt("Enter Third Subject Name");

var obtainedMarksSubjectOne = +prompt("Enter Obtained Marks for " + subjectOne);
var obtainedMarksSubjectTwo = +prompt("Enter Obtained Marks for " + subjectTwo);
var obtainedMarksSubjectThree = +prompt("Enter Obtained Marks for " + subjectThree);

var totalObtainedMarks = obtainedMarksSubjectOne + obtainedMarksSubjectTwo + obtainedMarksSubjectThree;

var percentageOfSubjectOne = (obtainedMarksSubjectOne/totalMarksSubjectOne) *100;
var percentageOfSubjectTwo = (obtainedMarksSubjectTwo/totalMarksSubjectTwo) *100;
var percentageOfSubjectThree = (obtainedMarksSubjectThree/totalMarksSubjectThree) *100;

var percentage = (totalObtainedMarks/totalMarks) * 100;

document.write("<table>");
document.write("<tr> <th>Subject</th> <th>Total Marks</th> <th>Obtained Marks</th> <th>Percentage</th> </tr>");
document.write("<tr>" + "<td>" + subjectOne + "</td>" + "<td>" + totalMarksSubjectOne + "</td>" + "<td>" + obtainedMarksSubjectOne +"</td>" + "<td>" + percentageOfSubjectOne + "%</td>" + "</tr>");
document.write("<tr>" + "<td>" + subjectTwo + "</td>" + "<td>" + totalMarksSubjectTwo + "</td>" + "<td>" + obtainedMarksSubjectTwo +"</td>" + "<td>" + percentageOfSubjectTwo + "%</td>" + "</tr>");
document.write("<tr>" + "<td>" + subjectThree + "</td>" + "<td>" + totalMarksSubjectThree + "</td>" + "<td>" + obtainedMarksSubjectThree +"</td>" + "<td>" + percentageOfSubjectThree + "%</td>" + "</tr>");
document.write("<tr>" + "<td>" + " " + "</td>" + "<td><b>" + totalMarks + "</b></td>" + "<td><b>" + totalObtainedMarks + "</b></td>" + "<td><b>" + percentage + "%</b></td>" + "</tr>");
document.write("</table>");

// Chapter # 6-9 - Task # 7 is not given in pdf

// Chapter # 6-9 - End

// Chapter # 9-11 - Start

// Chapter # 9-11 - Task # 1

var cityName = prompt("Enter Your City Name");

if(cityName == "Karachi" || cityName == "karachi")
{
	alert("Welcome to City of Lights");
}
else
{
	alert("Welcome to " + cityName);
}

// Chapter # 9-11 - Task # 2

var gender = prompt("Enter your gender");

switch(gender)
{
	case "Male": 
	case "male":
		alert("Good Morning Sir");
	break;

	case "Women": 
	case "women":
		alert("Good Morning Ma'am");
	break;

	default:
		alert("Please enter your gender");
}

// Chapter # 9-11 - Task # 3

var signalColor = prompt("Enter traffic signal light color");

switch(signalColor)
{
	case "Red": 
	case "red":
		alert("Must Stop");
	break;

	case "Yellow": 
	case "yellow":
		alert("Ready to move");
	break;

	case "Green": 
	case "green":
		alert("Move now");
	break;

	default:
		alert("Please do enter/correct traffic signal light color");
}

// Chapter # 9-11 - Task # 4

var remainingFuel = +prompt("How much liter fuel remains in  your car");
var minimumLimit = 0.25;

	if (remainingFuel < minimumLimit)
	{
		alert("Please refill the fuel in your car");
	}
	else if (remainingFuel == minimumLimit)
	{
		alert("You will need to refill the fuel in your car shortly");
	}
	else if (remainingFuel > minimumLimit)
	{
		alert("No worries you have enough fuel in your car");
	}
	else
	{
		alert("Please enter fuel quantity remains in your car");
	}

// Chapter # 9-11 - Task # 5

var a = 4;
if (++a === 5){
alert("given condition for variable a is true"); // this script displays alert box
}

var b = 82;
if (b++ === 83){
alert("given condition for variable b is true"); // this script doesn't display alert box
}

var c = 12;
if (c++ === 13){
alert("condition 1 is true");
}
if (c === 13){
alert("condition 2 is true");  // this script displays alert box
}
if (++c < 14){
alert("condition 3 is true");
}
if(c === 14){
alert("condition 4 is true");
}

var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;     // this script displays alert box
if (totalCost === laborCost + materialCost){
alert("The cost equals");
}

if (true){
	alert("True");
	}					// this script displays alert box
if (false){
	alert("False");
	}

if("car" < "cat"){
	alert("car is smaller than cat");		// this script displays alert box
	}

// Chapter # 9-11 - Task # 6

var subjectOne = "English", subjectTwo = "Urdu", subjectThree = "Math";

var totalMarksSubjectOne = 100, totalMarksSubjectTwo = 100, totalMarksSubjectThree = 100;
var totalMarks = totalMarksSubjectOne + totalMarksSubjectTwo + totalMarksSubjectThree;

var obtainedMarksSubjectOne = +prompt("Enter Obtained Marks for " + subjectOne);
var obtainedMarksSubjectTwo = +prompt("Enter Obtained Marks for " + subjectTwo);
var obtainedMarksSubjectThree = +prompt("Enter Obtained Marks for " + subjectThree);

var totalObtainedMarks = obtainedMarksSubjectOne + obtainedMarksSubjectTwo + obtainedMarksSubjectThree;

var percentage = (totalObtainedMarks/totalMarks) * 100;

document.write("<h1>Marks Sheet</h1>");

if(percentage >= 80)
{
    document.write("Total Marks : " + totalMarks +"<br />" + "Marks Obtained : " + totalObtainedMarks + "<br />" + "Percentage : " + percentage + "%<br />" + "Grade : A-One" + "<br />" + "Remarks : Excellent");
}
else if (percentage >= 70)
{
    document.write("Total Marks : " + totalMarks +"<br />" + "Marks Obtained : " + totalObtainedMarks + "<br />" + "Percentage : " + percentage + "%<br />" + "Grade : A" + "<br />" + "Remarks : Good");
}
else if (percentage >= 60)
{
    document.write("Total Marks : " + totalMarks +"<br />" + "Marks Obtained : " + totalObtainedMarks + "<br />" + "Percentage : " + percentage + "%<br />" + "Grade : B" + "<br />" + "Remarks : You need to improve");
}
else
{
    document.write("Total Marks : " + totalMarks +"<br />" + "Marks Obtained : " + totalObtainedMarks + "<br />" + "Percentage : " + percentage + "%<br />" + "Grade : Fail" + "<br />" + "Remarks : Sorry");
}

// Chapter # 9-11 - Task # 7

var secretNumber = 6;
var guessNumber = +prompt("Guess the correct Number");

document.write("<h1>Guess Game</h1>");

if(guessNumber == secretNumber)
{
    document.write("Bingo! Correct Answer");
}
else if (guessNumber == secretNumber + 1 || guessNumber == secretNumber - 1)
{
    document.write("Close enough to the correct answer");
}
else
{
    document.write("Oops! Wrong Guess");
}

// Chapter # 9-11 - Task # 8

var number = +prompt("Enter Number");

document.write("<h1>Divisible By 3</h1>");

if(number % 3 == 0)
{
    document.write("Your number is divisible by 3");
}
else
{
    document.write("Your number is not divisible by 3");
}

// Chapter # 9-11 - Task # 9

var number = +prompt("Enter Number");

document.write("<h1>Even & Odd Number</h1>");

if(number % 2 == 0)
{
    document.write("Your number is an Even number");
}
else
{
    document.write("Your number is an Odd number");
}

// Chapter # 9-11 - Task # 10

var temprature = +prompt("Enter Temprature");

document.write("<h1>Temprature</h1>");

if(temprature>=40)
{
    document.write("It's too hot outside");
}
else if(temprature>=30)
{
    document.write("The weather today is normal");
}
else if(temprature>=20)
{
    document.write("Today's weather is cool");
}
else if(temprature>=10)
{
    document.write("OMG! Today's weather is so cool");
}
else
{
    document.write("Oh! it's Freezy");
}

// Chapter # 9-11 - Task # 11

var firstNumber = +prompt("Enter First Number");
var operation = prompt("Enter Airthmatic Operation For Calculation - (+, -, *, /)");
var secondNumber = +prompt("Enter Second Number");

document.write("<h1>Calculator</h1>");

var add = firstNumber + secondNumber, sub = firstNumber - secondNumber, mul = firstNumber * secondNumber, div = firstNumber / secondNumber, mod = firstNumber % secondNumber;

if(operation == "+")
{
    document.write("Sum of numbers is " + add);
}
else if(operation == "-")
{
    document.write("Subtraction of numbers is " + sub);
}
else if(operation == "*")
{
    document.write("Multiplication of numbers is " + mul);
}
else if(operation == "/")
{
    document.write("Division of numbers is " + div);
}
else if(operation == "%")
{
    document.write("Remainder of numbers is " + mod);
}
else
{
    document.write("Error");
}

// Chapter # 9-11 - End

// Chapter # 12-13 - Start

// Chapter # 12-13 - Task # 1 Out of Topics which covered in book and classes

// Chapter # 12-13 - Task # 2

var firstNumber = +prompt("Enter first number");
var secondNumber = +prompt("Enter second number");

document.write("<h1>Number Comparison</h1>");

if (firstNumber > secondNumber)
{
    document.write(firstNumber + " is larger number than " + secondNumber);
}
else if (firstNumber < secondNumber)
{
    document.write(secondNumber + " is larger number than " + firstNumber);
}
else if (firstNumber == secondNumber)
{
    document.write(firstNumber + " is equal to " + secondNumber);
}
else
{
    document.write("Please enter number");
}

// Chapter # 12-13 - Task # 3

var number = +prompt("Enter first number");

document.write("<h1>Number Status</h1>");

if (number > 0)
{
    document.write(number + " is a positive number");
}
else if (number < 0)
{
    document.write(number + " is a negative number");
}
else
{
    document.write("Entered number is zero");
}

// Chapter # 12-13 - Task # 4

var character = prompt("Enter a character");

document.write("<h1>Character Status</h1>");

if(character == "a" || character == "A" || character == "e" || character == "E" || character == "i" || character == "I" || character == "o" || character == "O" || character == "u" || character == "U")
{
	document.write("Vowels : True");
}
 else
{
    document.write("Vowels : False");
}

// Chapter # 12-13 - Task # 5

var setPassword = prompt("Set Password");
var enterPassword = prompt("Enter Password");

document.write("<h1>Password</h1>");

if (enterPassword === setPassword && enterPassword !== null && enterPassword !== "" && setPassword !== null && setPassword !== "")
{
    document.write("Correct! The password you entered matches the original password");
}
else if (enterPassword !== setPassword && enterPassword !== null && enterPassword !== "" && setPassword !== null && setPassword !== "")
{
    document.write("Incorrect Password");
}
else if ((enterPassword === null || enterPassword === "") && (setPassword !== null || setPassword !== ""))
{
    document.write("Please enter your password");
}
else
{
    document.write("Please first set your password then enter your password");
}

// Chapter # 12-13 - Task # 6

var greeting;
var hour = 13;
if (hour < 18) {
greeting = "Good day";
}
else								// fixed if-else statement
{
greeting = "Good evening";
}
document.write(greeting);

// Chapter # 12-13 - Task # 7

var time = +prompt("Enter time in 24-hours format : (like this : 0000 - 2300)");

document.write("<h1>Time Based Greetings</h1>");

if (time >= 0000 && time < 1200)
{
    document.write("Good morning!");
}
else if (time >= 1200 && time < 1700)
{
    document.write("Good afternoon!");
}
else if (time >= 1700 && time < 2100)
{
    document.write("Good evening!");
}
else if (time >= 2100 && time < 2359)
{
    document.write("Good night!");
}
else
{
    document.write("Please enter correct time or time format");
}

// Chapter # 12-13 - End

// Chapter # 14-16 - Start

// Chapter # 14-16 - Task # 1

var studentNames = [];

// Chapter # 14-16 - Task # 2 Out of topics which covered in book and class

// Chapter # 14-16 - Task # 3

var names = ["Raheem", "Ali", "Hamza", "Osama", "Hussain"];

// Chapter # 14-16 - Task # 4

var numbers = [1, 2, 3, 4, 5];

// Chapter # 14-16 - Task # 5

var booleans = [true, false];

// Chapter # 14-16 - Task # 6

var mixes = ["Raheem", 1, "x", true,];

// Chapter # 14-16 - Task # 7

var qualifications = ["SSC" , "HSC" , "BCS" , "BS" , "BCOM" , "MS" , "MPHIL" , "PHD"];

document.write("<h1>Qualifications :</h1>");
document.write("1) " + qualifications[0] + "<br />2) " + qualifications[1] + "<br />3) " + qualifications[2] + "<br />4) " + qualifications[3] + "<br />5) " + qualifications[4] + "<br />6) " + qualifications[5] + "<br />7) " + qualifications[6] + "<br />8) " + qualifications[7]);

// Chapter # 14-16 - End
