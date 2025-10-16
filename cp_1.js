const commentsBox = document.getElementById("comments");
const charCount = document.getElementById("char-count");

commentsBox.addEventListener("input", function () {
  const count = commentsBox.value.length;
  charCount.textContent = count + " / 250";
});
const form = document.getElementById("feedback-form");

form.addEventListener("mouseover", function (event) {
  if (event.target.tagName === "INPUT" || event.target.tagName === "TEXTAREA") {
    event.target.title = "Please fill out this field"; // basic tooltip
  }
});
form.addEventListener("submit", function (event) {
  event.preventDefault(); // stop the page from refreshing

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const comments = commentsBox.value.trim();
