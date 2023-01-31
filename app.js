import { BinaryCalculator } from "./js/BinaryCalculator";
import { DecCalculator } from "./js/DecCalculator";
import './scss/style.scss';

document.addEventListener("DOMContentLoaded", () => {
    const bitCalc = new BinaryCalculator(".binary-calculator");
    const decCalc = new DecCalculator(".dec-calculator");
});


