// This file contains JavaScript code for interactivity on the presentation webpage.

document.addEventListener('DOMContentLoaded', function() {
    const demoButton = document.getElementById('demo-button');
    const demoModal = document.getElementById('demo-modal');
    const closeModal = document.getElementById('close-modal');

    demoButton.addEventListener('click', function() {
        demoModal.style.display = 'block';
    });

    closeModal.addEventListener('click', function() {
        demoModal.style.display = 'none';
    });

    window.addEventListener('click', function(event) {
        if (event.target === demoModal) {
            demoModal.style.display = 'none';
        }
    });
});