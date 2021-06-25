document.addEventListener("mousemove", parallax)

function parallax(e) {
    const x = (window.innerWidth - e.clientX*2)/90 - 100
    const y = (window.innerHeight - e.clientY*2)/90 - 100
    document.getElementById("spaceimage").style.transform = `translateX(${x}px) translateY(${y}px)`
}
