let navMobile = document.getElementById('nav-ul')

function toggle() {
    if (navMobile.className === "topNav") {
        navMobile.className += " show";
    } else {
        navMobile.className = "topNav";
    }
}