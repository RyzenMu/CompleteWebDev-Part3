const buttons = document.querySelectorAll('.drum')
function clickFunction(){
    const buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML  );
    console.log(this.innerHTML);
    
}
buttons.forEach((item) => {
    item.addEventListener('click', clickFunction);
    buttonAnimation(item.innerHTML);
})

function add(n1, n2) {
    return n1 + n2;
}

function mul(n1, n2) {
    return n1 * n2;
}

// higher order function
function calc(n1, n2, operator) {
    return operator(n1, n2);
}

console.log(calc(3, 4, add));
console.log(calc(3, 4, mul));


// creating objects using factory constructor functions
function BellBoy(name, age, hasWorkPermit, languages) {
    this.name = name;
    this.age = age;
    this.hasWorkPermit = hasWorkPermit;
    this.languages = languages;
    this.move = () => {
        console.log("I will move to other places");
    }
}
 
const bellBoy1 = new BellBoy("shane", 33, true, "english");
const bellBoy2 = new BellBoy("rock", 32, false, "french");

console.log(bellBoy1.age);
console.log(bellBoy2.languages);
bellBoy1.move();
bellBoy2.move();

// keypress
document.addEventListener('keypress', function(event){
    makeSound(event.key);
    buttonAnimation(event.key); 
});

function makeSound(key) {
    switch (key) {
        case "w":
            const sound1 = new Audio("sounds/crash.mp3")
            sound1.play();
            break;
        case "a":
            const sound2 = new Audio("sounds/kick-bass.mp3")
            sound2.play();
            break;
        case "s":
            const sound3 = new Audio("sounds/snare.mp3")
            sound3.play();
            break;
        case "d":
            const sound4 = new Audio("sounds/tom-1.mp3")
            sound4.play();
            break;
        case "j":
            const sound5 = new Audio("sounds/tom-2.mp3")
            sound5.play();
            break;
        case "k":
            const sound6 = new Audio("sounds/tom-3.mp3")
            sound6.play();
            break;
        case "l":
            const sound7 = new Audio("sounds/tom-4.mp3")
            sound7.play();
            break;
    
        default:
            break;
    }
}

// button Animations
function buttonAnimation(currentKey){
   const activeButton = document.querySelector("."+currentKey);
   activeButton.classList.add("pressed");
   setTimeout(function () {
    activeButton.classList.remove("pressed");
   }, 100);
}