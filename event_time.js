document.addEventListener('DOMContentLoaded', function() {
    function showDate() {
        document.getElementById('demo').innerHTML = new Date();
    }
    window.showDate = showDate; // Expose the function to the global scope
});
