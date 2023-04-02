const btn = document.getElementById("submit")
const overlay = document.getElementById("overlay")

btn.addEventListener("click", e => {
    e.preventDefault()

    overlay.style.display = "block";

    const scamMan = document.createElement("img")
    scamMan.src = "https://i.ibb.co/4jzL2kc/scamman-removebg-preview.png"
    scamMan.id = "scamman"
    document.body.appendChild(scamMan)

    const alert = document.createElement("h1")
    alert.textContent = "YOU HAVE BEEN SCAMMED"
    alert.id = "alert"
    document.body.appendChild(alert)
})