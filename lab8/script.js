// TASK 1
class Person {
    constructor(firstName, lastName, gender, maritalStatus) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.gender = gender;
        this.maritalStatus = maritalStatus;
    }
  
    toLocaleString(locale) {
      const titles = {
        'en-US': this.gender === 'male' ? 'Mr.' : (this.maritalStatus === 'married' ? 'Mrs.' : 'Miss'),
        'de-DE': this.gender === 'male' ? 'Herr' : (this.maritalStatus === 'married' ? 'Frau' : 'Fräulein'),
        'fr-FR': this.gender === 'male' ? 'M.' : (this.maritalStatus === 'married' ? 'Mme' : 'Mlle')
      };
  
      const title = titles[locale] || titles['en-US'];
      return `${title} ${this.lastName}`;
    }
}
  
const person1 = new Person('John', 'Smith', 'male', 'married');
const person2 = new Person('John', 'Smith', 'female', 'unmarried');

console.log(person1.toLocaleString('en-US'));
console.log(person1.toLocaleString('de-DE'));
console.log(person1.toLocaleString('fr-FR'));
console.log("\n")  
console.log(person2.toLocaleString('en-US'));
console.log(person2.toLocaleString('de-DE'));
console.log(person2.toLocaleString('fr-FR'));


// TASK 2
function printNumberFormats(number) {
    const englishFormat = new Intl.NumberFormat('en-US').format(number);
    const arabicFormat = new Intl.NumberFormat('ar-EG').format(number);
    const thaiFormat = new Intl.NumberFormat('th-TH-u-nu-thai').format(number);
  
    console.log(`\nEnglish Format: ${englishFormat}`);
    console.log(`Arabic Format: ${arabicFormat}`);
    console.log(`Thai Format: ${thaiFormat}`);
}
  
printNumberFormats(3.14);
  

// TASK 3
function printDateTimeFormats(locale) {
    const dateTimeFormats = {
      'fr-FR': { dateStyle: 'full', timeStyle: 'full' },
      'zh-CN': { dateStyle: 'full', timeStyle: 'full' },
      'ar-EG': { dateStyle: 'full', timeStyle: 'full' },
      'th-TH-u-nu-thai': { dateStyle: 'full', timeStyle: 'full' }
    };
  
    const options = dateTimeFormats[locale] || dateTimeFormats['en-US'];
    const formattedDateTime = new Intl.DateTimeFormat(locale, options).format(new Date());
      
    console.log(`Formatted DateTime (${locale}): ${formattedDateTime}`);
}

console.log("\n")
printDateTimeFormats('fr-FR');
printDateTimeFormats('zh-CN');
printDateTimeFormats('ar-EG');
printDateTimeFormats('th-TH-u-nu-thai');
  

// TASK 4
function compareTexts(text1, text2, locale, caseSensitive = true) {
    const options = { sensitivity: caseSensitive ? 'case' : 'base' };
    const collator = new Intl.Collator(locale, options);
    return collator.compare(text1, text2) === 0;
}
  
const text1 = 'Hello';
const text2 = 'HELLO';

console.log("\n")
console.log(compareTexts(text1, text2, 'en-US', true));
console.log(compareTexts(text1, text2, 'en-US', false));
  

// TASK 5
function messageFormat(locale, template, ...args) {
    const translations = {
        'en-US': '{0} has {1} messages',
        'fr-FR': 'Il y a {1} messages pour {0}',
    };
  
    const translatedTemplate = translations[locale] || translations['en-US'];
  
    return translatedTemplate.replace(/{(\d+)}/g, (match, index) => {
        const argIndex = parseInt(index, 10);
        return args[argIndex] !== undefined ? args[argIndex] : match;
    });
}

console.log("\n")
const formattedMessageFR = messageFormat('fr-FR', '{0} has {1} messages', 'Mariia', 5);
console.log(formattedMessageFR); 
  
  

// TASK 6
class PaperSize {
    constructor(localization) {
        this.localization = localization || 'default';
        this.defaultSize = this.getDefaultSize();
        this.units = this.getUnits();
    }
  
    getDefaultSize() {
        const defaultSizes = {
            default: { width: 210, height: 297 },
            usa: { width: 8.5, height: 11 },
            canada: { width: 8.5, height: 11 },
        };
  
      return defaultSizes[this.localization] || defaultSizes.default;
    }
  
    getUnits() {
        const unitMap = {
            default: 'mm',
            usa: 'inch',
            canada: 'inch',
        };
  
      return unitMap[this.localization] || unitMap.default;
    }
  
    displaySize() {
        console.log(`Paper size: ${this.defaultSize.width} ${this.units} x ${this.defaultSize.height} ${this.units}`);
    }
}
  
console.log("\n")
const paperSizeForUSA = new PaperSize('usa');
paperSizeForUSA.displaySize();
  
const paperSizeForGermany = new PaperSize('germany');
paperSizeForGermany.displaySize();
  