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

Haiku.prototype.countVowels = function (array1, array2, array3) {
    let vowelCountingArray1 = [];
    let vowelCountingArray2 = [];
    let vowelCountingArray3 = [];
    for (let i = 0; i < array1.length; i++) {
        let vowelCount = array1[i].match(/[aeiou]/gi).length;
        vowelCountingArray1.push(vowelCount);
    }
    for (let i = 0; i < array2.length; i++) {
        let vowelCount = array2[i].match(/[aeiou]/gi).length;
        vowelCountingArray2.push(vowelCount);
    }
    for (let i = 0; i < array3.length; i++) {
        let vowelCount = array3[i].match(/[aeiou]/gi).length;
        vowelCountingArray3.push(vowelCount);
    }
    this.vowelCountArray1 = vowelCountingArray1;
    this.vowelCountArray2 = vowelCountingArray2;
    this.vowelCountArray3 = vowelCountingArray3;
}
Haiku.prototype.countSyllables = function(array) {
    let syllableCount = 0

    array.forEach(function(count) {
        if (count === 1) {
            syllableCount++
        }
    });

    return syllableCount;

}



