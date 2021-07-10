const { width } = screen;

const typeWriterContainer = document.querySelector(".color");
const aboutContainer = document.querySelector(".about-container");

function changeLabels() {
    if (width <= 768) {
        typeWriterContainer.remove();
    }
    if (width >= 768) {
        const aboutPhotoContainer = document.createElement("div");
        aboutPhotoContainer.className = "about-image";
        aboutContainer.appendChild(aboutPhotoContainer);
    }
}

changeLabels();
