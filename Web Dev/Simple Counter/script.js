let num = document.getElementById("number");
let plus = document.getElementById("btplus");
let minus = document.getElementById("btminus");
let res = document.getElementById("btreset");
let jumpbtn = document.getElementById("btj");
let jvalform = document.getElementById("jval");
let a;
var jump = 1;
if (jvalform.value === "") jumpbtn.disabled = true;

jvalform.addEventListener("change", stateHandle);

function stateHandle() {
  console.log("hello");
  if (jvalform.value === "") {
    console.log("hello1");
    jumpbtn.disabled = true; //button remains disabled
  } else {
    console.log("hello2");
    jumpbtn.disabled = false; //button is enabled
  }
}

jumpbtn.addEventListener("click", valupdate);
plus.addEventListener("click", increase);
minus.addEventListener("click", decrease);
res.addEventListener("click", makezero);

function increase() {
  a = Number(num.textContent);
  a = a + jump;
  num.innerHTML = `<strong>${a}</strong>`;
}

function decrease() {
  a = Number(num.textContent);
  a = a - jump;
  num.innerHTML = `<strong>${a}</strong>`;
}

function makezero() {
  num.innerHTML = `<strong>0</strong>`;
}

function valupdate() {
  if (jvalform.value.length !== 0) {
    jump = Number(jvalform.value);
    jvalform.value = "";
    jumpbtn.disabled = true;
  }
}
