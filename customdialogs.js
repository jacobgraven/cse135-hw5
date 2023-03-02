const alertDialog = document.getElementById("alert-dialog");
// const confirmDialog = ...
// const promptDialog = ...

const alertButton = document.getElementById("custom-alert");
const confirmButton = document.getElementById("custom-confirm");
const promptButton = document.getElementById("custom-prompt");

/* Click Event Listeners */

alertButton.addEventListener("click", () => {
    alertDialog.showModal();
    const confirmChoice = document.getElementById("confirm-choice");
    const cancelChoice = document.getElementById("confirm-choice");
});

confirmButton.addEventListener("click", () => {
    // do something
});

promptButton.addEventListener("click", () => {
    // do something
});