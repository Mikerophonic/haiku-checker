import Haiku from './../src/haiku.js';

describe('Haiku', () => {
    let haiku;
    beforeEach(() => {
        haiku = new Haiku();
    });
    test('It should correctly make a haiku object three line properties', () => {
        haiku = new Haiku("line1", "line2", "line3");
        expect(haiku.line1).toEqual("line1");
        expect(haiku.line2).toEqual("line2");
        expect(haiku.line3).toEqual("line3");
    });
    test('It should split each line into an array of words', () => {
        haiku = new Haiku("line one", "line two", "line three");
        haiku.makeArray();
        expect(haiku.words1).toEqual(["line", "one"]);
        expect(haiku.words2).toEqual(["line", "two"]);
        expect(haiku.words3).toEqual(["line", "three"]);
    });
    test('It should count the vowels in each word', () => {
        haiku = new Haiku("a the plant", "ton cat", "dog rat sat tin");
        haiku.makeArray();
        haiku.countVowels(haiku.words1, haiku.words2, haiku.words3);
        expect(haiku.vowelCountArray1).toEqual([1, 1, 1]);
        expect(haiku.vowelCountArray2).toEqual([1, 1]);
        expect(haiku.vowelCountArray3).toEqual([1, 1, 1, 1]);

    });
    test('It should count one vowel words and add it to syllable counter', () => {
        haiku = new Haiku("a the plant", "ton cat", "dog rat sat tin");
        haiku.makeArray();
        haiku.countVowels(haiku.words1, haiku.words2, haiku.words3);
        haiku.countSyllables()
    });
});