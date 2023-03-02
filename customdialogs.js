const alertDialog = document.getElementById("alert-dialog");
const confirmDialog = document.getElementById("confirm-dialog");
const promptDialog = document.getElementById("prompt-dialog");

const alertButton = document.getElementById("custom-alert");
const confirmButton = document.getElementById("custom-confirm");
const promptButton = document.getElementById("custom-prompt");

const output = document.getElementById("output");

/* Event Listeners */

alertButton.addEventListener("click", () => {
    output.innerHTML = "";
    alertDialog.showModal();
});

confirmButton.addEventListener("click", () => {
    output.innerHTML = "";
    confirmDialog.showModal();

    const confirmChoice = document.getElementById("confirm-choice");
    const cancelChoice = document.getElementById("cancel-choice");
    let returnValue;

    confirmChoice.addEventListener("click", () => {
        returnValue = true;
        output.innerHTML = `Confirm result: ${returnValue}`;
    });
    cancelChoice.addEventListener("click", () => {
        returnValue = false;
        output.innerHTML = `Confirm result: ${returnValue}`;
    });
});

promptButton.addEventListener("click", () => {
    output.innerHTML = "";
    promptDialog.showModal();

    const submitChoice = document.getElementById("submit-choice");
    const cancelChoice = document.getElementById("cancel-prompt");
    const textField = document.getElementById("prompt-input");
    let returnValue;

    submitChoice.addEventListener("click", () => {
        returnValue = textField.value;
        if(returnValue != "") {
            output.innerHTML = `Prompt result: ${returnValue}`;
        } else {
            output.innerHTML = `User didn't submit anything`;
        }
    });
    cancelChoice.addEventListener("click", () => {
        output.innerHTML = `User didn't submit anything`;
    });

});