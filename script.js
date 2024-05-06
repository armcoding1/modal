const showModal = document.querySelector(".show-modal");
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const closeModal = document.querySelector(".close-modal");

function openModal() {
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
}

function exitModal() {
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
}

showModal.onclick = () => openModal();
closeModal.onclick = () => exitModal();
overlay.onclick = () => exitModal();

document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !modal.classList.contains("hidden")) {
        exitModal();
    };
});

document.addEventListener("keydown", (e) => {
    if (e.key === "Enter" && modal.classList.contains("hidden")) {
        openModal();
    };
});