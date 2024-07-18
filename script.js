function updateTimer() {
    const timerElement = document.getElementById('timer');
    let time = timerElement.textContent.split(':');
    let hours = parseInt(time[0]);
    let minutes = parseInt(time[1]);
    let seconds = parseInt(time[2]);

    seconds--;

    if (seconds < 0) {
        seconds = 59;
        minutes--;
        if (minutes < 0) {
            minutes = 59;
            hours--;
            if (hours < 0) {
                clearInterval(timerInterval);
                timerElement.textContent = "00:00:00";
                return;
            }
        }
    }

    timerElement.textContent = 
        (hours < 10 ? "0" + hours : hours) + ":" + 
        (minutes < 10 ? "0" + minutes : minutes) + ":" + 
        (seconds < 10 ? "0" + seconds : seconds);
}

const timerInterval = setInterval(updateTimer, 1000);