function number(element){
    element.onclick = (e) => {
        const elem = e.target;
        document.getElementById("arithmetic").value += elem.value;
    }
}

function evaluateButton(element){
    element.onclick = (e) => {
        const inputText = document.getElementById("arithmetic");
        inputText.value = eval(inputText.value);
    }
}

function clr(element){
    element.onclick = (e) => {
        const inputText = document.getElementById("arithmetic");
        inputText.value = "";
    }
}

function addListenerToInputs() {
    console.log('nakadi');
    const numbers = "0123456789+-*/.";
    document.querySelectorAll('input[type=button]').forEach(element => {
        if(numbers.indexOf(element.value) > -1){
            number(element);
        }
        else if(element.value == "="){
            evaluateButton(element);
        }
        else if(element.value == "c"){
            clr(element);
        }
    });
}

(function () {
    addListenerToInputs();
})();