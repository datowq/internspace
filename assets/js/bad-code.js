/* document.addEventListener("mousemove", parallax)
const elem = document

function parallax(e) {
    this.querySelectorAll('.layer').forEach(layer => {
        const clientX = e.clientX
        const clientY = e.clientY
        const windowWidth = window.innerWidth
        const windowHeight = window.innerHeight
        let factorX = 2
        let factorY = 2
        let offsetX = -30
        let offsetY = -30
        if (layer == document.getElementById("spaceimage")) {
            factorX = -0.5
            factorY = -0.5
            offsetX = 100
            offsetY = 100
        }
        const x = (windowWidth - clientX*factorX)/90 - offsetX
        const y = (windowHeight - clientY*factorY)/90 - offsetY
        layer.style.transform = `translateX(${x}px) translateY(${y}px)`
    })
}


body {
    -webkit-animation: bgcolor 20s infinite;
    animation: bgcolor 20s infinite;
    -webkit-animation-direction: alternate;
    animation-direction: alternate;
}

@keyframes bgcolor {
    0% {
        background-color: #2b6792
    }

    30% {
        background-color: #8a2956
    }

    60% {
        background-color: #8b4c22
    }

    90% {
        background-color: rgb(158, 47, 66)
    }

    100% {
        background-color: #7a6623
    }
}


 */
