import Calculator from "./Calculator";

class DecCalculator extends Calculator {
    changeNumber(root) {
        const input = root.firstElementChild;
        input.contentEditable = true;
        input.focus();
    }

    add(numbersX, numbersY) {
        const sumNumbers = [];
        for (let i = numbersX.length - 1; i >= 0; i--) {
            let sum = numbersX[i] + numbersY[i] + sumNumbers[i];
            // const sum = typeof sumNumbers[i] === "undefined" ? sumRows : sumRows + sumNumbers[i];
            if (sum > 9) {
                sumNumbers[i] = sum % 10;
                sumNumbers[i - 1] = 1;
            } else {
                sumNumbers[i] = sum;
            }
        }
        return sumNumbers
    }

    checkNumber() {
        super.checkNumber();
        return this.resultNumberArray.every(el => {
            return typeof el === 'number' && el <10 && el >= 0;
        });
    }

    initEvents() {
        super.initEvents();
        this.$calculatorDOMElement.querySelector('.operator-bar').addEventListener('click', () => {

        })
    }


}

export default DecCalculator;