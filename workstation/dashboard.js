document.addEventListener('DOMContentLoaded', function() {
    // Event listener for opening Mileage Calculator popup
    document.getElementById('openMileageCalculator').addEventListener('click', function() {
        openMileageCalculatorPopup();
    });

    // Function to open Mileage Calculator popup
    function openMileageCalculatorPopup() {
        const width = 600;
        const height = 400;
        const left = (window.innerWidth - width) / 2;
        const top = (window.innerHeight - height) / 2;
        const features = `width=${width},height=${height},top=${top},left=${left}`;

        // Open new window with Mileage Calculator form
        const mileageCalculatorWindow = window.open('mileage_calculator.html', 'Mileage Calculator', features);
    }
});
