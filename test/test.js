describe("pow", function () {

    before(() => alert("Testing started – before all tests"));
    after(() => alert("Testing finished – after all tests"));

    beforeEach(() => alert("Before a test – enter a test"));
    afterEach(() => alert("After a test – exit a test"));

    describe("raises x to power 3", function () {
        function makeTest(x) {
            let expected = x * x * x;
            it(`${x} in the power 3 is ${expected}`, function () {
                assert.equal(pow(x, 3), expected);
            });
        }
        for (let x = 1; x <= 5; x++) {
            makeTest(x);
        }
    });

    it("for negative n the result is NaN", function () {
        assert.isNaN(pow(2, -1));
    });
    it("for non-integer n the result is NaN", function () {
        assert.isNaN(pow(2, 1.5));
    });

});