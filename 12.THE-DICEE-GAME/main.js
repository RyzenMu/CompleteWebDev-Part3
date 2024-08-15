const btn = document.querySelector('button');
const resultDiv = document.createElement('div'); // Create the result div outside the click handler
const result1 = document.querySelector('.result1');
const result2 = document.querySelector('.result2');


function random(){

    return Math.floor(Math.random()*6) + 1;
}

btn.addEventListener("click", function(){
    let randomNumber1 = random();
    document.querySelector('.img-1').setAttribute("src", `dice/dice-${randomNumber1}.png`);
    let randomNumber2 = random();
    document.querySelector('.img-2').setAttribute("src", `dice/dice-${randomNumber2}.png`);


    resultDiv.textContent = "";

    if (randomNumber1 > randomNumber2) {
      resultDiv.textContent = "PLAYER 1 WON";
      result1.appendChild(resultDiv);
    } else if (randomNumber1 < randomNumber2) {
      resultDiv.textContent = "PLAYER 2 WON";
      result2.appendChild(resultDiv);
    } else {
      resultDiv.textContent = "It's a tie!";
    }
  
});



