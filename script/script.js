$(document).ready(function() {
    let currentInput = "";
    let previousInput = "";
    let operator = null;

    function updateDisplay(value) {
        $("#result").val(value);
    }

    $(".btn").on("click", function() {
        const value = $(this).data("value");

        if (value === "C") {
            currentInput = "";
            previousInput = "";
            operator = null;
            updateDisplay("");
            return;
        }

        if (value === "=") {
            if (operator && previousInput !== "") {
                try {
                    currentInput = eval(previousInput + operator + currentInput).toString();
                } catch (e) {
                    currentInput = "Error";
                }
                operator = null;
                previousInput = "";
                updateDisplay(currentInput);
            }
            return;
        }

        if (["+", "-", "*", "/"].includes(value)) {
            if (currentInput !== "") {
                if (previousInput === "") {
                    previousInput = currentInput;
                    currentInput = "";
                } else {
                    try {
                        previousInput = eval(previousInput + operator + currentInput).toString();
                    } catch (e) {
                        previousInput = "Error";
                    }
                }
                operator = value;
                updateDisplay(previousInput);
            }
            return;
        }

        currentInput += value;
        updateDisplay(currentInput);
    });
});
