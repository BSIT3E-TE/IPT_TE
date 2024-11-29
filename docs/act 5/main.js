function calculateSquareAndCube() {
  let number = parseFloat(document.getElementById("numberInput").value);
  let square = number * number;
  let cube = number * number * number;

  document.getElementById("result").innerHTML = 
    number + " x " + number + " = " + square + "<br>" +
    number + " x " + number + " x " + number + " = " + cube;
}


function calculateAverage() {
  let num1 = parseFloat(document.getElementById("num1").value);
  let num2 = parseFloat(document.getElementById("num2").value);
  let num3 = parseFloat(document.getElementById("num3").value);
  let num4 = parseFloat(document.getElementById("num4").value);
  let num5 = parseFloat(document.getElementById("num5").value);

  let average = (num1 + num2 + num3 + num4 + num5) / 5;

  document.getElementById("averageResult").innerHTML = 
    "The average is: " + average;
}