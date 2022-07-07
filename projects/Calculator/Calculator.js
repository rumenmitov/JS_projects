window.onload = function() {

    var brain = {
        class_num: document.getElementsByClassName("num"),
        class_operator: document.getElementsByClassName("sign"),
        id_ans: document.getElementById("ans"),
        id_clr: document.getElementById("clr"),
        output: document.getElementById("output"),
        Lock: false,
        Num1: "",
        Num2: "",
        operator: "+"
    };

    module(brain);

}

function module(brain) {
    for (var i = 0; i < brain.class_num.length; i++) {
        brain.class_num[i].onclick = function(eventObj) {
            if (brain.Lock === false) {
                brain.Num1 = brain.Num1 + eventObj.target.innerHTML;
                brain.output.innerHTML = brain.Num1;
            } else if (brain.Lock === true) {
                brain.Num2 = brain.Num2 + eventObj.target.innerHTML;
                brain.output.innerHTML = brain.Num2;
            }
        }
    }

    for (var j = 0; j < brain.class_operator.length; j++) {
        brain.class_operator[j].onclick = function(eventObj) {
            if (brain.Lock) {
                brain.Lock = false;
            } else {
                brain.Lock = true;
            }
            brain.operator = eventObj.target.innerHTML;
            brain.output.innerHTML = brain.operator;
        }
    }

    brain.id_ans.onclick = function() {      
        if (brain.operator === "+") {
            brain.output.innerHTML = parseFloat(brain.Num1) + parseFloat(brain.Num2);
        }
        if (brain.operator === "-") {
            brain.output.innerHTML = parseFloat(brain.Num1) - parseFloat(brain.Num2);
        }
        if (brain.operator === "*") {
            brain.output.innerHTML = parseFloat(brain.Num1) * parseFloat(brain.Num2);
        }
        if (brain.operator === "/") {
            brain.output.innerHTML = parseFloat(brain.Num1) / parseFloat(brain.Num2);
        }

    }

    brain.id_clr.onclick = function() {
        brain.output.innerHTML = "Output";
        brain.Lock = false;
        brain.Num1 = "";
        brain.Num2 = "";
    }
}









