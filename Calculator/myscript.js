//addition
  
function addedBy(){
    num1= document.getElementById("firstNumber").value;
    num2 = document.getElementById("secondNumber").value;
    document.getElementById("result").innerHTML = parseInt(num1) + parseInt(num2);
}
function subtractedBy(){
    var
    num1 = document.getElementById("firstNumber").value;
    num2 = document.getElementById("secondNumber").value;
    document.getElementById("result").innerHTML =  parseInt(num1) - parseInt(num2);
}

function multiplyBy(){
    num1 = document.getElementById("firstNumber").value;
    num2 = document.getElementById("secondNumber").value;
    document.getElementById("result").innerHTML =  parseInt(num1) * parseInt(num2);
}

function dividedBy(){
    num1 = document.getElementById("firstNumber").value;
    num2 = document.getElementById("secondNumber").value;
    document.getElementById("result").innerHTML = parseInt(num1) / parseInt(num2);
}