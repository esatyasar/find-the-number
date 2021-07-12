
let btn = document.getElementById("btn");
let output = document.getElementById("outputtext");

let number = Math.floor(Math.random()*100)+1;

let count = 0;
let guessed_nums = [];

btn.addEventListener("click", function(){
    let input = document.getElementById("userInput").value;
    if (input < 1 || input > 100){
        alert("Please enter a number between 1 -100.")
    }else{
        if (input == number){
            output.innerHTML = "CONGRATULATIONS"
            document.getElementById("icons").setAttribute("src", "./assests/giphy.gif");
            const text = document.getElementById("title")
            text.innerHTML = `Number of guesses ${count}`
            }else if (input < number){
            output.innerHTML = "You guessed too low"
            document.getElementById("icons").setAttribute("src", "./assests/up.png");
            count +=1
            const text = document.getElementById("title")
            text.innerHTML = `Number of guesses ${count}`
        };
        if (input > number){
            output.innerHTML = "You guessed too high"
            const img = document.getElementById("icons")
            img.setAttribute("src","./assests/down.png")
            count +=1;
            const text = document.getElementById("title")
            text.innerHTML = `Number of guesses ${count}`
        }
    }    
});



























