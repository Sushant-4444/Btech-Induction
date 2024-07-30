let currentDay = 1;

function navigate(direction) {
    currentDay += direction;

    document.getElementById('day').innerText = `Day ${currentDay}`;
    
    document.getElementById('prev').disabled = currentDay === 1;
    document.getElementById('next').disabled = currentDay === 6;

    for (let i = 1; i <= 6; i++) {
        document.getElementById(`day${i}`).style.display = (i === currentDay) ? 'flex' : 'none';
    }
}
