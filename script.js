document.addEventListener("mousemove", function(e) {
  let cursor = document.createElement("div");
  cursor.className = "cursor";
  cursor.style.left = e.pageX + "px";
  cursor.style.top = e.pageY + "px";
  document.body.appendChild(cursor);
  setTimeout(() => cursor.remove(), 500);
});
