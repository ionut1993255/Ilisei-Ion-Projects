"use strict";

const convertTitleCase = function() {
    const titleInput = document.querySelector("#title").value;
    if (titleInput !== "") {
        const capitalize = (titleInput) => titleInput[0].toUpperCase() + titleInput.slice(1);

        const exceptions = ["a", "an", "and", "the", "but", "or", "on", "in", "with"];

        const titleCase = titleInput
            .toLowerCase()
            .split(" ")
            .map((word) => (exceptions.includes(word) ? word : capitalize(word)))
            .join(" ");

        document.querySelector("#message").textContent = capitalize(titleCase);
    }
};

const clearTextArea = function() {
  document.querySelector('#message').textContent = 'Please enter a title!';
  document.querySelector("#title").value = "";
}














