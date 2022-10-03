let heart = document.querySelector('.unique');
let copHeart = heart.cloneNode(true);
let body = document.querySelector('body');
console.log(copHeart);
myVid = document.getElementById('audio');
myVid.volume = 0.1;

function deleteLast(el) {
  el.remove();
}
const newspaperSpinning = [
  { transform: 'rotate(0) scale(2)' },
  { transform: 'scale(10)' },
  { transform: 'scale(2)' },
];
const newspaperTiming = {
  duration: 2000,
  iterations: 1,
};

function clickBody(e) {
  copHeart = heart.cloneNode(true);
  y = e.y;
  x = e.x;
  copHeart.style.display = 'inline-block';
  copHeart.style.position = 'absolute';
  copHeart.style.left = e.x + 'px';
  copHeart.style.top = e.y + 'px';
  console.log(copHeart);
  body.appendChild(copHeart);
  copHeart.animate(newspaperSpinning, newspaperTiming);
  copHeart.style.overflow = 'hidden';
  copHeart.style.transition = 'all 0.5s ease-out';
  copHeart.style.fill = '20';
}
document.body.addEventListener('click', clickBody);
