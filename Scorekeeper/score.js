/* MY INITIAL WAY!!!!!!!!!!!!!! */
/* var p1Button = document.querySelector("#p1");
var p2Button = document.getElementById("p2");
var p1Score = 0;
var p2Score = 0;
var span1 = document.querySelector("#player1");
var span2 = document.querySelector("#player2");
var reset = document.querySelector("#reset");

p1Button.addEventListener("click", p1func);
p2Button.addEventListener("click", function()
{
    console.log("Clicked P2 button!");
    if(p2Score < 5)
    {
        p2Score++;
        if (p2Score == 5)
        {
            span2.style.color = "green"
            console.log("Player 2 won!");
        }
    }
    span2.textContent = p2Score;
});

function p1func()
{
    console.log("Clicked P1 button!");
    if(p1Score < 5)
    {
        p1Score++;
        if (p1Score == 5) {
            span1.style.color = "green";
            console.log("Player 1 won!");
        }
    }
    span1.textContent = p1Score;
}

reset.addEventListener("click", RES);

function RES()
{
    console.log("You reset the game!");
    span1.textContent = 0;
    span2.textContent = 0;
    p1Score = 0;
    p2Score = 0;
    span1.style.color = "black";
    span2.style.color = "black";
} */

/* COLTS JS WAY - MAYBE MORE ADVANCED */

var p1Button = document.querySelector("#p1");
var p2Button = document.getElementById("p2");
var p1Score = 0;
var p2Score = 0;
var span1 = document.querySelector("#player1");
var span2 = document.querySelector("#player2");
var reset = document.getElementById("reset");
var gameOver = false;
var winningScore = 5;
var number = document.querySelector("#nr");
var numInput = document.querySelector("input");

/* Changing score */
numInput.addEventListener("change", function()
{
    number.textContent = numInput.value;
    winningScore = Number(numInput.value);
    res();
});


p1Button.addEventListener("click", function()
{
    console.log("Clicked P1 button!");
    if(!gameOver)
    {
        p1Score++;
        if (p1Score === winningScore)
        {
            alert("Player 1 won!");
            span1.classList.add("winner");
            gameOver = true;
            /* span1.style.color = "green"
            console.log("Player 1 won!"); */
        }
        span1.textContent = p1Score;
    }
});

p2Button.addEventListener("click", function()
{
    console.log("Clicked P2 button!");
    if(!gameOver)
    {
        p2Score++;
        if (p2Score === winningScore)
        {
            alert("Player 2 won!");
            span2.classList.add("winner");
            gameOver = true;
           /*  span2.style.color = "green"
            console.log("Player 2 won!"); */
        } 
        span2.textContent = p2Score;
    }
});

reset.addEventListener("click", function ()
{
   res();
})

function res()
{
    span1.textContent = p1Score = 0;
    span2.textContent = p2Score = 0;
    console.log("You reset the game!");
    span1.classList.remove("winner");
    span2.classList.remove("winner");
    gameOver = false;
}

var lis = document.querySelectorAll("li");

for(var i = 0; i < lis.length; i++)
{
    lis[i].addEventListener("mouseover", function()
    {
        this.classList.add("selected");
    });
    lis[i].addEventListener("mouseout", function()
    {
        this.classList.remove("selected");
    });
    lis[i].addEventListener("click", function()
    {
        this.classList.toggle("cross");
    }
    )
}