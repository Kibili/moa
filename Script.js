document.getElementById('tracking-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const reference = e.target.querySelector('input').value;
    const trackingStatus = document.getElementById('tracking-status');
    trackingStatus.textContent = `Tracking info for reference ${reference} is currently unavailable.`;
});
