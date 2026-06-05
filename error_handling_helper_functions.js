function validateInput(input) {

    if (input === null || input === undefined || input === "") {
        throw new Error("Input cannot be empty");
    }

    if (isNaN(input)) {
        throw new Error("Your Input must be a number");
    }

    return Number(input);
}

function demonstrateErrors(value) {
    try {
        const num = validateInput(value);

        if (num < 0) {
            throw new RangeError("The number cannot be negative");
        }

        if (num === 0) {
            throw new Error("The number cannot be zero");
        }

        console.log("Valid number:", num);

    } catch (error) {
        console.log(`${error.name}: ${error.message}`);

    } finally {
        console.log("Finished processing input:", value);
    }
}

const StringUtils = {
    reverse(str) {
        return str.split("").reverse().join("");
    },

    capitalize(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    },

    isEmpty(str) {
        return str.trim().length === 0;
    }
};

const ArrayUtils = {
    findMax(arr) {
        return Math.max(...arr);
    },

    sum(arr) {
        return arr.reduce((total, num) => total + num, 0);
    },

    contains(arr, value) {
        return arr.includes(value);
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