var i = 1;
var message = document.getElementById("typewriter").innerText;

function func() {
  if (i <= message.length) {
    var txt = message.substring(0, i);
    document.getElementById("typewriter").innerHTML = txt;

    if (i % 2 === 0) {
      document.getElementById("typewriter").style.color = "blue";
    } else {
      document.getElementById("typewriter").style.color = "red";
    }
    setTimeout("func()", 200);
    i++;
  } else {
    i = 1;
    document.getElementById("typewriter").innerHTML = "";
    setTimeout("func()", 1000);
  }
}
func();
