const imgs = document.querySelectorAll('.image');

function handleImg() { 
    handleActive();
    this.classList.add('active');
}

function handleActive() {
    imgs.forEach((img) => {
        img.classList.remove('active');
    })
}


imgs.forEach((img)=>{
    img.addEventListener('click', handleImg);
})