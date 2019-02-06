const hourHand  = document.querySelector('.hour-hand');
const minHand  = document.querySelector('.min-hand');
const secondHand  = document.querySelector('.second-hand');

function setDate() {
    const now = new Date();

    //seconds
    const seconds= now.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
    console.log(seconds);

    //minutes
    const mins = now.getMinutes();
    const minsDegrees = ((mins / 60) * 360) + 90;
    minHand.style.transform = `rotate(${minsDegrees}deg)`;
    console.log('minutes' +  mins);

    // hours
    const hour = now.getHours();
    const hourDegrees = ((hour / 12) * 360) + ((mins/60)*30) + 90;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;
    console.log('hours' + hour);
}
    setInterval(setDate,1000);

