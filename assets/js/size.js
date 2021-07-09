const { width } = screen;
const openLabel = document.querySelector(".open-profile");
const closeLabel = document.querySelector(".close-profile");
const profileSection = document.querySelector(".section1");
const profileContainer = document.getElementById("profile-container");

function changeLabels() {
    if (width <= 768) {
        profileSection.insertBefore(openLabel, profileContainer);
        profileSection.appendChild(closeLabel);
    }
}

changeLabels();
