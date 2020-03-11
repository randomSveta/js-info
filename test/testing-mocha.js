// https://javascript.info/testing-mocha#what-s-wrong-in-the-test
//should have describe and separate tests for better clarity

describe("Raises x to power n", function () {

    it("Raises 5 to the power 1", function () {
        assert.equal(pow(5, 1), 5);
    });

    it("Raises 5 to the power 1", function () {
        assert.equal(pow(5, 2), 25);
    });

    it("Raises x to the power 1", function () {
        assert.equal(pow(5, 3), 125);
    });
});

