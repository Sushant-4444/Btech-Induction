let currentDay = 1;
const dates = ["05/08/24", "06/08/24", "07/08/24", "08/08/24", "09/08/24", "10/08/24"];

function navigate(direction) {
    currentDay += direction;

    document.getElementById('day').innerText = `Day ${currentDay} (${dates[currentDay - 1]})`;

    document.getElementById('prev').disabled = currentDay === 1;
    document.getElementById('next').disabled = currentDay === 6;

    for (let i = 1; i <= 6; i++) {
        document.getElementById(`day${i}`).style.display = (i === currentDay) ? 'flex' : 'none';
    }
}
