const LOG_LEVELS = {
    INFO: 'info',
    WARNING: 'warning',
    ERROR: 'error',
};
  
let logLevel = LOG_LEVELS.INFO;
  
function setLogLevel(level) {
    if (Object.values(LOG_LEVELS).includes(level)) {
        logLevel = level;
    } else {
        console.error('Unsupported log level');
    }
}
  
function log(message, level = LOG_LEVELS.INFO) {
    if (Object.values(LOG_LEVELS).indexOf(level) >= Object.values(LOG_LEVELS).indexOf(logLevel)) {
        console.log(`[${level.toUpperCase()}] ${message}`);
    }
}
  
module.exports = {
    LOG_LEVELS,
    setLogLevel,
    log,
};