const dropZone = document.querySelector(".drop-zone");
const browseBtn = document.querySelector(".browseBtn");
const fileInput = document.querySelector("#fileinput");

const host = "https://innshare.heroku.com/";
const uploadURL = `${host}api/files`;
dropZone.addEventListener("dragover", (event) => {
  console.log("Dragging");
  event.preventDefault();
  if (!dropZone.classList.contains("dragged"))
    dropZone.classList.add("dragged");
});
dropZone.addEventListener("dragleave", () => {
  dropZone.classList.remove("dragged");
});
dropZone.addEventListener("drop", (e) => {
  const files = e.dataTransfer.files;
  e.preventDefault();
  dropZone.classList.remove("dragged");
  if (files.length) {
    fileInput.files = files;
  }
});
browseBtn.addEventListener("click", () => {
  fileInput.click();
});

const uploadFile = () => {
  const file = fileInput.files[0];
  const formData = new FormData();
  formData.append(file);
  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = () => {
    console.log(xhr.onreadystatechange);
  };
  xhr.open("POST", uploadURL);
  xhr.send(formData);
};
