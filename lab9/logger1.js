class Logger {
    constructor() {
      this.LOG_LEVELS = {
        INFO: 'info',
        WARNING: 'warning',
        ERROR: 'error',
      };
      
      this.logLevel = this.LOG_LEVELS.INFO;
    }
  
    setLogLevel(level) {
      if (Object.values(this.LOG_LEVELS).includes(level)) {
        this.logLevel = level;
      } else {
        console.error('Unsupported log level');
      }
    }
  
    log(message, level = this.LOG_LEVELS.INFO) {
      if (Object.values(this.LOG_LEVELS).indexOf(level) >= Object.values(this.LOG_LEVELS).indexOf(this.logLevel)) {
        console.log(`[${level.toUpperCase()}] ${message}`);
      }
    }
  }
  
  module.exports = Logger;