
function play(){

let btn = document.getElementById("btn");
let output = document.getElementById("outputtext");

let number = Math.floor(Math.random()*100)+1;

let count = 0;

btn.addEventListener("click", function(){
    let input = document.getElementById("userInput").value;
    input = parseInt(input);
    if (input < 1 || input > 100){
        alert("Please enter a number between 1 - 100.")
    }else if (Number.isInteger(input) === false){
        alert("Please enter a Integer value")
    }else{
        if (input == number){
            output.innerHTML = "CONGRATULATIONS"
            document.getElementById("icons").setAttribute("src", "./assests/giphy.gif");
            const text = document.getElementById("title")
            text.innerHTML = `Number of guesses ${count}`
            const button = document.getElementById("btn");
            button.innerHTML = "Restart";
            button.addEventListener("click", () => {
                count = 0;
                const text = document.getElementById("title")
                text.innerHTML = "(1-100)"
                document.getElementById("icons").setAttribute("src","./assests/guess-the-number.png")
                button.innerHTML = "check"
                play();
            })
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

}
play();
























