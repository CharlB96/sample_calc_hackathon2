let display = document.getElementById("display");
let numbers = []; 

function addToDisplay(value) {
    if (display.value === "0") {
        display.value = value;
        numbers = [value]; 
    } else {
        display.value += value;
        numbers.push(value); 
    }
    
    console.log(numbers)
}


