// routes/computation.js
const express = require('express');
const router = express.Router();

// Last digit of your ID determines which function to use
const lastDigitOfId = 1;  // For example, this uses Math.log2

// Math functions based on ID's last digit
const mathFunctions = {
    0: Math.log,
    1: Math.log2,
    2: Math.cosh,
    3: Math.floor,
    4: Math.sin,
    5: Math.cos,
    6: Math.tan,
    7: Math.exp,
    8: Math.sqrt,
    9: Math.abs
};

// Define the computation route
router.get('/', (req, res) => {
    // Get x from the query parameter, or generate a random value
    let x = req.query.x ? parseFloat(req.query.x) : Math.random() * 10;

    // Select the math function based on last digit of ID
    const selectedFunction = mathFunctions[lastDigitOfId];

    // Apply the function to x and generate the result
    let y;
    try {
        y = selectedFunction(x);
    } catch (error) {
        return res.status(500).send('Error applying function: ' + error.message);
    }

    // Send the result in the required format
    res.send(`[${selectedFunction.name}] applied to [${x}] is [${y}]`);
});

module.exports = router;
