
Add=()=>{
    a = document.querySelector(".Inp").cloneNode(true);
    b = document.querySelector("#Store");
    b.appendChild(a);
};


Save=(out)=>{
    
    Out = document.querySelector("#"+out);
    c = document.querySelectorAll(".input");
    b = document.querySelectorAll(".input1");
    a = {};
    for(var i=1; i<c.length;i++){a[c[i].value]=b[i].value}
    console.log(JSON.stringify(a))
    delete a[""];
    Out.innerHTML=JSON.stringify(a);
};

Up1=(me)=>{
    a = me.parentElement.previousElementSibling;
    if(a)
        me.parentElement.after(a);
};

Down1=(me)=>{
    a = me.parentElement.nextElementSibling;
    if(a)
        me.parentElement.before(a);
};

Del=(arg1)=>{
    arg1.parentElement.remove()
};

Add();