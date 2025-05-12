console.log(this);

function abcd() {
  console.log(this);
}

let obj = {
  name: function () {
    // This is method a function inside an object is known as method
    console.log(this);
  },
  age: 25,
  email: "abcd@gmail.com",
};
obj.name();

let obj2 = {
  sayName: function () {
    console.log(this); // here value of 'this' is object
    console.log(this.age);
    function childfnc() {
      console.log(this); // here it becomes window and that is huge problem like you cannot access the object properties inside the this childfnc using 'this'
    }
    childfnc();
  },
  age: 25,
};
obj2.sayName();

let obj3 = {
  sayName: function () {
    const child = () => {
      console.log(this); // Here if you used es6 function inside the method then the value of 'this' becomes object again due to it inherits it from it's parent
    };
    child();
  },
};
obj3.sayName();

function add() {
  console.log(this);
}
const ans = new add();

// document.querySelector("button").addEventListener("click", function () {
//   console.log(this);
// });

let obj4 = { name: "Harsh" };
function abc(a, b, c) {
  console.log(this, a, b, c);
}
abc.call(obj4);
abc.call("Hero");

abc.call(obj4, 1, 2, 3);
abc.apply(obj4, [1, 2, 3]);

const bindedFunction = abc.bind(obj4, 1, 2, 3);
bindedFunction();

function makeHuman(name, age) {
  this.username = name;
  this.age = age;
}

let humanOne = new makeHuman("Harsh", 22);
let humanTwo = new makeHuman("Harshita", 26);
console.log(humanOne);
console.log(humanTwo);

// function humanMaker(name, age) {
//   this.name = name;
//   this.age = age;
//   this.printMyName = function () {
//     console.log(this.name);
//   };
// }
// const h1 = new humanMaker("Harsh", 22);
// const h2 = new humanMaker("Harshita", 26);
// h1.printMyName()
// h2.printMyName()

function humanMaker(name, age) {
  this.name = name;
  this.age = age;
}
humanMaker.prototype.printMyName = function () {
  console.log(this.name);
};
const h1 = new humanMaker("Harsh", 22);
const h2 = new humanMaker("Harshita", 26);

h1.printMyName();
h2.printMyName();

// let parent = document.querySelector(".parent");

// parent.addEventListener("click", (event) => {
//   if (event.target.id === "play") {
//     console.log("play");
//   } else if (event.target.classList.contains("pause")) {
//     console.log("pause");
//   }
// });

// function divide(a, b) {
//   try {
//   } catch (err) {}
// }

function divide(a, b) {
  try {
    if (b == 0) {
      throw Error("Something went wrong!"); // if error occured then after this only catch block will run
    }
    console.log(a / b);
  } catch (err) {
    console.log(err);
  }
}

divide(12, 3);
divide(12, 0);

const evt = new Event("Uncle");

let btn = document.querySelector(".pause");

btn.addEventListener("Uncle", () => {
  alert("Uncle Event");
});

btn.dispatchEvent(evt);
