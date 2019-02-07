I'm learning programming with wesbos and his project: JavaScript30
I made with them:
** Flex Panels Image Gallery **

To create the gallery I used to CSS for flexbox, transitions and events that is going to emit to us by JavaScript.
When clicked the photos are going to grow
in size, as well as they're going to fall from the top and come up from the bottom.
I used to nested flex (display:flex) for parent and for children: flex:1.
In JavaScript I animated two things. I am
listening for a click on each panel. When someone clicks we're going add class that make the image bigger and the words come on up and  down.
The second step is that once this has
finished transitioning itself open, that's when I want to bring in the word
from the top and bring in the word from the bottom.
I listened for the transition end event and I am going to
toggle class of open-active with a function.
And then it will just go the other way
when you click it off, as well.