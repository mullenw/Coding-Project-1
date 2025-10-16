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
