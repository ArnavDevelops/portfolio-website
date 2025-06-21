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
        const name = document.getElementById("name").value;
        const subject = document.getElementById("head").value;
        const message = document.getElementById("subject").value;
        const email = document.getElementById("email").value;

        if (!name || !subject || !message || !email) {
            alert("Please fill in all fields");
            return;
        }
        
        form.submit()
        openPopup()
    } catch (e) {
        console.error(e)            
    }
}

function sendMail() {
    let parms = {
        email: document.getElementById("name").value,
        subject: document.getElementById("head").value,
        message: document.getElementById("subject").value,
        email: document.getElementById("email").value
    }

    emailjs.send("service_cgeudgk", "template_8cq9nnh", parms).then(alert("Email has been sent."))
}