document.addEventListener("mousemove", parallax)
const elem = document

function parallax(e) {
    const x = (window.innerWidth - e.clientX*-0.5)/90 -134
    const y = (window.innerHeight - e.clientY*-0.5)/90 -137
    document.getElementById("spaceimage").style.transform = `translateX(${x}px) translateY(${y}px)`
}
