function getInput(elem) {
  document.getElementById("input").value += elem;
}
function calculate() {
  try {
    var result = eval(document.getElementById("input").value);
    document.getElementById("input").value = result;
  } catch (error) {
    document.getElementById("input").value = "";
  }
}

function clearValue() {
  document.getElementById("input").value = "";
}
