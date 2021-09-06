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
  num.innerHTML = `${a}`;
}

function decrease() {
  a = Number(num.textContent);
  a--;
  num.innerHTML = `${a}`;
}

function makezero() {
  num.innerHTML = `0`;
}