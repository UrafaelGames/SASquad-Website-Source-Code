window.addEventListener('load', function() {
  
    let timeLeft = localStorage.getItem('timeLeft') ? parseInt(localStorage.getItem('timeLeft')) : 10; 

    const btnDownload = document.getElementById('download-btn');
    const timerDisplay = document.getElementById('timer');

    function updateCountdown() {
        if (timeLeft <= 0) {
            btnDownload.disabled = false;
            btnDownload.style.pointerEvents = 'auto';
            btnDownload.style.opacity = 1;
            timerDisplay.textContent = 'Available for download! :)';
            clearInterval(countdownInterval); 
        } else {
            timerDisplay.textContent = timeLeft + ' seconds';  
            timeLeft -= 1;  
            localStorage.setItem('timeLeft', timeLeft);  
        }
    }

    const countdownInterval = setInterval(updateCountdown, 1000); 
});
