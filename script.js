function calculateFuel() {

    let fuelPrice = parseFloat(document.getElementById("fuelPrice").value);
    let mileage = parseFloat(document.getElementById("mileage").value);
    let distance = parseFloat(document.getElementById("distance").value);

    if (isNaN(fuelPrice) || isNaN(mileage) || isNaN(distance)) {
        document.getElementById("result").innerHTML =
        "<h3>Please fill all fields.</h3>";
        return;
    }

    let fuelNeeded = distance / mileage;

    let totalCost = fuelNeeded * fuelPrice;

    let costPerKm = totalCost / distance;

    document.getElementById("result").innerHTML = `
        <h3>Result</h3>

        <p><strong>Fuel Required:</strong> ${fuelNeeded.toFixed(2)} L</p>

        <p><strong>Total Cost:</strong> ₹${totalCost.toFixed(2)}</p>

        <p><strong>Cost Per KM:</strong> ₹${costPerKm.toFixed(2)}</p>
    `;

}