//dictionaries store key value pairs

//define a dictionary
person = {
    name: "John",
    age: 30,
    city: "New York"
}

console.log(person);

console.log(person['age']); //accessing value in a dictionary using key
console.log(person.age);


console.log(person.city);

person['name']="Jane"; //updating value in a dictionary
console.log(person);

person['married']=false; //adding a new key value pair to the dictionary
console.log(person);

// for (key in person){
//     console.log(key);
// }

// for (key in person){
//     value=person[key];
//     console.log(value);
// }

// for (value of Object.values(person)){
//     console.log(value);
// }

//items
for (item of Object.entries(person)){
    console.log(item);
}
