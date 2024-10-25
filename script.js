function goPage(pageNumber) {
  let pages = document.querySelectorAll(".page");
  pages.forEach((page) => {
    page.style.display = "none";
  });
  document.getElementById(`page${pageNumber}`).style.display = "block";
}
