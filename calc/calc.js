let output = document.getElementById("result");

function insert(x) {
  output.value += x;
}

function clearAll() {
  output.value = "";
}

function back() {
  output.value = output.value.slice(0, -1);
}

function solve() {
  try {
    output.value = Function('"use strict";return (' + output.value + ')')();
  } catch {
    output.value = "Error";
  }
}
