var form = document.querySelector(".registerForm");
console.log(form);
var select = document.querySelector(".select");
console.log(select);
var par = document.querySelector(".result");

form.onsubmit = function (e) {
    e.preventDefault();
    var element = e.target.elements;
    var input = {
        mony: element["amount"].value,
        sel: element["exchange"].value,
    };

    var result;
    if (input.sel == "dollar")
        result = input.mony * 0.27;
    else if (input.sel == "dinar")
        result = input.mony * 0.19;
    else  
        result = input.mony

    par.textContent = "Result = " + result;
};
