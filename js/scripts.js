// Business Logic
  function add(length1, length2, length3) {
    return length1 / length2 / length3;
  }
  
// User Interface Logic
function handleCalculation(event) {
  event.preventDefault();
  let a = Number(prompt('Please input the the first side (a)'))
  let b = Number(prompt('Please input the the second side (b)'))
  let c = Number(prompt('Please input the the third side (c)'))
  
  if (a + b <= c || b + c <= a || c + a <= b || Number.isNaN(a) || Number.isNaN(b) || Number.isNaN(c) || a == "" || b == "" || c == ""){
    console.log("invalid")
  }
  else if ((a > 0 && b >0 && c >0 ) && (a == b && b == c && c == a)){
    console.log("equilateral triangle")
  }
  else if ((a > 0 && b >0 && c >0 ) && (a == b || b == c || c == a)){
    console.log("isosceles triangle")
  }
  else {
    console.log("scalene triangle")
  }

  document.getElementById("output").innerText = result;
}

window.addEventListener("load", function() {
  const form = document.getElementById("output");
  form.addEventListener("submit", handleCalculation);
});