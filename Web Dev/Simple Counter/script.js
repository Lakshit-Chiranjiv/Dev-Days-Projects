let num = document.getElementById("number");
let plus = document.getElementById("btplus");
let minus = document.getElementById("btminus");
let a;
plus.addEventListener("click", increase);
minus.addEventListener("click", decrease);

function increase() {
  a = Number(num.textContent);
  a++;
  num.innerHTML = `${a}`;
}

function decrease() {
  a = Number(num.textContent);
  a--;
  num.innerHTML = `${a}`;
}
