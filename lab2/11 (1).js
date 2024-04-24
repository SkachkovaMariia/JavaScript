function isJS(fileName) {
    return /^.*\.js$/.test(fileName);
}

console.log(isJS("file.js"));