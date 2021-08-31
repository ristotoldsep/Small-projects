const body = document.body;

body.append("Hello World");

const div = document.createElement("div");

div.textContent = "Test 2";
div.innerText = "Test 3";

body.append(div);

const katsetus = document.querySelector("#innertextvstextcontent");

// textContent vs innerText
console.log(katsetus.textContent);
console.log(katsetus.innerText);