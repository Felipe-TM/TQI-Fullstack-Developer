var currentNumberWrapper = document.getElementsByTagName('span');
var currentNumber = 0;

function increment() {
    
    if (currentNumber >= 0)
        currentNumberWrapper[0].style.color = "green";

    
    if (currentNumber == -1)
        currentNumberWrapper[0].style.color = "white";

    currentNumber += 1;
    currentNumberWrapper[0].innerHTML = currentNumber;

}

function decrement() {

    if (currentNumber <= 0)
        currentNumberWrapper[0].style.color = "red";

    
    if (currentNumber == 1)
        currentNumberWrapper[0].style.color = "white";

    currentNumber -= 1;
    currentNumberWrapper[0].innerHTML = currentNumber;
}
