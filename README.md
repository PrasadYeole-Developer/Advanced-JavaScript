# Advanced-JavaScript
A curated collection of core advanced JavaScript topics like closures, hoisting, scope, execution context, this, call/apply/bind, prototypal inheritance, and the event loop, all with code examples and use cases.

---

- this

  ![This](/Tutorial/this.png);

Value of 'this' in different places :

1. global scope - window

```js
console.log(this);
```

2. function scope - window

```js
function abcd() {
  console.log(this);
}
abcd();
```

3. method - object

```js
let obj = {
  name: function () {
    // This is method a function inside an object is known as method
    console.log(this);
  },
  age: 25,
  email: "abcd@gmail.com",
};
obj.name();
```

4. function inside method (es5) - window

```js
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
```

5. function inside method (es6) - object

```js
let obj3 = {
  sayName: function () {
    const child = () => {
      console.log(this); // Here if you used es6 function inside the method then the value of 'this' becomes object again due to it inherits it from it's parent
    };
    child();
  },
};
obj3.sayName();
```

6. inside constructor function - new blank object

```js
function add() {
  console.log(this);
}
const ans = new add();
```

7. inside event listener - that element on which event listener is present

```js
document.querySelector("button").addEventListener("click", function () {
  console.log(this);
});
```

- call, apply, bind

We use these 3 to change/decide what should be the value of 'this'

1. call

```js
let obj4 = { name: "Harsh" };
function abc() {
  console.log(this);
}
abc.call(obj4);
abc.call("Hero");

abc.call(obj4, 1, 2, 3);
```

2. apply

Only difference between call and apply is how you pass arguments
In call you can pass arguments directly, In apply you can pass only two values first is for 'this' and an array for parameters values exactly like this:

```js
let obj4 = { name: "Harsh" };
function abc(a, b, c) {
  console.log(this, a, b, c);
}

abc.apply(obj4, [1, 2, 3]);
```

3. bind

Same as call but bind does not call function, it returns a function which we can run later exactly like this:

```js
let obj4 = { name: "Harsh" };
function abc(a, b, c) {
  console.log(this, a, b, c);
}

const bindedFunction = abc.bind(obj4, 1, 2, 3);
bindedFunction();
```

- Prototypal Inheritance

![Proto](/Tutorial/prototypalInheritance.png)

![Proto](/Tutorial/proto2.png)

![Proto](/Tutorial/proto3.png)

- - Constructor Function

```js
function makeHuman(name, age) {
  this.username = name;
  this.age = age;
}

let humanOne = new makeHuman("Harsh", 22);
let humanTwo = new makeHuman("Harshita", 26);
console.log(humanOne);
console.log(humanTwo);
```

- - Prototype

To write reusable code like functions & To save memory we use prototypal inheritance exactly like this:

![Proto](/Tutorial/proto4.png)

Instead of this:

```js
function humanMaker(name, age) {
  this.name = name;
  this.age = age;
  this.printMyName = function () {
    console.log(this.name);
  };
}
const h1 = new humanMaker("Harsh", 22);
const h2 = new humanMaker("Harshita", 26);
h1.printMyName();
h2.printMyName();
```

We should write like this:

```js
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
```

- Closures

![Closure](/Tutorial/clousure1.png)

![Closure](/Tutorial/clousure2.png)

![Closure](/Tutorial/clousure3.png)

![Closure](/Tutorial/clousure4.png)

- Event Delegation

- - Event Bubbling

Event Bubbling basically is if you click on any element it will first find that is there any listener on the targetted element if not then it will go to it's parent container to check if it is having any event listener again if there is not any event listener it will go to check for it's parent now and will go for if there is any event listener

& Event Delegation is from one event listener you can do many tasks

![EventDelegation](/Tutorial/eventDelegation1.png)

![EventDelegation](/Tutorial/eventDelegation2.png)

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <div class="parent">
      <button id="play">Play</button>
      <button class="pause">Pause</button>
    </div>

    <script src="AdvJavaScript.js"></script>
  </body>
</html>
```

```js
let parent = document.querySelector(".parent");

parent.addEventListener("click", (event) => {
  if (event.target.id === "play") {
    console.log("play");
  } else if (event.target.classList.contains("pause")) {
    console.log("pause");
  }
});
```

- Higher Order Functions

![hofs1](/Tutorial/hofs1.png)

![hofs1](/Tutorial/hofs2.png)

Example of forEach is a function that takes another function as a parameter this makes forEach a Higher Order Function

A clousure can be HOF but a HOF can't always be clousure

- Error Handling (Try - Catch)

Firstly all you have to do is write all your code in try block and handle error inside catch block exactly like this :

```js
function divide(a, b) {
  try {
  } catch (err) {}
}
```

```js
function divide(a, b) {
  try {
    if (b == 0) {
      throw Error("Something went wrong!"); // if error occured then after this only catch block will run
    }
    console.log(a / b);
  } catch (err) {
    console.error(err);
  }
}

divide(12, 3);
divide(12, 0);
```

- Custom Events

So as there are events like click, dblclick, mouseover, input, etc.
We can also make custom events with custom name like this:

```js
const evt = new Event("Uncle");

let btn = document.querySelector(".pause");

btn.addEventListener("Uncle", () => {
  alert("Uncle Event");
});

btn.dispatchEvent(evt);
```

Steps:

1. Make Event
2. Attach event to some DOM element
3. Dispatch that event from that DOM element in which you attached the event
