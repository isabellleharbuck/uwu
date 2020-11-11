setTimeout(ticktock, 100);

function ticktock() {
  var d = new Date();
  n = d.toLocaleTimeString();
  document.getElementById("time").innerHTML = n;
  setTimeout(ticktock, 100);
}