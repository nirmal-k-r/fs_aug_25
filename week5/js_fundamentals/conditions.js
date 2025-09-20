//conditions


//compairon operators
// == equal to
// != not equal
// > greater than
// < less than
// >= greater than or equal to
// <= less than or equal to


let age=18;

if (age >= 18){
    console.log("You are eligible to vote");
}else{
    console.log("You are not eligible to vote");
}

var married=true;

if (married == true){
    console.log("You are married");
}else{
    console.log("You are not married");
}

var num=10;
if (num=10){
    console.log("num is 10");
};

db_email="admin@gmail.com";
db_password="12345";

enteredEmail="test@gmail.com";
enteredPassword="12345";

//some more operator
// and operator - &&
// or operator - ||
// not operator - !

if (enteredEmail==db_email && enteredPassword==db_password){
    console.log("Login successful");
}else{
    console.log("Invalid email or password");
}


temp=24;
humidity=70;

if (temp>25 || humidity>50){
    console.log('Turning on the ac');
}else{
    console.log('Turning off the AC');
}


//multiple conditions
total=8000;
if (total>10000){
    console.log("You get a 10% discount");
}else if (total>5000){
    console.log("You get a 5% discount");
}else if (total>2000){
    console.log("You get a 2% discount");
}else{
    console.log("No discount");
}
