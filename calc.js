var a=document.getElementById("1");
var b=document.getElementById("2");
var c=document.getElementById("3");
var d=document.getElementById("4");
var e=document.getElementById("5");
var f=document.getElementById("6");
var g=document.getElementById("7");
var g=document.getElementById("8");
function add() {
    return parseFloat(a.value) + parseFloat(b.value);
}

function subtract() {
    return parseFloat(c.value) - parseFloat(d.value);
}

function multiply() {
    return parseFloat(e.value) * parseFloat(f.value);
}

function divide() {
    if (parseFloat(h.value) !== 0) {
        return parseFloat(g.value) / parseFloat(h.value);
    } else {
        return 'Cannot divide by zero';
    }
}