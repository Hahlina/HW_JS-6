`use strict`;
const input1 = document.querySelector(".input1");
const input2 = document.querySelector(".input2");
const input3 = document.querySelector(".input3");
const submit1 = document.querySelector(".submit1");
const submit2 = document.querySelector(".submit2");
const result1 = document.querySelector(".resultTask1");
const result2 = document.querySelector(".resultTask2");

function clearInput(input1, input2, input3) {
  input1.value = "";
  input2.value = "";
  input3.value = "";
}

//!task1
function checkSpam(text) {
  let loverText = text.toLowerCase();
  if (loverText.includes("sale") && !loverText.includes("vip")) {
    return (result1.textContent = "The text has spam word: sale");
  } else if (loverText.includes("vip") && !loverText.includes("sale")) {
    return (result1.textContent = "The text has spam word: vip");
  } else if (loverText.includes("sale") && loverText.includes("vip")) {
    return (result1.textContent = "The text has spam words vip and sale");
  } else if (!loverText.includes("sale") && !loverText.includes("vip")) {
    return (result1.textContent = "The text dont has spam words");
  }
}

submit1.addEventListener("click", () => {
  let enterText = input1.value;
  if (enterText) {
    checkSpam(enterText);
  } else {
    alert("Enter text");
  }
  clearInput(input1, input2, input3);
});

//!task2
function checkLength(stroke, sumbol) {
  let lengthStroke = stroke.length;
  if (lengthStroke <= sumbol) {
    result2.textContent = stroke;
  } else if (lengthStroke > sumbol) {
    let slise = stroke.slice(0, sumbol);
    result2.textContent = `${slise}...`;
  }
}
submit2.addEventListener("click", () => {
  let enterStroke = input2.value;
  let numberSymbol = +input3.value;
  if (enterStroke && numberSymbol) {
    checkLength(enterStroke, numberSymbol);
  } else if (!enterStroke || !numberSymbol) {
    alert("Enter corect values in both fields");
  }
  clearInput(input1, input2, input3);
});
