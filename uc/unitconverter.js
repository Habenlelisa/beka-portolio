let selected1 = document.getElementById("units1");
let selected2 = document.getElementById("units2");
let justcalculated = true;
const result = document.getElementById("answer");
const result2 = document.getElementById("answer2");
function addval(added) {
  if (justcalculated) {
    result.innerHTML = "";
    justcalculated = false;
  }
  result.innerHTML += added;
  result.innerHTML = eval(result.innerHTML);
  if (selected1.value == "c" && selected2.value == "f") {
    result2.innerHTML = result.innerHTML * 1.8 + 32;
  } else if (selected1.value == "f" && selected2.value == "c") {
    result2.innerHTML = (result.innerHTML - 32) / 1.8;
  } else if (selected1.value == "c" && selected2.value == "k") {
    result2.innerHTML = result.innerHTML + 273;
  } else if (selected1.value == "k" && selected2.value == "c") {
    result2.innerHTML = result.innerHTML - 273;
  } else if (selected1.value == "f" && selected2.value == "k") {
    result2.innerHTML = (result.innerHTML - 32) / 1.8 + 273;
  } else if (selected1.value == "k" && selected2.value == "f") {
    result2.innerHTML = (result.innerHTML - 273) * 1.8 + 32;
  } else if (selected1.value == selected2.value) {
    result2.innerHTML = result.innerHTML;
  } else {
    result2.innerHTML =
      (selected1.value / selected2.value) * Number(result.innerText);
  }
}
function remove() {
  result.innerHTML = result.innerHTML.slice(0, -1);
  result.innerHTML = eval(result.innerHTML);
  result2.innerHTML =
    (selected1.value / selected2.value) * Number(result.innerText);
}
function cr() {
  result.innerHTML = "";
  result2.innerHTML = "";
}
