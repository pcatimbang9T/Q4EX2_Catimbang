// if statement
// function verifytheAge() {
// 	let age = document.getElementById('inputAge').value;
// 	if (age < 18) {
// 		window.alert("You're too young to vote");
// 	}
// 	if (age > 17) {
// 		window.alert("You're eligible to vote");
// 	}
// }

function verifytheAge() {
	let age = document.getElementById('inputAge').value;
	if (age <= 17) {
		window.alert("You're too young to vote");
	}
	else {
		window.alert("You're eligible to vote");
	}
}


