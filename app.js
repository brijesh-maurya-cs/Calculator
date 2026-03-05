const screen = document.querySelector("#screen")

const btns = document.querySelectorAll(".btn")


for (let btn of btns) {
    btn.addEventListener("click", function () {
        let btnVal = btn.innerText 

        if (btnVal === "AC") {
            screen.value = ""
        } 
        else if (btnVal === "DEL") {
            screen.value = screen.value.slice(0, -1) 
        } 
        else if (btnVal === "=") {
            try {
                screen.value = eval(screen.value)
            } catch {
                screen.value = "Error"
            }
        } 
        else {
            screen.value += btnVal
        }
    })
}
