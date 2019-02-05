<<<<<<< HEAD
=======
// var letter = document.querySelectorAll('.key');
// for (var i = 0; i<letter.length; i++) {
//     letter[i].addEventListener('keydown', function (e) {
//         console.log(e);
//     })
// }
window.addEventListener('keydown', function(e) {
const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    // console.log(key)
if(!audio)return; //stop the function
    audio.currentTime = 0; //remind to start
    audio.play();
    key.classList.add('playing');
});
>>>>>>> be8b42277f6022f5556f444b8b74f2a32d35c369

function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    this.classList.remove('playing')
}

<<<<<<< HEAD
function playDrums (e) {
    // variables
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if(!audio)return; //stop the function

        audio.currentTime = 0; //remind to start
        key.classList.add('playing');
        audio.play();
};

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition ));

window.addEventListener('keydown', playDrums )
=======
const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition ));
// console.log(keys)
// key.addEventListener('transitioned')
>>>>>>> be8b42277f6022f5556f444b8b74f2a32d35c369
