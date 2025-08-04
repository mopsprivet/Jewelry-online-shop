let quantity1 = parseInt(document.querySelector("#quantity1").textContent); 
let quantity2 = parseInt(document.querySelector("#quantity2").textContent); 
let quantity3 = parseInt(document.querySelector("#quantity3").textContent); 

const price1 = parseFloat(document.querySelector("#price1").textContent); 
const price2 = parseFloat(document.querySelector("#price2").textContent); 
const price3 = parseFloat(document.querySelector("#price3").textContent); 

let total = price1+price2+price3;
document.querySelector("#total-price").innerHTML = total + "$";


//1
document.querySelector("#add1").addEventListener("click", function() {
  quantity1++; 
  total += price1; 
  document.querySelector("#quantity1").innerHTML = quantity1; 
  document.querySelector("#total-price").innerHTML = total + "$";
}); 

document.querySelector("#remove1").addEventListener("click", function() {
  if (quantity1 > 0) {
  quantity1--; 
  total -= price1; 
  document.querySelector("#quantity1").innerHTML = quantity1; 
  document.querySelector("#total-price").innerHTML = total + "$";
  }
}); 

//2
document.querySelector("#add2").addEventListener("click", function() {
  quantity2++;  
  total += price2; 
  document.querySelector("#quantity2").innerHTML = quantity2; 
  document.querySelector("#total-price").innerHTML = total + "$";
}); 

document.querySelector("#remove2").addEventListener("click", function() {
  if (quantity2 > 0) { 
  quantity2--; 
  total -= price2; 
  document.querySelector("#quantity2").innerHTML = quantity2; 
  document.querySelector("#total-price").innerHTML = total + "$";
  } 
}); 

//3
document.querySelector("#add3").addEventListener("click", function() {
  quantity3++; 
  total += price3; 
  document.querySelector("#quantity3").innerHTML = quantity3; 
  document.querySelector("#total-price").innerHTML = total + "$"; 
}); 

document.querySelector("#remove3").addEventListener("click", function() {
  if (quantity3 > 0) {
  quantity3--; 
  total -= price3; 
  document.querySelector("#quantity3").innerHTML = quantity3; 
  document.querySelector("#total-price").innerHTML = total + "$"; 
  }
}); 
