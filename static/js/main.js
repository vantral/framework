var inp1 = document.getElementById("main input");
inp1.addEventListener("input", function () {
    this.value !== ""? $(".dropdown-toggle").addClass("disabled") : $(".dropdown-toggle").removeClass("disabled");
    document.getElementById("pragmatics").disabled = this.value !== "";
    document.getElementById("add_sem").disabled = this.value !== "";
    document.getElementById("glosses").disabled = this.value !== "";
    document.getElementById("langs").disabled = this.value !== "";
    document.getElementById("structure").disabled = this.value !== "";
    document.getElementById("lemma").disabled = this.value !== "";
    document.getElementById("syntax").disabled = this.value !== "";
    document.getElementById("is").disabled = this.value !== "";
    document.getElementById("speech_act").disabled = this.value !== "";
});

function myFunction() {
  var x = document.getElementById("myDIV");
  if (x.style.display == "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
  var y = document.getElementById("otherbutton");
  y.style.display = "none";
}

function seeMore(y) {
  var x = document.getElementById(y.name);
  x.style.display = "block";
  document.getElementById("button" + y.name).style.display = "none";
  var z = document.getElementById("main-card" + y.name);
  z.style.minHeight = "60px";
}

function hideMore(y) {
  var x = document.getElementById(y.name);
  x.style.display = "none";
  document.getElementById("button" + y.name).style.display = "block";
  var z = document.getElementById("main-card" + y.name);
  z.style.minHeight = "80px";
}

function seeGlosses(y) {
  var x = document.getElementById("glosses" + y.name);
  x.style.display = "block";
  document.getElementById("gloss" + y.name).style.display = "none";
}

function hideGlosses(y) {
  var x = document.getElementById("glosses" + y.name);
  x.style.display = "none";
  document.getElementById("gloss" + y.name).style.display = "block";
}

function seeAll(m) {
  var counter = parseInt(m.name, 10);
  while (counter > 0) {
    try{
      var x = document.getElementById(counter.toString());
      x.style.display = "block";
      document.getElementById("button" + counter.toString()).style.display = "none";
      var z = document.getElementById("main-card" + counter.toString());
      z.style.minHeight = "60px";
      counter = counter - 1;}
      catch {counter = counter - 1;}
  };
  document.getElementById("seeAll").style.display = "none";
  document.getElementById("hideAll").style.display = "block";
}

function hideAll(m) {

  var counter = parseInt(m.name, 10);
  while (counter >= 0) {
    try{
    var x = document.getElementById(counter.toString());
    x.style.display = "none";
    document.getElementById("button" + counter.toString()).style.display = "block";
    var z = document.getElementById("main-card" + counter.toString());
    z.style.minHeight = "80px";
    counter = counter - 1;}
    catch{counter = counter - 1;}
  };
  document.getElementById("seeAll").style.display = "block";
  document.getElementById("hideAll").style.display = "none";
}