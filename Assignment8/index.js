import inquirer from "inquirer";
const calculator = async () => {
    inquirer
        .prompt([
        {
            type: 'input',
            name: 'num1',
            message: 'Enter the first number: ',
            validate: function (value) {
                if (isNaN(value)) {
                    return 'Please enter a valid number.';
                }
                return true;
            },
        },
        {
            type: 'input',
            name: 'num2',
            message: 'Enter the second number: ',
            validate: function (value) {
                if (isNaN(value)) {
                    return 'Please enter a valid number.';
                }
                return true;
            },
        },
        {
            type: 'list',
            name: 'operation',
            message: 'Select an operation:',
            choices: ['Addition', 'Subtraction', 'Multiplication', 'Division', 'Modulus', 'Exponent'],
        },
    ])
        .then((answers) => {
        const { num1, num2, operation } = answers;
        const a = parseFloat(num1);
        const b = parseFloat(num2);
        let result;
        switch (operation) {
            case 'Addition':
                result = a + b;
                break;
            case 'Subtraction':
                result = a - b;
                break;
            case 'Multiplication':
                result = a * b;
                break;
            case 'Division':
                if (b === 0) {
                    console.log('Error: Division by zero.');
                    return;
                }
                result = a / b;
                break;
            case 'Modulus':
                result = a % b;
                break;
            case 'Exponent':
                result = Math.pow(a, b);
                break;
            default:
                console.log('Invalid operation.');
                return;
        }
        console.log(`Result of ${operation}: ${result}`);
    });
};
calculator();
