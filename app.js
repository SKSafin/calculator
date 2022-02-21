var sum = 0, num = 0, syntax = "", syntaxToPrint = "";
function printsyntax() {
    document.getElementById("syntax-value").innerText = syntaxToPrint;
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
            syntax = "";
            syntaxToPrint = "";
            sum = "";
            num = "";
            printsyntax();
            printOutput(sum);
        }
        else if(x.id == "backspace") {
            let output = reverseFormat(getOutput());
            output = output.toString().slice(0, output.length - 1);
            num = num.toString().slice(0, num.length - 1);
            printOutput(output);
        }
        else if(x.id == "equals") {
            let output = reverseFormat(getOutput());
            sum = eval(syntax + output);
            syntax = "";
            syntaxToPrint = "";
            printsyntax();
            printOutput(sum);
            num = "";
        }else {
            let output = reverseFormat(getOutput());
            if(output == 0 && syntax != ""){
                syntax = syntax.slice(0, syntax.length-1) + x.id;
                syntaxToPrint = syntaxToPrint.slice(0, syntaxToPrint.length-1) + x.textContent;
                printsyntax();
            }
            else if(output != 0) {
                if(x.id == "%") {
                    let pcOutput = output/100;
                    syntax = syntax + pcOutput + "*";
                    syntaxToPrint = syntaxToPrint + output + "%";
                    output = "";
                    printsyntax();
                    printOutput(output);
                    num = "";
                }else {
                    syntax = syntax + output + x.id;
                    syntaxToPrint = syntaxToPrint + output + x.textContent;
                    output = "";
                    printsyntax();
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
