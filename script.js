const header = document.getElementById('header')
const title = document.getElementById('title')
const excerpt = document.getElementById('excerpt')
const profile_img = document.getElementById('profile_img')
const name = document.getElementById('name')
const date = document.getElementById('date')

const animated_bgs = document.querySelectorAll('.animated-bg')
const animated_bg_texts = document.querySelectorAll('.animated-bg-text')

setTimeout(getData, 2500)

function getData() {
    header.innerHTML = `<img src="https://images.unsplash.com/photo-1551009175-8a68da93d5f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80" alt=""></img>`
    title.innerHTML = `Lorem ipsum dolor sit amet consectetur adipisicing elit.`
    excerpt.innerHTML = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate officia at maxime voluptatum eum possimus nam nobis fugit libero recusandae dignissimos aspernatur debitis dolorum distinctio repellat, expedita dicta corporis error.`
    profile_img.innerHTML = `<img src="https://randomuser.me/api/portraits/men/45.jpg" alt="">`
    name.innerHTML = `John Die`
    date.innerHTML = `May 24, 2021`

    animated_bgs.forEach(bg => bg.classList.remove('animated-bg'))
    animated_bg_texts.forEach(bg => bg.classList.remove('animated-bg-text'))
}