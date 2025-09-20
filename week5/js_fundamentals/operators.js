var num1=10
var num2=5;

//operators
//Arithmetic operators: +, -, *, /, %, ++, --
// console.log(num1+num2); //Addition

addition=num1+num2;
subtraction=num1-num2;
multiplication=num1*num2;
division=num1/num2;
modulus=num1%num2;

console.log("Addition: "+addition);
console.log("Subtraction: "+subtraction);
console.log("Multiplication: "+multiplication);
console.log("Division: "+division);
console.log("Remainder: "+modulus);


console.log(10+1);


//some operators on strings
firstName="John";
lastName="Doe";
fullName=firstName+lastName; //concatenation
console.log(fullName);

fullName=firstName+" "+lastName;
console.log(fullName);


//operation order - BODMAS
result=3+(5-3)*2-1;
console.log(result);



//String formatting
name="John";
age=30;

console.log(name+" is "+age+" years old.");
console.log(name,"is",age,"years old.");

console.log(`${name} is ${age} years old.`); //template literals