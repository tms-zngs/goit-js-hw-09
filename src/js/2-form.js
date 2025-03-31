const formData = { email: "", message: "" };

const storageKey = "feedback-form-state"

const form = document.querySelector(".feedback-form");
const userEmail = form.querySelector("[name=email]");
const userMesssage = form.querySelector("[name=message]");

const savedData = localStorage.getItem(storageKey);
if (savedData) {
    const parsedData = JSON.parse(savedData);
    formData.email = parsedData.email;
    formData.message = parsedData.message;
        userEmail.value = formData.email;
    userMesssage.value = formData.message;
}

form.addEventListener("input", (event) => {
    formData[event.target.name] = event.target.value;
    localStorage.setItem(storageKey, JSON.stringify(formData));
});

form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!formData.email.trim() || !formData.message.trim()) {
        alert("Fill please all fields");
        return;
    }
    console.log("Email:", formData.email);
    console.log("Message:", formData.message);
    localStorage.removeItem(storageKey);
    form.reset();
    formData.email = "";
    formData.message = "";
});

console.log(formData);
