const commentsBox = document.getElementById("comments");
const charCount = document.getElementById("char-count");

commentsBox.addEventListener("input", function () {
  const count = commentsBox.value.length;
  charCount.textContent = count + " / 250";
});

