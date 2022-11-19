
//conditiond 'if'

let yourName = 'Alexander';
console.log('Hello, ' + yourName);

if (yourName.length > 6) {
    console.log('You have such a long name!');
}

//condition 'if...else'

let yourName1 = 'Alex';
console.log('Hello, ' + yourName1);

if (yourName1.length > 6) {
    console.log('You have such a long name!');
} else {
    console.log('Your name isn`t long.');

}


//condition 'if, else if'

let lemonChicken = false;
let beefWithBean = true;
let sweetSourPork = true;

if (lemonChicken) {
    console.log('I will take cheken with lemon!');
} else if (beefWithBean) {
    console.log('I`d like this one.');
} else if (sweetSourPork) {
    console.log('Ok, I will take this.');
} else {
    console.log('So, only eggs left.');
}



//Task

let myName = 'Renat';
let friendName = 'Ruslan';
let otherFriend = 'Andrew';

// if ('Bob' === myName) {
//     console.log('Hello to me!');
// } else if ('Alex' === friendName) {
//     console.log('Hello Ruslan!')
// } else if ('Andrew' === otherFriend) {
//     console.log('Hello Andrew!')
// } else {
//     console.log('Hello stranger!')
// }


if ('Andreww' === friendName === otherFriend) {
    console.log('Hello friends!')
} else {
    console.log('Hello stranger!')
}


// while Loop

let sheepCounted = 0;

while (sheepCounted < 10) {
    console.log('Counted sheep: ' + sheepCounted + '!');
    sheepCounted++;
}
console.log("sheepCounted");


//for Loop

for (let sheepCounted1 = 0; sheepCounted1 < 10; sheepCounted1++) {
    console.log("Counted sheep: " + sheepCounted1 + "!");
}
  console.log("Sleeping");

  //How many times I wanna say 'You are awesome'

  let timesToSayHello = 3;
      for (let i = 0; i < timesToSayHello; i++) {
        console.log("You are awesome!");
}

//for Loop, array and string

let animals = ['Lion', 'Flamingo', 'White bear', 'Boa'];
for (let i = 0; i < animals.length; i++) {
    console.log('In this zoo are ' + animals[i] + '.');
}



// Task three to the third power

let number3 = 3;

while (number3 < 1000) {
    number3 *= 3;
    console.log(number3);
}



/*Homework
=============
*/

let arr = ["Hi", "Hello", "Bonjour", "Hola"];

for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i] + " - good word";

  console.log(arr[i]);
}


//Task1
let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
let randomString = '';

while (randomString.length < 6) {
    randomString += alphabet[Math.floor(Math.random() * alphabet.length)];
    
}
console.log(randomString);


//Task2

let input = "javascript is awesome";
let output = "";

for (let i = 0; i < input.length; i++) {
    if (input[i] === 'a') {
        output += 4;
    } else if (input[i] === 'e') {
        output += 3;
    } else if (input[i] === "i") {
        output += 1;
    } else if (input[i] === 'o') {
        output += 0;
    } else {
        output += input[i];
    }
 
}
console.log(output);
