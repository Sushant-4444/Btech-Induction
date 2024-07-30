let currentDay = 1;

function navigate(direction) {
    currentDay += direction;

    document.getElementById('day').innerText = `Day ${currentDay}`;
    
    document.getElementById('prev').disabled = currentDay === 1;
    document.getElementById('next').disabled = currentDay === 6;
}
