const { width } = screen;

const typeWriterContainer = document.querySelector(".color");

function changeLabels() {
    if (width <= 768) {
        typeWriterContainer.remove();
    }
}

changeLabels();
