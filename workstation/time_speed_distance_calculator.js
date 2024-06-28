function calculateTime() {
    // Fetch input values
    let distance = parseFloat(document.getElementById('distance').value);
    let speed = parseFloat(document.getElementById('speed').value);

    // Validate input
    if (isNaN(distance) || isNaN(speed) || distance <= 0 || speed <= 0) {
        alert('Please enter valid values for distance and speed.');
        return;
    }

    // Calculate time
    let time = distance / speed;

    // Display result
    let resultContainer = document.getElementById('result');
    resultContainer.innerHTML = `
        <div class="card">
            <div class="card-body">
                <h5 class="card-title">Result</h5>
                <p class="card-text">Time taken to cover ${distance} kilometers at ${speed} km/h is ${time.toFixed(2)} hours.</p>
            </div>
        </div>
    `;
}
