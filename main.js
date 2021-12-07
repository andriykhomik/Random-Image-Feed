const unsplashURL = 'https://source.unsplash.com/random/'
const imagesContainer = document.querySelector('.images-container');
const rows = 10;

for (let i = 0; i < rows * 3; i++) {
    const img = document.createElement('img');
    img.src = unsplashURL + randomSize()+'x'+randomSize();
    img.classList.add('image');
    imagesContainer.appendChild(img);
}

function randomSize(){
    return Math.floor(Math.random() * 10) +300;
}
