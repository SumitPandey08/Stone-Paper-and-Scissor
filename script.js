function getInputValue() {
    // Get the input element
    var inputElement = document.getElementById('myInput');
    
    // Get the value of the input element
    var inputValue = inputElement.value;
    
    // Display the value
    document.getElementById('display').innerText = "You entered: " + inputValue + '   computer entered  ' + computerChoice;
}

let allInput = ['stone' , 'paper' , 'scissor']
let computerChoice = allInput[Math.floor(Math.random() * allInput.length)];
let gamePlay = (allInput) => {
    let userChoice = document.getElementById('myInput').value.toLowerCase();
    if(userChoice === computerChoice){
        document.getElementById('result').innerText = "It's a tie!";
    }
else if (userChoice==='stone' && computerChoice==='paper' || userChoice==='paper' && computerChoice==="scissor" || userChoice === 'scissor' && computerChoice==='stone'){
    document.getElementById('result').innerText = "You Lose ! "
}
else {
    document.getElementById('result').innerText = "You Win !"
}
    


}    
 