let menu = document.querySelector('#menu-icon')
let navbar = document.querySelector('.navbar')

menu.onclick = () => {
    menu.classList.toggle('bx-x')
    navbar.classList.toggle('open')
}

window.onscroll = () => {
    menu.classList.remove('bx-x')
    navbar.classList.remove('open')
}

// NAVBAR ACTIVE
document.querySelectorAll('.navbar li a').forEach(el => {
    el.onclick = () => {
      document.querySelectorAll('.navbar li a').forEach(el => el.classList.remove('active'));
      el.classList.add('active');
    }
})



//SCROLL REVEAL ANIMATION
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 3000,
    delay:400,
})

sr.reveal(`.container-main`)
sr.reveal(`.about, .img, .`, {origin:'left'})
sr.reveal(`.text, .right-content`, {origin:'right'})
sr.reveal(`.jobs, .left-content`, {origin:'bottom'})