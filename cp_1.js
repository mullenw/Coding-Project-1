const commentsBox = document.getElementById("comments");
const charCount = document.getElementById("char-count");

commentsBox.addEventListener("input", function () {
  const count = commentsBox.value.length;
  charCount.textContent = count + " / 250";
});

const form = document.getElementById("feedback-form");

form.addEventListener("mouseover", function (event) {
  if (event.target.tagName === "INPUT" || event.target.tagName === "TEXTAREA") {
    event.target.title = "Please fill out this field";
  }
});

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const nameValue = document.getElementById("name").value.trim();
  const emailValue = document.getElementById("email").value.trim();
  const commentsValue = commentsBox.value.trim();

  if (nameValue === "" || emailValue === "" || commentsValue === "") {
    alert("Please fill out all fields before submitting!");
    return;
  }

  const entry = document.createElement("div");
  entry.textContent = nameValue + " (" + emailValue + "): " + commentsValue;

  const display = document.getElementById("feedback-display");
  display.appendChild(entry);

  form.reset();
  charCount.textContent = "0 / 250";

  alert("Feedback submitted!");
});