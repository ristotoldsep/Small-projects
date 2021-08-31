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

const katsetusid = katsetus.getAttribute("id");

const proov = "Div-i id on " + katsetusid;

console.log(proov);

const katsetusid2 = katsetus.setAttribute("id", "Test");

console.log(katsetusid2.getAttribute("id"));

console.log(katsetus.getAttribute("id"));