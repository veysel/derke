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
        let checkValue = true;

        config.forEach(item => {
            if (config.filter(x => x.key == item.key).length > 1) {
                checkValue = false;
            }
        });

        expect(checkValue).toEqual(true);
    });

    it("check value diff", function () {
        let checkValue = true;

        config.forEach(item => {
            if (config.filter(x => x.value == item.value).length > 1) {
                checkValue = false;
            }
        });

        expect(checkValue).toEqual(true);
    });
});