function logName(name) {
  console.log("My name is Jos");
}

// anonymous function là function ko có tên => ko có bị hoisting
const sum = (a, b) => {
  // console.log("yes doing");
  return a + b;
};

let total = sum(3, 6);
console.log(total);

const getTitle = () => {
  console.log("Welcome to JavaScript");
};

getTitle();

//IIFE function => immediately invoke function execution
// Là khi mà chương trình được thực thi thì function sẽ được gọi lập tức
(function () {
  console.log("Run function do not to call");
})();

//Scope
let myJob = "Gamer";
function logMyJob() {
  let myJob2 = myJob;
  console.log(myJob2);
}

logMyJob();

// Closure
// Function con có thể truy xuất scope của function cha
// function sayHello() {
//   // parent function
//   let message = "Hi JavaScript";
//   function sayHi() {
//     // child function or inner function
//     console.log(message);
//     alert(message);
//   }
//   return sayHi;
// }

// let hello = sayHello();
// hello();
function sayHello(message) {
  return (sayYourName = (name) => {
    console.log(`${message} and ${name}`);
  });
}

let hello = sayHello("Welcome to JavaScript class");
hello(" Learn Closure");

// Truy xuất biến trong scope của function
function anotherFunction() {
  let message = "Love you more";
  // getMe = () => {
  //   console.log(message);
  // };
  // return getMe();
  function getMe() {
    console.log(message);
  }
  return getMe();
}

let sayLoveYou = anotherFunction();
