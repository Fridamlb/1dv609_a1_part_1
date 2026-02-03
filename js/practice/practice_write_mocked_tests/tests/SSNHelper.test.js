import { SSNHelper } from '../src/bugs/BuggySSNHelperAllowDayUpTo30'



describe('SSNHelpe Tests', () => {

    test('Should allow 31 days (BuggySSNHelperAllowDayUpTo30 should fail)', () => {
        //1. Arrange - Flrbered
        const helper = new SSNHelper()
        const inputDay = "31"

        //2. Act - Utför
        const result = helper.isValidDay(inputDay)

        //3. Asser - Kontrollera
        expect(result).toBe(true);
    });

    //Add your tests here
});