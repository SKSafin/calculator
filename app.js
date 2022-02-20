var sum = 0, num = 0, historyStr = "", historyPrintStr = "";
function printHistory() {
    document.getElementById("history-value").innerText = historyPrintStr;
}
function getOutput() {
    return reverseFormat(document.getElementById("output-value").textContent);
}
function printOutput(num) {
    document.getElementById("output-value").innerText = Number(num).toLocaleString("en");
}
function reverseFormat(num) {
    return num.replace(/,/g, "");
}

const operators = document.querySelectorAll(".operator");
operators.forEach(x=> {
    x.addEventListener("click", function() {
        if(x.id == "clear") {
            historyStr = "";
            historyPrintStr = "";
            sum = "";
            num = "";
            printHistory();
            printOutput(sum);
        }
        else if(x.id == "backspace") {
            let output = reverseFormat(getOutput());
            output = output.toString().slice(0, output.length - 1);
            printOutput(output);
        }
        else {
            let output = reverseFormat(getOutput());
            if(output != 0) {
                if(x.id == "equals") {
                    sum = eval(historyStr + output);
                    historyStr = "";
                    historyPrintStr = "";
                    printHistory();
                    printOutput(sum);
                    num = "";
                }else {
                    historyStr = historyStr + output + x.id;
                    historyPrintStr = historyPrintStr + output + x.textContent;
                    output = "";
                    printHistory();
                    printOutput(output);
                    num = "";
                }
            }
        }
    })
})

const numbers = document.querySelectorAll(".number");
numbers.forEach(x => {
    x.addEventListener("click", function() {
        num = num + x.textContent;
        printOutput(num);
    })
})