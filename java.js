document.getElementById("vdgrcivfyurhfv");

function add(){
    var x = parseInt(document.getElementById("first_value").value);
    var y = parseInt(document.getElementById("second_value").value);
    var sum = x + y;
    document.getElementById("res").innerHTML = sum;
}

function sub(){
    var x = parseInt(document.getElementById("first_value").value);
    var y = parseInt(document.getElementById("second_value").value);
    var sum = x - y;
    document.getElementById("res").innerHTML = sum;
}

function mul(){
    var x = parseInt(document.getElementById("first_value").value);
    var y = parseInt(document.getElementById("second_value").value);
    var sum = x * y;
    document.getElementById("res").innerHTML = sum;
}

function div(){
    var x = parseInt(document.getElementById("first_value").value);
    var y = parseInt(document.getElementById("second_value").value);
    var sum = x / y;
    document.getElementById("res").innerHTML = sum;
}

function per(){
    var x = parseInt(document.getElementById("first_value").value);
    var y = parseInt(document.getElementById("second_value").value);
    var percent = (x / y) * 100;
    document.getElementById("res").innerHTML = percent;
}

function two(){
    var x = parseInt(document.getElementById("first_value").value);
    var sum = x * x ;
    document.getElementById("res").innerHTML = sum;
}

function the(){
    var x = parseInt(document.getElementById("first_value").value);
    var sum = x * x * x ;
    document.getElementById("res").innerHTML = sum;
}