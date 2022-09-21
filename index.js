const shareBtn1 = document.getElementById("share-btn-1");
const shareBox = document.getElementById("share-box");
const shareIcon = document.getElementById("share-icon-1");

shareBtn1.addEventListener("click", () => {
  console.log("Hello");
  shareBox.classList.toggle("d-none");
  // console.log(shareIcon);
  shareIcon.classList.toggle("share-icon-1-active");
  shareBtn1.classList.toggle("share-btn-1-active");
});
