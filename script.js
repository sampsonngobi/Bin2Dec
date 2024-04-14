// Get the button element and attach an event listener
var button = document.getElementById("convert");
button.addEventListener("click", function() {
    // Get the input value
    let input = document.getElementById("binary").value;

    // Validate if the input consists of only 0s and 1s
    if (!/^[01]+$/.test(input)) {
        alert("Please enter a binary number consisting of only 0s and 1s.");
        return;
    }

    // Ensure input is 8 digits by prepending with leading zeros if necessary
    // while (input.length < 8) {
    //     input = "0" + input;
    // }

    // Check if the input exceeds 8 digits
    if (input.length !== 8) {
        alert("Please enter a binary number with 8 digits.");
        return;
    }
    
    // Convert the binary to decimal
    let decimal = 0;
    let power = 0;

    for (let i = input.length - 1; i >= 0; i--) {
        decimal += parseInt(input[i]) * Math.pow(2, power);
        power++;
    }

    // Display the result
    var output = document.getElementById("result");
    output.textContent = `Decimal Equivalent: ${decimal}`;
});
