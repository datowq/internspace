document.addEventListener("mousemove", parallax)
const elem = document
function parallax(e) {
    this.querySelectorAll('.layer').forEach(layer => {
        let xx = e.clientX
        let yy = e.clientY
        let aa=0
        let bb=0
        const speed = layer.getAttribute('data-speed')
        if(document.getElementById("spaceimage")) {
            aa=200
            bb=50
        }
        const x = (window.innerWidth - e.clientX*speed)/100 -aa
        const y = (window.innerHeight - e.clientY*speed)/100 -bb
        console.log(xx, yy)
        layer.style.transform = `translateX(${x}px) translateY(${y}px)`
    })
}
