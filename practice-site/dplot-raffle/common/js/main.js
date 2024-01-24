const numberEl = document.querySelectorAll('.js-number');
const targetDate = new Date('2024-1-9 13:28:20');

const init = () => {
    const date = countDown(targetDate.getTime());

    numberEl.forEach((el, index) => {
        const numberItemEl = el.querySelectorAll('.js-current-count');
        numberItemEl.forEach((el) => {
            el.querySelector('span').innerHTML = date.flat()[index];
        });
    });
};

const flip = (el, count, max) => {
    const numberCountEl = el.querySelectorAll('.js-current-count');
    const nextNumberEl = el.querySelectorAll('.js-next-count');

    numberCountEl.forEach((el) => {
        if (count === 9) {
            el.querySelector('span').innerHTML = 0;
        } else {
            if (max && +count === max - 1) {
                el.querySelector('span').innerHTML = 0;
                return;
            } else {
                el.querySelector('span').innerHTML = count + 1;
            }
        }
    });

    nextNumberEl.forEach((el) => {
        el.querySelector('span').innerHTML = count;
    });

    el.classList.add('active');
    setTimeout(() => {
        numberCountEl.forEach((el) => {
            el.querySelector('span').innerHTML = count;
        });
        el.classList.remove('active');
    }, 500);
};

const countDown = (targetDate) => {
    const nowDate = new Date().getTime();
    const distance = targetDate - nowDate;

    if (distance < 0) return false;

    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    days = days < 10 ? (days = `0${days}`) : days;
    hours = hours < 10 ? (hours = `0${hours}`) : hours;
    minutes = minutes < 10 ? (minutes = `0${minutes}`) : minutes;
    seconds = seconds < 10 ? (seconds = `0${seconds}`) : seconds;

    return [...String(days).split(''), ...String(hours).split(''), ...String(minutes).split(''), ...String(seconds).split('')];
};

init();

let prevDate = countDown(targetDate.getTime());
const timer = setInterval(() => {
    const date = countDown(targetDate.getTime());

    if (!date) {
        clearInterval(timer);
        return;
    }

    if (prevDate) {
        prevDate.forEach((el, index) => {
            if (el != date[index]) {
                if (index === 2) return flip(numberEl[index], +date[index], 2);
                if (index === 4) return flip(numberEl[index], +date[index], 6);
                if (index === 6) return flip(numberEl[index], +date[index], 6);

                flip(numberEl[index], +date[index]);
            }
        });
    }

    prevDate = date;
}, 1000);
