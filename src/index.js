import "./styles.css";

document.getElementById("add-comment").addEventListener("click", addComment);
document
  .getElementById("remove-comments")
  .addEventListener("click", removeComments);

function addComment() {
  var text = document.getElementById("textbox").value;
  var ul = document.getElementById("unordered");
  var li = document.createElement("li");
  li.appendChild(document.createTextNode(text));
  ul.appendChild(li);
}
function removeComments() {
  if (window.confirm("Do you want to delete all comments.")) {
    let ul = document.getElementById("unordered");
    while (ul.firstChild) {
      ul.removeChild(ul.firstChild);
    }
  }
}
