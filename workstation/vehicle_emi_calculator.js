
    function setNavLinks() {
        const navLinks = document.querySelectorAll('.nav-list a');
        const pages = [
            'dashboard.html', // Home
            'mileage_calculator.html',//mileage
            'time_speed_distance_calculator.html', // Calculator
            'vehicle_emi_calculator.html', // Vehicle EMI
            'fuel_price.html', // Fuel Price
            'compare_vehicles.html', // Vehicle Comparison
            'login_index.html' // Log In
        ];

        navLinks.forEach((link, index) => {
            if (pages[index]) {
                link.href = pages[index];
            }
        });
    }

    window.onload = setNavLinks;



function calculateEMI() {
    // Fetch input values
    let loanAmount = parseFloat(document.getElementById('loanAmount').value);
    let interestRate = parseFloat(document.getElementById('interestRate').value);
    let loanTenure = parseInt(document.getElementById('loanTenure').value);

    // Validate input
    if (isNaN(loanAmount) || isNaN(interestRate) || isNaN(loanTenure) || loanAmount <= 0 || interestRate <= 0 || loanTenure <= 0) {
        alert('Please enter valid values for loan amount, interest rate, and loan tenure.');
        return;
    }

    // Calculate monthly interest rate
    let monthlyInterestRate = interestRate / 100 / 12;

    // Calculate EMI
    let emi = (loanAmount * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, loanTenure)) / (Math.pow(1 + monthlyInterestRate, loanTenure) - 1);

    // Display result
    let emiResultContainer = document.getElementById('emiResult');
    emiResultContainer.innerHTML = `
        <div class="card">
            <div class="card-body">
                <h5 class="card-title">EMI Calculation Result</h5>
                <p class="card-text">Your Equated Monthly Installment (EMI) is ₹ ${emi.toFixed(2)}.</p>
            </div>
        </div>
    `;
}
