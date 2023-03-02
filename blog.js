const createButton = document.getElementById("create-button");
const createDialog = document.getElementById("create-dialog");

createButton.addEventListener("click", () => {
    createDialog.showModal();
});