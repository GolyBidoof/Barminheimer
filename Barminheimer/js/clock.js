const renderClock = () => {
    const leftTopBarItem = document.getElementById('leftTopBarItem');

    const timeZone = 'Europe/Berlin';

    const formatter = new Intl.DateTimeFormat([], {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        timeZone: timeZone,
    });


    // Get the current time in the desired timezone
    const currentTime = new Date();
    const formattedTime = formatter.format(currentTime);

    leftTopBarItem.innerHTML = formattedTime;
}

setInterval(renderClock, 1000);
