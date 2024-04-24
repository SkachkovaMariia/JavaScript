function replaceWord(text, wordToReplace, replacement) {
    let words = text.split(' ');
    
    for (let i = 0; i < words.length; i++) {
        if (words[i] === wordToReplace) {
            words[i] = replacement;
        }
    }
    
    return words.join(' ');
}

let originalText = "hello world";
let newText = replaceWord(originalText, "world", "John");

console.log(newText);