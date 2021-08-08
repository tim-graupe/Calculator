const operants = document.querySelectorAll('.operant')
const nums = document.querySelectorAll('.nums')
const buttons = document.querySelectorAll('.buttons')
const equals = document.getElementById('equals')
const db0 = new Audio('/wtf_boom.mp3')
const decimal = document.getElementById('decimal')
const plusMinus = document.getElementById('plusMinus')
document.getElementById("display").style.cssText = "height: 25px; background-color:black; font-size: 15px; color:white; text-align: right;   font-family: Candara;" 


let main = { 
firstNumber : "",
secondNumber : "",
selectedOperator: "",
operatorSelected : false,
decimalSelected: false,
}

nums.forEach((num) => {
  num.addEventListener('click', () => {
    addNumber(num.textContent)
  })
});

operants.forEach((operant) => {
  operant.addEventListener('click', () => {
    clearScreen();
    main.selectedOperator = operant.textContent;
    main.operatorSelected = true;
  })
})




const addNumber = (number) => {
  if (!main.operatorSelected)  {
    display.textContent += number;
    main.firstNumber = display.textContent;
  } else if (main.operatorSelected) {

  display.textContent += number;
  main.secondNumber = display.textContent;
}
}


const clearScreen = () => {
  main.firstNumber = display.textContent;
  display.textContent = "";
}


const clearNumbers = () => {
  main.firstNumber = "";
  main.secondNumber = "";
  main.completedFirstNumber = "";
  main.completedSecondNumber = "";  
  main.operatorSelected = false;
  display.textContent = ""
  
};


const positiveNegative = () => {
  if (display.textContent > 0) {
    display.textContent = display.textContent - (display.textContent * 2)
  } else {
    display.textContent = Math.abs(display.textContent)
  }
}

const deleteLast = () => {
  display.textContent = display.textContent.slice(0, -1)
}

clear.addEventListener('click', clearNumbers)

const add = (a, b) => {
  display.textContent = ((a*1) + (b*1));
}

const subtract = (a, b) => {
  display.textContent = a - b;
}

const  multiplied = (a, b) => {
  display.textContent = a * b
}

const division = (a, b) => {
  display.textContent = a / b;
}

const squared = (a) => {
  display.textContent = a * a;
}

const squareRoot = (a) => {
  display.textContent = Math.sqrt(a);
}

const operate = (a, b, c) => {
  a = main.firstNumber;
  b = main.secondNumber;
  c = main.selectedOperator;
  switch (c) {
    case ("+"):
      add(a, b)
      break;
    case ("-"):
      subtract(a, b);
      break;
    case ("*"):
      multiplied(a, b)
      break;
    case ("x²"):
    squared(a);
    break;
    case ("√"):
      squareRoot(a);
      break;
    case ("/"):
      if (b === "0") {
        db0.play()
        alert("You divided by zero!!!")
        clearNumbers()
      } else {
        return division(a, b)
      }
      break;
    default:
      return null;
     
  }
}


equals.addEventListener('click', operate)
backspace.addEventListener('click', deleteLast)
plusMinus.addEventListener('click', positiveNegative)
//med priority: keyboard integration
//low priority: fancy up the UI