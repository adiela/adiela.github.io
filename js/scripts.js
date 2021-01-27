const sections = document.querySelectorAll(".page-section");
const links = document.querySelector(".navbar");
const linksHeight = links.offsetHeight;
const allLinks = links.querySelectorAll("a");
function scrollspy() {
    sections.forEach(current => {
        const _ = current;
        let currentElementOffset = _.offsetTop;
        let scrollPosition =
            document.documentElement.scrollTop || document.body.scrollTop;
        if (currentElementOffset <= scrollPosition + linksHeight) {
            allLinks.forEach(currentLink => {
                currentLink.classList.remove("nav-link-active");
            });
            const currentID = current.getAttribute("id");
            document
                .querySelector(`a[href="#${currentID}"]`)
                .classList.add("nav-link-active");
        }
    });
}
window.addEventListener("scroll", scrollspy);