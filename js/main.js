let sidebar = document.querySelector('.sidebar')
menu_toggle.onclick = function (e) {
    e.preventDefault()
    sidebar.classList.toggle('visible')
}