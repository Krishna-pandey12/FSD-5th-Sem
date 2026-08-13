let principalInput = document.getElementById("principal");
let rateInput = document.getElementById("rate");
let timeInput = document.getElementById("time");
let SI=0;
document.getElementById("submitButton").onclick=function(){
  let principal =Number(principalInput.value);
  let rate=Number(rateInput.value);
  let time =Number(timeInput.value);
  SI=(principal*rate*time)/100;
  
  console.log("Simple Interest =", SI);
  result.innerHTML = "Simple Interest = ₹" + SI;

};
document.getElementById("compoundButton").onclick = function () {
    let principal = Number(principalInput.value);
    let rate = Number(rateInput.value);
    let time = Number(timeInput.value);

    let CI = principal * Math.pow((1 + rate / 100), time) - principal;
    console.log("Compound Interest =", CI);

    result.innerHTML = "Compound Interest = ₹" + CI.toFixed(2);
};