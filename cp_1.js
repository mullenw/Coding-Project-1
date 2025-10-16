const entry = document.createElement("div")
entry.textContent = "Hello from JS";

document.getElementById("comments_here").appendChild(entry);

document.querySelector(".submit").addEventListener("click", () => {
    alert("Submitted!");

})
