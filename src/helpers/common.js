export const util = {
    /**
     * Generate a UUID.
     */
    generateUUID() {
        const hexDigits = "0123456789abcdef";
        const valueArray = new Uint32Array(32);
        crypto.getRandomValues(valueArray);

        let res = '';
        for (let i = 0; i < 32; i++) {
            if (i === 8 || i === 12 || i === 16 || i === 20) {
                res += '-';
            }
            if (i === 12) {
                res += '4'; // UUID version
            } else if (i === 16) {
                res += hexDigits.charAt((valueArray[i] & 0x3) | 0x8); // Bits need to start with 10
            } else {
                res += hexDigits.charAt(valueArray[i] & 0xf);
            }
        }

        return res;
    }
};