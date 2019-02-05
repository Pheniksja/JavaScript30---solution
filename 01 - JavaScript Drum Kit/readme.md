

I'm learning programming with wesbos and his project: JavaScript30
=======
I'm learning programming with wesbos and his project: JavaScript30.

I made with them: JavaScript Drum Kit.

When you hit the corresponding key on your keyboard it's going to do two things. First of all,
it's going to play the sound that's associated with that key and second of
all, it's going to do the little animation - where it pops the button up to
be a little bigger with border's color.

When someone hits the key on their keyboard, we're going to find the audio element and play it and we're going to
find the key div and add a class of playing  so it will animate the key. The elements with letters and audio have the same  data-key so  I am using the same data attributes to connect letters with the data key audio.

I  add an event listener to listen on the window.  The event that I am  listening here is called key down.
window.addEventListener('keydown', function(e) {}

I am going to use document.querySelector and  use its own data attribute here.  Because I am  going to listen for an audio, and select an audio element where it has a data - key. I use ES6 template strings which is dollar sign curly brackets ("e.keyCode.") and play it:
const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
audio.play();

If there is no audio element, we use function - we are just going to return.
if(!audio)return;

When you hit the same key multiple times, it plays only once.  So before play rewind it to the starat of the element. If you hit it in succession over and over again,it will just rewind it to the start:
audio.currentTime = 0
I add some animation so - I was adding a class of playing to key, which will be select.
It's going to change the border color by usung transition that is 0.07 seconds long.
I add the class but we have not yet removed the class.
I need to select every single key on the page because we want to listen for it on each one.
const keys = document.querySelectorAll('.key')

There is no one key but an array so I used to loop over every singly element and attach an event listener. I use the arrow function . Each key gets an event listener added to it which is transition end.
keys.forEach(key=> key.addEventListener('transitioned', removeTransition ))

And then when a transition is ending, we will remove it. I add a function removeTransition that - If it doesn't equal
transform then we will return it:
function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    this.classList.remove('playing')
