const logger = require('./logger');
const ALPHABET_SIZE = 26;

function encrypt(message, shift) {
    return message.split('').map(char => {
        if (char.match(/[a-zA-Z]/)) {
            const isUpperCase = char === char.toUpperCase();
            const baseCharCode = isUpperCase ? 'A'.charCodeAt(0) : 'a'.charCodeAt(0);
            const encryptedCharCode = (char.charCodeAt(0) - baseCharCode + shift) % ALPHABET_SIZE + baseCharCode;
            return String.fromCharCode(encryptedCharCode);
        } else {
            return char;
        }
    }).join('');
}

function decrypt(encryptedMessage, shift) {
    const decryptedMessage = encrypt(encryptedMessage, -shift);
    logger.log(`Decrypted: ${encryptedMessage} => ${decryptedMessage}`, logger.LOG_LEVELS.INFO);
    return decryptedMessage;
}

module.exports = {
    encrypt,
    decrypt,
};
