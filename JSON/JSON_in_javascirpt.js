// javascript Object
const person = {
    name: "Charles",
    age: 30,
    isStudent: false,
    courses: ["Math", "Science", "History"],
    address: {
      street: "104 longwood gardens",
      city: "Ilford",
      zip: "IG5 0BB"
    }
  };
  
  console.log("this is js object: ");
  console.log(person);
  //console.log(person.name);

  //To convert a JSON string to a JavaScript object, you can use JSON.parse():

const jsonString_01 = '{"name":"Alice","age":30,"isStudent":false,"courses":["Math","Science","History"],"address":{"street":"123 Main St","city":"Anytown","zip":"12345"}}';

console.log("Converting JSON string to JSObject");
const jsObject_01 = JSON.parse(jsonString_01);

console.log(jsObject_01);

// To convert a JavaScript object to a JSON string, you can use JSON.stringify():

const jsObject_02 = {
    name: "Alice",
    age: 30,
    isStudent: false,
    courses: ["Math", "Science", "History"],
    address: {
      street: "123 Main St",
      city: "Anytown",
      zip: "12345"
    }
  };
  
  const jsonString_02 = JSON.stringify(jsObject_02);
  console.log("Converting js Object to JSON data")
  console.log(jsonString_02);
