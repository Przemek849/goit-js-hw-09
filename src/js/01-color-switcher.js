function getRandomHexColor() {  
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    }

const startButton = document.querySelector('[data-start]');

const stopButton = document.querySelector('[data-stop]');

let flag = true;

function colorChange () {
    if (flag) 
    {
        document.body.style.backgroundColor = getRandomHexColor();
        setTimeout(colorChange, 1000);
    }
    else return;
}

startButton.addEventListener("click", function() {
    this.disabled = true;
    stopButton.disabled = false;
    flag = true;
    colorChange();
});

stopButton.addEventListener("click", function() {
    this.disabled = true;
    startButton.disabled = false;
    flag = false;
});