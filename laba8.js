Add = () => {
    a = document.querySelector(".Inp").cloneNode(true);
    b = document.querySelector("#Store");
    b.appendChild(a);
};


Save = (out) => {

    Out = document.querySelector("#" + out);
    c = document.querySelectorAll(".input");
    b = document.querySelectorAll(".input1");
    a = [];
    for (var i = 1; i < c.length; i++) {
        a.push(c[i].value + ":" + b[i].value)
    }
    console.log(JSON.stringify(a));
    a = JSON.stringify(a);
    a = '{' + a.slice(1, a.length - 1) + '}';
    Out.innerHTML = a;
};

Up1 = (me) => {
    a = me.parentElement.previousElementSibling;
    if (a)
        me.parentElement.after(a);
};

Down1 = (me) => {
    a = me.parentElement.nextElementSibling;
    if (a)
        me.parentElement.before(a);
};

Del = (arg1) => {
    arg1.parentElement.remove()
};

Add();