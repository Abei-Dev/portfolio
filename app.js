const sections = document.querySelectorAll("section")
const navLinks = document.querySelectorAll(".nav-links a")

window.addEventListener("scroll", updateActiveLink)

updateActiveLink()

function updateActiveLink() {
    let currentSection = "hero"

    const pageBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 10

    if (pageBottom) {
        currentSection = "contact"
    } else {
        sections.forEach(function(section) {
            const sectionTop = section.offsetTop - 150

            if (window.scrollY >= sectionTop) {
                currentSection = section.id
            }
        })
    }

    navLinks.forEach(function(link) {
        link.classList.remove("active")

        if (link.getAttribute("href") === "#" + currentSection) {
            link.classList.add("active")
        }
    })
}