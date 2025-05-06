
let sliderInput = document.querySelector(".slider");
let sliderOutput = document.querySelector(".slider__length");
let pwBtn = document.querySelector(".generate-password");

let pwOne = document.querySelector(".pw-1");
let pwTwo = document.querySelector(".pw-2");
let pwThree = document.querySelector(".pw-3");
let pwFour = document.querySelector(".pw-4");

let copyOne = document.querySelector(".copy-1");
let copyTwo = document.querySelector(".copy-2");
let copyThree = document.querySelector(".copy-3");
let copyFour = document.querySelector(".copy-4");

let chars = [
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
    'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
    'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
    '0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
    '!', '@', '#', '$', '%', '^', '&', '*', '(', ')',
    '_', '+', '[', ']', '{', '}', '|', ';', ':', ',',
    '.', '<', '>', '?', '/', '~', '`', '-', '=', '\\'
  ];

sliderInput.addEventListener("input", () => {
    sliderOutput.textContent = "Length: " + sliderInput.value; 
})

function getCharacters () {
    let pwOneText = "";
    let pwTwoText = "";
    let pwThreeText = "";
    let pwFourText = "";

    for (let i = 0; i < sliderInput.value; i++) {
        let randomIndexOne = Math.floor(Math.random() * chars.length);
        let randomIndexTwo = Math.floor(Math.random() * chars.length);
        let randomIndexThree = Math.floor(Math.random() * chars.length);
        let randomIndexFour = Math.floor(Math.random() * chars.length);

        pwOneText += chars[randomIndexOne];
        pwTwoText += chars[randomIndexTwo];
        pwThreeText += chars[randomIndexThree];
        pwFourText += chars[randomIndexFour];
    }

    pwOne.textContent = pwOneText; 
    pwTwo.textContent = pwTwoText; 
    pwThree.textContent = pwThreeText; 
    pwFour.textContent = pwFourText; 
    
}

pwBtn.addEventListener("click", () => {
    getCharacters();
});

copyOne.addEventListener("click", () => {
    navigator.clipboard.writeText(pwOne.textContent);
})

copyTwo.addEventListener("click", () => {
    navigator.clipboard.writeText(pwTwo.textContent);
})

copyThree.addEventListener("click", () => {
    navigator.clipboard.writeText(pwThree.textContent);
})

copyFour.addEventListener("click", () => {
    navigator.clipboard.writeText(pwFour.textContent);
})






