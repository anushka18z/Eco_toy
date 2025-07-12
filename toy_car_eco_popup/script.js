document.getElementById("openModal").onclick = function () {
  document.getElementById("carbonModal").style.display = "block";
};

document.querySelector(".close").onclick = function () {
  document.getElementById("carbonModal").style.display = "none";
};

window.onclick = function (event) {
  const modal = document.getElementById("carbonModal");
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
