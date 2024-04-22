// TASK 1
try {
    const logger = require('./logger');

    logger.setLogLevel(logger.LOG_LEVELS.WARNING);

    logger.log('INFO message', logger.LOG_LEVELS.INFO);
    logger.log('WARNING message', logger.LOG_LEVELS.WARNING);
    logger.log('ERROR message', logger.LOG_LEVELS.ERROR);
} catch (error) {
    console.error('Error during logging:', error);
}


// TASK 2
try {
    const Logger = require('./logger1');

const logger = new Logger();

logger.setLogLevel(logger.LOG_LEVELS.WARNING);

console.log("\n")
logger.log('INFO message', logger.LOG_LEVELS.INFO);
logger.log('WARNING message', logger.LOG_LEVELS.WARNING);
logger.log('ERROR message', logger.LOG_LEVELS.ERROR);
} catch (error) {
    console.error('Error during logging:', error);
}


// TASK 3
const CryptoJS = require("crypto-js");

function encryptMessage(message, secretKey) {
    const encryptedMessage = CryptoJS.AES.encrypt(message, secretKey).toString();
    return encryptedMessage;
}

function decryptMessage(encryptedMessage, secretKey) {
    const decryptedBytes = CryptoJS.AES.decrypt(encryptedMessage, secretKey);
    const decryptedMessage = decryptedBytes.toString(CryptoJS.enc.Utf8);
    return decryptedMessage;
}

const secretKey = "superSecretKey";
const originalMessage = "Test cypher";

console.log("\n")
const encryptedMessage = encryptMessage(originalMessage, secretKey);
console.log("Encrypted Message:", encryptedMessage);

const decryptedMessage = decryptMessage(encryptedMessage, secretKey);
console.log("Decrypted Message:", decryptedMessage);


// TASK 4
const encryptionModule = require('./cypher');
const logger = require('./logger');
logger.setLogLevel(logger.LOG_LEVELS.INFO);

const messageToEncrypt = 'Test caesar';
const shiftValue = 3;

console.log("\n")
const encrypted = encryptionModule.encrypt(messageToEncrypt, shiftValue);
console.log(`Encrypted: ${messageToEncrypt} => ${encrypted}`);

const decrypted = encryptionModule.decrypt(encrypted, shiftValue);
console.log(`Decrypted: ${encrypted} => ${decrypted}`);


// TASK 5
const randomModule = require('./randomModule');

console.log("\n")
const randomInt = randomModule.getRandomInt(1, 10);
console.log('Random int:', randomInt);

const randomIntegersArray = randomModule.getRandomIntegersArray(5, 1, 10);
console.log('Randon int array:', randomIntegersArray);

const textFragments = ['test', 'module', 'JS', 'random'];
const randomTextFragment = randomModule.getRandomTextFragment(textFragments);
console.log('Random  part:', randomTextFragment);