const barEl = document.getElementById('bars-nav');

const toggleLinks= document.getElementById('toggle-links');

barEl.addEventListener('click', ()=>{
    toggleLinks.classList.toggle('hide')
})

