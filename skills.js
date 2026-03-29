function calculateNumbers(var1, var2) {
    if (typeof var1 !== 'number' || typeof var2 !== 'number' || Number.isNaN(var1) || Number.isNaN(var2)) {
        throw new TypeError('Both inputs must be valid numbers.');
    }

    return var1 + var2;
}

module.exports = {
    calculateNumbers,
};