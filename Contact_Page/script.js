document.addEventListener('DOMContentLoaded', function() {
    const readMoreBtn = document.getElementById('readMoreBtn1');
    const secondPartDirection = document.querySelector('.second-part-direction');

    readMoreBtn.addEventListener('click', function() {
        secondPartDirection.style.display = 'block';
        readMoreBtn.style.display = 'none';
    });
});