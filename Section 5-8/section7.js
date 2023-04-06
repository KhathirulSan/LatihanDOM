// Mouse Events
let sect7 = document.getElementById("sect7");

sect7.addEventListener("mouseover", function() {
	sect7.style.backgroundColor = "black";
});

sect7.addEventListener("mouseout", function() {
	sect7.style.backgroundColor = "gray";
});

// preventDefault()
let id7 = document.getElementById("id7");

id7.addEventListener("click", function(event) {
	event.preventDefault();
	alert("Link Mati");
});