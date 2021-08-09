const colors = [
    '#FFFFFF',
    '#2196F3',
    '#4CAF50',
    '#FF9800',
    '#009688',
    '#795548',
];

let colorSwitch = null;

const refs = {
    btnStart: document.querySelector('[data-action="start"]'),
    btnStop: document.querySelector('[data-action="stop"]'),
};

refs.btnStart.addEventListener('click', btnStartChangeThemeBody);

refs.btnStop.addEventListener('click', btnStopChangeThemeBody);

function btnStartChangeThemeBody() {
    changeBtnStatus(false, true);
    refs.btnStart.classList.add('is-active');

    colorSwitch = setInterval(() => {
        document.body.style.backgroundColor =
            colors[randomIntegerFromInterval(0, colors.length - 1)];
    }, 1000);
}

function btnStopChangeThemeBody() {
    changeBtnStatus(true, false);
    clearInterval(colorSwitch);
    refs.btnStart.classList.remove('is-active');
}

function changeBtnStatus(remove, add) {
    refs.btnStart.disabled = add;
    refs.btnStop.disabled = remove;
}

function randomIntegerFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
