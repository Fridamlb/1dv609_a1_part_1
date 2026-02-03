
// Select one of the Password versions to test

// import { Password } from '../src/BugDoesNotHash'
import { Password } from '../src/BugDoesNotTrim'
// import { Password } from '../src/BugisPasswordAlwaysSame'
// import { Password } from '../src/BugMissingNumberCheck'
// import { Password } from '../src/BugMissingPasswordCheck'
// import { Password } from '../src/BugNeverContainsNumbers'
// import { Password } from '../src/BugToShortPassword'
// import { Password } from '../src/BugVeryShort'
// import { Password } from '../src/BugWrongHashingAlgorithm'
// import { Password } from '../src/BugWrongMessage'
// import { Password } from '../src/Correct'

describe('Password class, test suite', () => {
    //put constants here to increase readability
    const passwordWithoutNumber = 'SecretPassword';
    const pw = "ValidPassword123";
    const passwordTooShortWithSpaces = "  1234567890  ";

    test('Constructor Should Throw error for password without numbers', () => {
        expect(() => {
            new Password(passwordWithoutNumber);
        }).toThrow();
    });

    test('isPasswordSame Should Return True For Identical Passwords', () => {

        const p1 = new Password(pw);
        const p2 = new Password(pw);

        expect(p1.isPasswordSame(p2)).toBe(true);
    });

    test('constructor Should Throw Error For Short Passwords After Trimming', () => {
        expect(() => {
            new Password(passwordTooShortWithSpaces);
        }).toThrow("Too short password");
    });
});