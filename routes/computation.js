const express = require('express');
const app = express();
const port = 3000;

// Replace this with your actual ID or the last digit of it
const lastDigitOfId = 2; // Example: last digit of your ID

// Math function list based on last digit of ID
const mathFunctions = {
    0: Math.log,       // Natural logarithm
    1: Math.log2,      // Base 2 logarithm
    2: Math.cosh,      // Hyperbolic cosine
    3: Math.floor,     // Rounds down to nearest integer
    4: Math.sin,       // Sine
    5: Math.cos,       // Cosine
    6: Math.tan,       // Tangent
    7: Math.exp,       // Exponential (e^x)
    8: Math.sqrt,      // Square root
    9: Math.abs        // Absolute value
};

// Endpoint for computation
app.get('/computation', (req, res) => {
    // Check if x is provided as a query parameter, else generate a random value
    let x = req.query.x ? parseFloat(req.query.x) : Math.random() * 10;
    
    // Select the function based on last digit of ID
    const selectedFunction = mathFunctions[lastDigitOfId];
    
    // Apply the selected function to x
    let y;
    try {
        y = selectedFunction(x);
    } catch (error) {
        res.status(500).send('Error applying function: ' + error.message);
        return;
    }

    // Create the response string
    const response = `[${selectedFunction.name}] applied to [${x}] is [${y}]`;
    
    // Send response
    res.send(response);
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
