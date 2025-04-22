const chai = require("chai");
const expect = chai.expect;

const { Word } = require("../class");

describe("Word", function () {
  let word

  describe("Word constructor function", function () {
    beforeEach(() => {
      word = new Word("word")
    })

    it('should have a "word" property', function () {
      expect(word.word).to.exist;
    });
  
    it('should set the "word" property when a new word is created', function () {
      expect(word.word).to.equal("word")
    });
  });

  describe("removeVowels function", function () {
    it("should return a the word with all vowels removed", function () {
      let res = word.removeVowels()
      expect(res).to.equal("wrd")
    });
  });

  describe("removeConsonants function", function () {
    it("should return the word with the consonants removed", function () {
      let res = word.removeConsonants()
      expect(res).to.equal("o")
    });
  });
  
  describe("pigLatin function", function () {
    it("should return the word converted to pig latin", function () {
      let res = word.pigLatin()
      expect(res).to.equal("ordway")
    });
  });
  
});