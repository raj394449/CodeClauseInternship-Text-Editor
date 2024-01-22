let optionsButtons = document.querySelectorAll('.option-button');
let advancedOptionButton = document.querySelectorAll('.adv-option-button');

// Main Logic to perform operation on text
const modifyText = (command, defaultUi, value) => {
    // execCommand executes command on selected text
    document.execCommand(command, defaultUi, value);
};

optionsButtons.forEach((button) => {
    button.addEventListener('click', () => {
        modifyText(button.id, false, null)
    });
});

advancedOptionButton.forEach((button) => {
    button.addEventListener('change', () => {
        modifyText(button.id, false, button.value);
    });
});
