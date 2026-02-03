
// Select one of the Password versions to test

// import { Password } from '../src/BugDoesNotHash'
// import { Password } from '../src/BugDoesNotTrim'
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
    const password = "ValidPassword123";

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

    test('getPasswordHash Should Not Return Plain Text Password', () => {
        const p = new Password(password);
        // Vi förväntar oss att den sparade hashen INTE är samma som klartexten
        expect(p.getPasswordHash()).not.toBe(password);
    });

    test('isPasswordSame Should Return False For Different Passwords', () => {
        const p1 = new Password("FirstPassword123");
        const p2 = new Password("SecondPassword123");
        expect(p1.isPasswordSame(p2)).toBe(false);
    });
    
    test('isPasswordSame Should Throw Error For Invalid Argument', () => {
        const p1 = new Password("ValidPassword123");
        expect(() => {
            p1.isPasswordSame("Inte ett Password-objekt");
        }).toThrow("Invalid argument");
    });
});