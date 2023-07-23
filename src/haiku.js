export default function Haiku(line1, line2, line3) {
        this.line1 = line1;
        this.line2 = line2;
        this.line3 = line3;
    }

Haiku.prototype.makeArray = function() {
    const array1 = this.line1.split(" ");
    const array2 = this.line2.split(" ");
    const array3 = this.line3.split(" ");
    this.words1 = array1;
    this.words2 = array2;
    this.words3 = array3;
};

Haiku.prototype.countSyllables = function(array) {
    let syllableCount = 0;

    array.forEach(function(word) {
        const singleVowel = word.match(/[aeiou]/gi);
        const silentE = word.match(/e$/i);
        const diphthong = word.match(/ai|ae|ao|au|ea|ei|eo|eu|ia|ie|io|iu|oa|oe|oi|ou|ua|ue|ui|uo/gi);
        const onlyY = !singleVowel && word.match(/[y]/i);
        const endsInEd = 
        const endsInEs = silentE + s;
        if (singleVowel || silentE || diphthong || onlyY) {
            syllableCount++;
        }
    });
    return syllableCount;
}
