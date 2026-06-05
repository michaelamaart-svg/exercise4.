function validateInput(input) {
    if (input === null || input === undefined || input === "") {
        throw new Error("Your input cannot be empty");
    }

    if (isNaN(input)) {
        throw new Error("Your input must be a number");
    }

    return Number(input);
}

function demonstrateErrors(input) {
    try {
        const number = validateInput(input);

        if (number < 0) {
            throw new RangeError("The number cannot be negative");
        }

        if (number === 0) {
            throw new Error("The number cannot be zero");
        }

        console.log("Valid number:", number);

    } catch (error) {
        console.log(`${error.name}: ${error.message}`);

    } finally {
        console.log("Processed has been completed :", input);
    }
}

const StringUtils = {
    reverse(str) {
        return str.split("").reverse().join("");
    },

    capitalize(str) {
        return str[0].toUpperCase() + str.slice(1);
    },

    isEmpty(str) {
        return str.trim().length === 0;
    }
};

const ArrayUtils = {
    findMax(numbers) {
        return Math.max(...numbers);
    },

    sum(numbers) {
        return numbers.reduce((total, number) => total + number, 0);
    },

    contains(numbers, value) {
        return numbers.includes(value);
    }
};

demonstrateErrors("abc");
demonstrateErrors(-9);
demonstrateErrors(20);

console.log(StringUtils.reverse("Good day"));
console.log(StringUtils.capitalize("michaela"));
console.log(StringUtils.isEmpty(""));

const numbers = [9, 4, 6, 2];

console.log(ArrayUtils.findMax(numbers));
console.log(ArrayUtils.sum(numbers));
console.log(ArrayUtils.contains(numbers, 2));