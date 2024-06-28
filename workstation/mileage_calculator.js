




document.addEventListener('DOMContentLoaded', function() {
    const calculateButton = document.getElementById('calculateMileage');
    const distanceInput = document.getElementById('distance');
    const fuelAmountInput = document.getElementById('fuelAmount');
    const fuelTypeSelect = document.getElementById('fuelType');
    const fuelPriceInput = document.getElementById('fuelPrice');
    const mileageResultDisplay = document.getElementById('mileageResult');

    calculateButton.addEventListener('click', function() {
        const distance = parseFloat(distanceInput.value);
        const fuelAmount = parseFloat(fuelAmountInput.value);
        const fuelPrice = parseFloat(fuelPriceInput.value);
        const fuelType = fuelTypeSelect.value;

        if (isNaN(distance) || isNaN(fuelAmount) || isNaN(fuelPrice)) {
            alert('Please enter valid numbers for all fields.');
            return;
        }

        if (fuelAmount <= 0) {
            alert('Fuel amount must be greater than zero.');
            return;
        }

        const mileage = distance / fuelAmount;
        const costPerKm = fuelPrice / mileage;

        mileageResultDisplay.innerHTML = `Mileage: ${mileage.toFixed(2)} km/l<br>Cost per km: $${costPerKm.toFixed(2)} (${fuelType})`;
    });
});
