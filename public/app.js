function updateClock() {
    const now = new Date();
    let hours = now.getHours();
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');

    const amPm = hours >= 12 ? '' : '';
    hours = hours % 12 || 12;

    const formattedHours = String(hours).padStart(2, '');

    const timeString = `${formattedHours}:${minutes}:${seconds} ${amPm}`;
    document.getElementById('clock').textContent = timeString;
}

setInterval(updateClock, 1000);

updateClock();