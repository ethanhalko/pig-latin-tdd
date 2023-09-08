import { englishToPigLatin } from '../PigLatin';
import assert from 'assert';

describe('PigLatin.js', () => {
  describe('englishToPigLatin()', () => {
    describe('INVALID cases', () => {
      it('returns empty string when passed null', () => {
        const word = null;
        const result = englishToPigLatin(word);
        const expected = '';
        assert.equal(result, expected);
      });

      it('returns empty string when passed empty string', () => {
        const word = '';
        const result = englishToPigLatin(word);
        const expected = '';
        assert.equal(result, expected);
      });

      it('returns empty string when passed multiple whitespaces', () => {
        const word = '   ';
        const result = englishToPigLatin(word);
        const expected = '';
        assert.equal(result, expected);
      });

      it('returns unchanged string when word begins with a number', () => {
        const word = '1way';
        const result = englishToPigLatin(word);
        assert.equal(result, word);
      });
    });

    describe('VALID cases', () => {
      describe('single word', () => {
        describe('begins with lowercase consonant', () => {
          it(`moves first letter to back, appends 'ay'`, () => {
            const word = 'something';
            const result = englishToPigLatin(word);
            const expected = 'omethingsay';
            assert.equal(result, expected);
          });
        });

        describe('begins with lowercase vowel', () => {
          it(`appends 'ay'`, () => {
            const word = 'owl';
            const result = englishToPigLatin(word);
            const expected = 'owlay';
            assert.equal(result, expected);
          });
        });

        describe('begins with whitespace', () => {
          it(`removes whitespace, moves first letter to back, appends 'ay'`, () => {
            const word = '  something';
            const result = englishToPigLatin(word);
            const expected = 'omethingsay';
            assert.equal(result, expected);
          });
        });

        describe('ends with whitespace', () => {
          it(`removes whitespace, moves first letter to back, appends 'ay'`, () => {
            const word = 'something  ';
            const result = englishToPigLatin(word);
            const expected = 'omethingsay';
            assert.equal(result, expected);
          });
        });

        describe('begins with uppercase consonant', () => {
          it(`moves first letter to back, appends 'ay'`, () => {
            const word = 'Something';
            const result = englishToPigLatin(word);
            const expected = 'Omethingsay';
            assert.equal(result, expected);
          });
        });

        describe('begins with uppercase vowel', () => {
          it(`appends 'ay'`, () => {
            const word = 'Owl';
            const result = englishToPigLatin(word);
            const expected = 'Owlay';
            assert.equal(result, expected);
          });
        });

        describe(`begins with uppercase 'Qu'`, () => {
          it(`moves 'qu' to back, appends 'ay'`, () => {
            const word = 'Queen';
            const result = englishToPigLatin(word);
            const expected = 'Eenquay';
            assert.equal(result, expected);
          });
        });

        describe(`begins with lowercase 'qu'`, () => {
          it(`moves 'qu' to back, appends 'ay'`, () => {
            const word = 'queen';
            const result = englishToPigLatin(word);
            const expected = 'eenquay';
            assert.equal(result, expected);
          });
        });

        describe(`begins with lowercase 'ch'`, () => {
          it(`moves 'ch' to back, appends 'ay'`, () => {
            const word = 'chair';
            const result = englishToPigLatin(word);
            const expected = 'airchay';
            assert.equal(result, expected);
          });
        });

        describe(`begins with uppercase 'Ch'`, () => {
          it(`moves 'ch' to back, appends 'ay'`, () => {
            const word = 'Chair';
            const result = englishToPigLatin(word);
            const expected = 'Airchay';
            assert.equal(result, expected);
          });
        });
        describe(`begins with lowercase 'th'`, () => {
          it(`moves 'th' to back, appends 'ay'`, () => {
            const word = 'this';
            const result = englishToPigLatin(word);
            const expected = 'isthay';
            assert.equal(result, expected);
          });
        });
        describe(`begins with uppercase 'Th'`, () => {
          it(`moves 'th' to back, appends 'ay'`, () => {
            const word = 'This';
            const result = englishToPigLatin(word);
            const expected = 'Isthay';
            assert.equal(result, expected);
          });
        });
        describe(`begins with lowercase 'sch'`, () => {
          it(`moves 'sch' to back, appends 'ay'`, () => {
            const word = 'schooner';
            const result = englishToPigLatin(word);
            const expected = 'oonerschay';
            assert.equal(result, expected);
          });
        });
        describe(`begins with uppercase 'Sch'`, () => {
          it(`moves 'sch' to back, appends 'ay'`, () => {
            const word = 'Schooner';
            const result = englishToPigLatin(word);
            const expected = 'Oonerschay';
            assert.equal(result, expected);
          });
        });
        describe(`begins with lowercase 'thr'`, () => {
          it(`moves 'thr' to back, appends 'ay'`, () => {
            const word = 'three';
            const result = englishToPigLatin(word);
            const expected = 'eethray';
            assert.equal(result, expected);
          });
        });
        describe(`begins with uppercase 'Thr'`, () => {
          it(`moves 'Thr' to back, appends 'ay'`, () => {
            const word = 'Three';
            const result = englishToPigLatin(word);
            const expected = 'Eethray';
            assert.equal(result, expected);
          });
        });
        describe(`begins with uppercase 'Psy'`, () => {
          it(`moves 'Ps' to back, appends 'ay'`, () => {
            const word = 'Psychology';
            const result = englishToPigLatin(word);
            const expected = 'Ychologypsay';
            assert.equal(result, expected);
          });
        });
      });
    });
  });
});
