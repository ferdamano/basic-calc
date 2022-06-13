function number(element){
    element.onclick = (e) => {
        const elem = e.target;
        document.getElementById("arithmetic").value += elem.value;
    }
}

function evaluateButton(element){
    element.onclick = (e) => {
        console.log("kumadi");
        const inputText = document.getElementById("arithmetic");
        inputText.value = eval(inputText.value);
    }
}

function addListenerToInputs() {
    const numbers = "0123456789+-*/.";
    document.querySelectorAll('input[type=button]').forEach(element => {
        if(numbers.indexOf(element.value) > -1){
            number(element);
        }
        else if(element.value == "="){
            evaluateButton(element);
        }
    });
}

module.exports = (function () {
    addListenerToInputs();
})();