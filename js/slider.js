const images = [
  "images/photo1.jpg",
  "images/photo2.jpg",
  "images/photo3.jpg",
  "images/photo4.jpg",
  "images/photo5.jpg",
  "images/photo6.jpg",
  "images/photo7.jpg",
  "images/photo8.jpg",
];
let imagesIndex = 0;
const imagesdiv = document.getElementById("caruoser");
setInterval(() => {
  if (imagesIndex === images.length) {
    imagesIndex = 0;
  }
  const imagesLink = images[imagesIndex];
  imagesdiv.setAttribute('src',imagesLink)
  imagesIndex++;
}, 2000);
