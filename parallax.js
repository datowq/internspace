document.addEventListener("mousemove", parallax)
const elem = document

function parallax(e) {
    this.querySelectorAll('.layer').forEach(layer => {
        const clientX = e.clientX
        const clientY = e.clientY
        const windowWidth = window.innerWidth
        const windowHeight = window.innerHeight
        let factorX = 2
        let factorY = 2
        let offsetX = 0
        let offsetY = 0
        if (layer == document.getElementById("spaceimage")) {
            factorX = -0.5
            factorY = -0.5
            offsetX = 100
            offsetY = 100
        }
        const x = (windowWidth - clientX*factorX)/100 - offsetX
        const y = (windowHeight - clientY*factorY)/100 - offsetY
        layer.style.transform = `translateX(${x}px) translateY(${y}px)`
    })
}
