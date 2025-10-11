// functions
// function definition
// function call
//can have return statements



//function definition
function hello(){
   console.log("Hello World"); //code that you will want to execute later on
//    console.log("This is a test");
};


//function call
// hello();

// hello();



// for (let i=0; i<5; i++){
//     hello();
// }



function average(num1,num2){ //num1 and num2 are parameters
    total=num1+num2;
    avg=total/2;
    console.log("The average of "+num1+" and "+num2+" is: "+avg);
}


// average(10,20); //10 and 30 are arguments

// average(100,200);

// average(5,7);


// function total(num1,num2,num3){
//     addition=num1+num2+num3;
//     return addition;
// };

// result=total(10,20,30);
// console.log("The total is: "+result);


// console.log("The total is: "+total(100,200,300));



// function registerUser(username, password,role="user"){ //role is a default parameter
//     console.log("Registering user...");
//     console.log("Username: "+username);
//     console.log("Role: "+role);
// }

// registerUser("john_doe","mypassword");
// registerUser("paul","a12345");
// registerUser("alice","alicepwd");
// registerUser("bob","bobpwd");
// registerUser("charlie","charliepwd");
// registerUser("dave","davepwd");
// registerUser("eve","evepwd");
// registerUser("admin","admin123","admin");


realUsername="admin";
realPassword="admin123";
function login(username, password){
    if(username===realUsername && password===realPassword){
        console.log("Login successful. Welcome admin!");
    }else{
        console.log("Login failed. Invalid credentials.");
    }
}

login('Nirmal','nirmal123');
login('admin','wrongpassword');
login('admin','admin123');

