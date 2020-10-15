/*var firstName = prompt("Hi! What's your first name?");
var lastName = prompt("Cool! What is your last name?");
var age = prompt("Sweet. How old are you?");
alert("Okay, so your name should be " + firstName + " " + lastName);
console.log("Hehe, you're " + age + " years old!"); */

////////////

/* const years = prompt("How old are you?");

const daysInYear = '365';

// alert(years + " years is roughly " + (years * daysInYear) + " days"); */

//////////////////
/*
var age = prompt("How old are you?");

if(age < 18)
{
    alert("Sorry, you are too young to enter the venue!");
}
else if(age > 18 && age < 21 ) //alternative - else if(age < 21) because second code will only run when first is false!
{
    alert("You can enter but can't drink!");
}
else
{
    alert("Have fun! :D");
}
///////////////////
*/

/*var age = Number(prompt("How old are you?"));
    while(isNaN(age))
    {
        age = Number(prompt("How old are you?"));  
    }

if (age < 0)
{
    alert("Error! Age can't be negative!");
}

else if (age == 21)
{
    alert("Happy birthday!");
}
else if (age % 2 == "1")
{
    alert(" your age is odd!");
}
else if((Math.sqrt(age) % 2) == 0)
{
    alert("Your age is a perfect square!");
} */

///////////////////

// var number = Number(prompt("Guess a number :D")); 
//     while(isNaN(number))
//     {
//         number = Number(prompt("Guess a number :D")); 
//     }
// var rightNumber = 7;

// if(number < rightNumber)
// {
//     alert("Too low retard!");
// }

// else if (number == rightNumber) {
//     alert("WoW, you are correct smartass");
// }
// else
// {
//     alert("Too high!");
// }

// ////////////7

// var str = "Rix on lahe";

// var count = 0;

// while(count < str.length)
// {
//     console.log(str[count]);
//     count++;
// }

////////////////////////////

// Checks if user's input contains "yes"
// var answer = prompt("Are we there yet?");

// while (answer.indexOf("yes") === -1)
// {
//     var answer = prompt("Are we there yet?");
// }

// alert("YAY, we made it!");

///////////////////LOOPS /////////

// console.log("NUMBERS BETWEEN -10 and 19!!!");
// for(var i = -10; i<19; i++)
// {
//     console.log(i);
// }

// console.log("Even numbers between 10 and 40");
// for(var i = 10; i<40;i++)
// {
//     if(i % 2 === 0)
//     {
//         console.log(i);
//     }
// }

// console.log("Odd numbers between 300 and 333");
// for(var i =300; i<333; i++)
// {
//     if(i % 2 !=0)
//     {
//         console.log(i);
//     }
// }

// console.log("all numbers between 5 and 50 divisible by 5 and 3")
// for(var i = 5; i<50; i++)
// {
//     if(i % 5 == 0 && i % 3 == 0)
//     {
//         console.log(i);
//     }
// }

///////////////FUNCTIONS

// var nimi = "Risto";
// function greet(name) {
//     console.log("Hi, " + name);
// }
// greet(nimi);

// function isEven(num)
// {
//     if (num % 2 === 0)
//     {
//         return true;
//     }
//     else{
//         return false
//     }
// }
// console.log(isEven(22));     
/////array test            str.push("audi");    str.pop();    str.indexOf("audi"); str.slice(1, 3) [kopeerib str array 1-3 indexid]
function kysi(num, nums) {
    if (nums.indexOf(num) == -1) {
        alert("Sellist numbrit ple, aga on olemas " + nums);
    } else {
        alert("On olemas");
    }
}

var numbrid = [11, 22, 33, 44, 55];

var katse = Number(prompt("Kontrolli, kas massiivis on see number!"));

kysi(katse, numbrid);
