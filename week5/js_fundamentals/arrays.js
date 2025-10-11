//arrays


//variable - only stores one value



var name="Paul";


var student1="Paul";
var student2="John";
var student3="Mary";
var student4="Jane";
var student5="Mark";
var student6="Lucy";
var student7="Tom";
var student8="Jerry";
var student9="Anna";
var student10="Bob";
var student11="Sara";
var student12="Mike";
var student13="Linda";
var student14="James";
var student15="Karen";
var student16="Chris";
var student17="Nancy";
var student18="Kevin";
var student19="Betty";
var student20="Brian";


var students=['Paul','John','Mary','Jane','Mark'];
console.log(students);

//access first element
console.log(students[0]);

//access third element
console.log(students[2]);

//access last element
console.log(students[4]);
console.log(students[students.length-1]);

//getting the length of the array
console.log(students.length);



var marks=[]; //empty array
console.log(marks);

marks.push(90);
console.log(marks);

marks.push(100);
console.log(marks);

marks.push(80);
marks.push(70);
marks.push(85);
marks.push(95);
console.log(marks);



marks.pop();
console.log(marks);

marks.pop();
marks.pop();
console.log(marks);

marks.pop();
console.log(marks);



data=["Paul",25,true];
console.log(data);


data[1]=26; //modifying an element in the array
console.log(data); 


var students=['Paul','John','Mary','Jane','Mark'];

newStudents=students.slice(1,4);
console.log(newStudents);

for (stud   ent of students){
    console.log(student);
}