export const getLineTotal = function(price, quantity) {
    return Number(price * quantity).toFixed(2);
};

export const findProduct = function(crystals, code) {
    for(let i = 0; i < crystals.length; i++) {
        const crystal = crystals[i];
        if(crystal.code === code) {
            return crystal;
        }

        return null;
    }
    
};