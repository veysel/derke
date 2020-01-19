const config = require("./config");

const convert = (text) => {
    text = text.toString();
    let resultText = "";

    text.split("").forEach(elementText => {
        let tempText = config.filter(item => item.key == "-")[0].value;

        config.forEach(elementStatic => {
            if (elementText === elementStatic.key) {
                tempText = elementStatic.value;
            }
        });

        resultText += tempText;
    });

    return resultText;
};

const reverse = (text) => {
    text = text.toString();
    let countValue = config[0].value.length;

    if (text.length % countValue === 0) {
        let maxCount = text.length / countValue;
        let resultText = "";

        for (let index = 0; index < maxCount; index++) {
            let tempText = text.substring(index * countValue, (index * countValue) + countValue);
            let tempResultText = "-";

            config.forEach(element => {
                if (tempText === element.value) {
                    tempResultText = element.key;
                }
            });

            resultText += tempResultText;
        }

        return resultText;
    } else {
        return new Error("Message : String length wrong !");
    }
};

module.exports = {
    convert: convert,
    reverse: reverse
}