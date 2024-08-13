const popup = document.getElementById("popup")
const button = document.getElementById("submitbtn")

function openPopup() {
    popup.classList.add("open-popup")
}

function closePopup() {
    popup.classList.remove("open-popup")
}

button.addEventListener("OnClick", handleFormSubmit())

const form = document.getElementById("gform")
fetch('config.json')
.then(response => response.json())
.then(config => {
    form.action = config.url
})

async function handleFormSubmit() {
    try {
        const email = document.getElementById("name").value;
        const subject = document.getElementById("head").value;
        const message = document.getElementById("subject").value;

        if (!email || !subject || !message) {
            alert("Please fill in all fields");
            return;
        }
        
        form.submit()
        openPopup()
    } catch (e) {
        console.error(e)            
    }
}

let typed;

typed = new Typed(".arnav", {
    strings: ["Arnav"],
    typeSpeed: 250,
    backSpeed: 500,
    loop: true,
})

typed = new Typed(".services", {
    strings: ["Services"],
    typeSpeed: 250,
})

typed = new Typed(".work", {
    strings: ["Work"],
    typeSpeed: 250,
})