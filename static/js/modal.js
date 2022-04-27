// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
    modal.style.display = "none";
    }
}

function input(e, id) {
    var InpVar = document.getElementById(id);
    InpVar.value = InpVar.value + e.value;
    if (id == "main input"){
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
    }
}