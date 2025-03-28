const formData = { email: "", message: "" };

const storageKey = "feedback-form-state"

const form = document.querySelector(".feedback-form");
const userEmail = form.querySelector(".email-input");
const userMesssage = form.querySelector(".message-area");

const savedData = localStorage.getItem(storageKey);
if (savedData) {
    const parsedData = JSON.parse(savedData);
    formData.email = parsedData.email;
    formData.message = parsedData.message;
        userEmail.value = formData.email;
    userMesssage.value = formData.message;
}

userEmail.addEventListener("input", (event) => {
    formData.email = event.target.value
    localStorage.setItem(storageKey, JSON.stringify(formData));
})

userMesssage.addEventListener("input", (event) => {
    formData.message = event.target.value
    localStorage.setItem(storageKey, JSON.stringify(formData));
})

form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!formData.email || !formData.message) {
        alert("Fill please all fields");
        return;
    }
    console.log(event.target.elements.email.value);
    console.log(event.target.elements.message.value);
    // localStorage.removeItem(storageKey);
    form.reset();
    formData.email = "";
    formData.message = "";
    localStorage.setItem(storageKey, JSON.stringify(formData));
});

console.log(formData);
