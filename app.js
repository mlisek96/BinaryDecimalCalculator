import BinaryCalculator from "./js/BinaryCalculator";
import DecimalCalculator from "./js/DecimalCalculator";

document.addEventListener("DOMContentLoaded", () => {
    new BinaryCalculator({
        element: document.querySelector('.binary-calculator'),
    });

    new DecimalCalculator({
        element: document.querySelector('.dec-calculator'),
    });
});


