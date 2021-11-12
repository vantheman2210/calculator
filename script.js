
// Function that adds numbers
function add (a, b) { 
  let sumAdd = a + b; 
  return sumAdd; 
  
} 
// FUnction that subtracts numbers
function subtract (a, b) { 
  let sumSubtract = a - b; 
  return sumSubtract;
} 
//Function that multiplies numbers
function multiply (a, b) { 
  let sumMultiply = a * b; 
  return sumMultiply;
} 
//Function that divides numbers
function divide (a, b) {  
  let sumDivide = a / b; 

  if (b === 0) { 
    return "The Joker";
  } else { 
    return sumDivide;
  }
  
} 
// Function that operates all other functions, and provides basic math operator (-, +, *, /)
function operate (operator, a, b) { 
  if (operator === "+") { 
    return Math.round(add(a,b) * 1000) / 1000;
  } else if (operator === "-") { 
    return Math.round(subtract(a,b) * 1000) / 1000;;
  } else if (operator === "*") { 
     return Math.round(multiply(a,b) * 1000) / 1000;; 
  } else if (operator === "/") { 
     return Math.round(divide(a,b) * 1000) / 1000;;
  } else { 
    return "0";
  }

}   


//Function that makes calculator work, and display results 
function display () {   
  let displayValue = null;   
  let displayValue2 = null; 
  let operatorValue = "";
  
  let display = document.getElementById("display");   
  let display1 = document.getElementById("display1"); 
  
  let dot = document.getElementById("dot");  
  dot.addEventListener("click", () => {  
    let display1 = display.innerText; 
    if (!display1.includes(".")) {  
    display.insertAdjacentText("beforeend", ".");
  } else {return false;}}) 

  let minus = document.getElementById("minus"); 
  minus.addEventListener("click", () => { 
    let display2 = display.innerText;
    if (!display2.includes("-")) { 
      display.insertAdjacentText("afterbegin", "-")
    } else if (display2.includes("-")) {  
      display.innerHTML = "";
      display.insertAdjacentText("afterbegin", display2.substring(1))  
    }
  })
  
  let deleteBtn = document.getElementById("backspace");  
  deleteBtn.addEventListener("click", () => {  
    let display3 = display.innerText; 
    display.innerHTML = "";
    display.insertAdjacentText("afterbegin", display3.slice(0, -1)) 
    if (display.innerText === "") { 
      display.innerText = 0;
    }
  })

  let clear = document.getElementById("clear"); 
  clear.addEventListener("click", () => { 
     displayValue = null;   
     displayValue2 = null;
     operatorValue = ""; 
     display.innerHTML = "0";  
     display1.innerHTML= "";   
  }) 


  let zero = document.getElementById("zero"); 
  zero.addEventListener("click", () => {   
    if (display.innerText === "0") { 
      display.innerText = "";
    } 
    display.insertAdjacentHTML('beforeend', 0);   
  }) 

  let one = document.getElementById("one"); 
  one.addEventListener("click", () => {   
    if (display.innerText === "0") { 
      display.innerText = "";
    } 
    display.insertAdjacentHTML('beforeend', 1); 
     
  })   

  let two = document.getElementById("two"); 
  two.addEventListener("click", () => {   
    if (display.innerText === "0") { 
      display.innerText = "";
    } 
    display.insertAdjacentHTML('beforeend', 2); 
     
  })  

  let three = document.getElementById("three"); 
  three.addEventListener("click", () => {   
    if (display.innerText === "0") { 
      display.innerText = "";
    } 
    display.insertAdjacentHTML('beforeend', 3); 
     
  })   

  let four = document.getElementById("four"); 
  four.addEventListener("click", () => {   
    if (display.innerText === "0") { 
      display.innerText = "";
    } 
    display.insertAdjacentHTML('beforeend', 4); 
     
  })   

  let five = document.getElementById("five"); 
  five.addEventListener("click", () => {   
    if (display.innerText === "0") { 
      display.innerText = "";
    } 
    display.insertAdjacentHTML('beforeend', 5); 
     
  })   

  let six = document.getElementById("six"); 
  six.addEventListener("click", () => {   
    if (display.innerText === "0") { 
      display.innerText = "";
    } 
    display.insertAdjacentHTML('beforeend', 6); 
     
  })   

  let seven = document.getElementById("seven"); 
  seven.addEventListener("click", () => {   
    if (display.innerText === "0") { 
      display.innerText = "";
    } 
    display.insertAdjacentHTML('beforeend', 7); 
     
  })   

  let eight = document.getElementById("eight"); 
  eight.addEventListener("click", () => {   
    if (display.innerText === "0") { 
      display.innerText = "";
    } 
    display.insertAdjacentHTML('beforeend', 8); 
     
  })   

  let nine = document.getElementById("nine"); 
  nine.addEventListener("click", () => {   
    if (display.innerText === "0") { 
      display.innerText = "";
    } 
    display.insertAdjacentHTML('beforeend', 9); 
     
  })  


  let add = document.getElementById("add"); 
  add.addEventListener("click", ()=> {     
    displayValue2 = Number(display.innerHTML); 
    
    if (operatorValue != "" && displayValue != null && displayValue2 != null) {   
      
      display.innerHTML = "";
      display.innerHTML = operate(operatorValue, displayValue, displayValue2);   
    }; 
    
    operatorValue = document.getElementById("add").value;  
    displayValue = Number(display.innerHTML); 
    
    display.innerText = ""; 
    
   
    let display1 = document.getElementById("display1") 
    display1.innerText = displayValue + operatorValue;
  })  

  let subtract = document.getElementById("subtract"); 
  subtract.addEventListener("click", ()=> {    

    displayValue2 = Number(display.innerText);
    if (operatorValue != "" && displayValue != null && displayValue2 != null) {  
      
      display.innerHTML = "";
      display.innerHTML = operate(operatorValue, displayValue, displayValue2);  
    } 
    
    operatorValue = document.getElementById("subtract").value;  
    displayValue = Number(display.innerText);  
    display.innerHTML = ""; 

    let display1 = document.getElementById("display1") 
  display1.innerText = displayValue + operatorValue;
  })  

  let multiply = document.getElementById("multiply"); 
  multiply.addEventListener("click", ()=> {  
    
    displayValue2 = Number(display.innerText);
    if (operatorValue != "" && displayValue != null && displayValue2 != null) {   
      display.innerHTML = ""; 
      display.innerHTML = operate(operatorValue, displayValue, displayValue2); 
    }   

    operatorValue = document.getElementById("multiply").value;  
    displayValue = Number(display.innerHTML);    
    display.innerHTML = "";   

    let display1 = document.getElementById("display1") 
  display1.innerText = displayValue + operatorValue;
  })  

  let divide = document.getElementById("divide"); 
  divide.addEventListener("click", ()=> {   
    
    displayValue2 = Number(display.innerText);
    if (operatorValue != "" && displayValue != null && displayValue2 != null) {   
      display.innerHTML = ""; 
      display.innerHTML = operate(operatorValue, displayValue, displayValue2); 
      
    } 
    
    operatorValue = document.getElementById("divide").value;  
    displayValue = Number(display.innerHTML);     
    display.innerHTML = "";  

    let display1 = document.getElementById("display1") 
  display1.innerText = displayValue + operatorValue;
  }) 

  let equal = document.getElementById("equal"); 
  equal.addEventListener("click", () => {    
    
    displayValue2 = Number(display.innerText); 
    let display1 = document.getElementById("display1") 
    display1.innerText = displayValue + operatorValue + displayValue2 + "=";
    display.innerText = ""; 
    display.innerHTML = operate(operatorValue, displayValue, displayValue2);  
    displayValue = null;   
    displayValue2 = null; 
    operatorValue = "";  
  })
}
 
display();