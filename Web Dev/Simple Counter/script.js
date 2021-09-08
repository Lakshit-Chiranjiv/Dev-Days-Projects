let num = document.getElementById("number");
let plus = document.getElementById("btplus");
let minus = document.getElementById("btminus");
let res = document.getElementById("btreset");
let a;
plus.addEventListener("click", increase);
minus.addEventListener("click", decrease);
res.addEventListener("click",makezero)

function increase() {
  a = Number(num.textContent);
  a++;
  num.innerHTML = `<strong>${a}</strong>`;
}

function decrease() {
  a = Number(num.textContent);
  a--;
  num.innerHTML = `<strong>${a}</strong>`;
}

function makezero() {
  num.innerHTML = `<strong>0</strong>`;
}