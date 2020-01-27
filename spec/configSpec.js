const config = require("../lib/config");

describe("config test", function () {
    it("check length key", function () {
        let count = config[0].key.length;
        let resultCount = config.filter(item => item.key.length != count).length;

        expect(resultCount).toEqual(0);
    });

    it("check length value", function () {
        let count = config[0].value.length;
        let resultCount = config.filter(item => item.value.length != count).length;

        expect(resultCount).toEqual(0);
    });

    it("check key diff", function () {
        config.forEach(item => {
            let keyCount = config.filter(x => x.key == item.key).length;

            expect(keyCount).toEqual(1);
        });
    });

    it("check value diff", function () {
        config.forEach(item => {
            let valueCount = config.filter(x => x.value == item.value).length;
            
            expect(valueCount).toEqual(1);
        });
    });
});