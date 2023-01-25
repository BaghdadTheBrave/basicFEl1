const element1 = document.getElementById('element');
const element2 = document.getElementById('next_element');
function randomColor(){
return '#' + Math.floor(Math.random() * (256)).toString(16) +
Math.floor(Math.random() * (256)).toString(16) +
Math.floor(Math.random() *
(256)).toString(16);
};
function changeColorElement1(){
element1.style.background = randomColor();
element1.style.color = randomColor();
};
function changeColorElement2(){
element2.style.background = randomColor();
element2.style.color = randomColor();
};
function addImage(){
let elem = document.getElementById('Kvasy');

if(!document.getElementById('image')){
elem.insertAdjacentHTML('afterend','<image id="img" src="image.jpg" alt="Kvasy" />');
}
};
function increaseImage(){
if(document.getElementById('img')){
let img = document.getElementById('img');
let imgHeight = +img.offsetHeight;
let imgWidth = +img.offsetWidth;
if(imgHeight < 800 && imgWidth < 1280){
imgHeight += 50;
imgWidth += 100;
img.style.width = imgWidth + 'px';
img.style.height = imgHeight + 'px';
}
}
};
function decreaseImage(){
if(document.getElementById('img')){
let img = document.getElementById('img');
let imgHeight = +img.offsetHeight;
let imgWidth = +img.offsetWidth;
if(imgHeight > 50 && imgWidth > 300){
imgHeight -= 50;
imgWidth -= 100;
img.style.width = imgWidth + 'px';
img.style.height = imgHeight + 'px';
}
}
};
function deleteImage(){
let elem = document.getElementById('img');
elem.remove();
};