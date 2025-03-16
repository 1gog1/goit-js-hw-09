const form = document.querySelector(".feedback-form");
const input = document.querySelector("input");
const textarea = document.querySelector("textarea");
const localStorageKey = "feedback-form-state";

const formData = {
    email: "",
    message: "",
};

const saveData = localStorage.getItem(localStorageKey);
if (saveData) {
    const parseData = JSON.parse(saveData);
    input.value = parseData.email;
    textarea.value = parseData.message;
};

form.addEventListener("input", event => {
    formData.email = input.value;
    formData.message = textarea.value;
    localStorage.setItem(localStorageKey, JSON.stringify(formData));
});

form.addEventListener("submit", event => {
    event.preventDefault();
    if (textarea.value === "" || input.value === "") {
        return alert("Fill please all fields");
    }

    console.log(formData);
    localStorage.removeItem(localStorageKey);
    form.reset();
}); 