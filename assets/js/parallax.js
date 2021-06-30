document.addEventListener("mousemove", parallax)

function parallax(e) {
	const x = (window.innerWidth - e.clientX*-0.5)/90 - (window.innerWidth/14.5)
	const y = (window.innerHeight - e.clientY*-0.5)/90 - (window.innerHeight/7.9)
	document.getElementById("spaceimage").style.transform = `translateX(${x}px) translateY(${y}px)`
}
