module.exports = function toReadable (number) {
    const numToTwenty = [
        "",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
    ];
    const tenArray = [
        "",
        "",
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
    ];

    const str = number.toString();

    if (number === 0) {
        return "zero";
    }

    if (number < 20) {
        return numToTwenty[number];
    }

    if (number < 100) {
        return (tenArray[str[0]] + " " + numToTwenty[str[1]]).trim();
    }

    if (str.length === 3) {
        if (str[1] === "0" && str[2] === "0") {
            return numToTwenty[str[0]] + " hundred";
        } else {
            return (
                numToTwenty[str[0]] +
                " hundred " +
                toReadable(+(str[1] + str[2]))
            );
        }
    }

    if (str.length === 4) {
        if (
            str[1] === "0" &&
            str[2] === "0" &&
            str[3] === "0"
        ) {
            return numToTwenty[str[0]] + " thousand";
        } else {
            return (
                numToTwenty[str[0]] +
                " thousand " +
                numToTwenty[str[1]] +
                " hundred " +
                toReadable(+(str[2] + str[3]))
            );
        }
    }
}


