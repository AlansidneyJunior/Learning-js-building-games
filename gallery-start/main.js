const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
let imgFilenames = [];
let filename;

for (let i=0;i<6;i++){
    filename = 'pic'+i+'.jpg';
    imgFilenames.push(filename);
}
/* Declaring the alternative text for each image file */
let altTexts = imgFilenames;

/* Looping through images */

for (let i=1;i<=5;i++){
    const newImage = document.createElement('img');
    newImage.setAttribute('src', ('images/'+ imgFilenames[i]));
    newImage.setAttribute('alt', altTexts[i]);
    newImage.addEventListener('click',displayImage);
    thumbBar.appendChild(newImage);
}

/* Wiring up the Darken/Lighten button */
let isLighten = true;

btn.addEventListener('click',()=>{
    if (isLighten){
        overlay.style.background = 'rgba(0,0,0,0.5)'; 
    } else {
        overlay.style.background = 'rgba(0,0,0,0)'; 
    }
    isLighten = !isLighten;
});

function displayImage(e){
    newSrc = e.target.src;
    newAlt = e.target.alt;
    displayedImage.setAttribute('src',newSrc);
    displayedImage.setAttribute('alt', newAlt);
}