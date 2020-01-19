const config = require("../lib/config");
const main = require("../lib/main");

describe("main test", function () {
    it("check convert test", function () {
        config.forEach(item => {
            expect(main.convert(item.key)).toEqual(item.value);
        });
    });

    it("check reverse test", function () {
        config.forEach(item => {
            expect(main.reverse(item.value)).toEqual(item.key);
        });
    });

    it("check convert and reverse manual test", function () {
        let testText = "hello";

        expect(main.reverse(main.convert(testText))).toEqual(testText);
    });
});