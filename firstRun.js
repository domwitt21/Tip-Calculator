window.onload = function() {
    var bill = document.getElementById('bill').addEventListener('input', billMain);
    
}

function billMain() {
    var bill = document.getElementById('bill').value;
    var total = bill * .10;


    if (isNaN(bill)) {
        alert('Invalid Character Type! Please use numbers.')
    } else {
        document.getElementById('values').innerHTML = "Tip total: $" + bill;
    }
}

function secondary() {
    var bill = document.getElementById('bill').value;
    var total = bill * .10;
    document.getElementById('values').innerHTML = "Tip total: $" + total;
}

function taco() {
    var bill = document.getElementById('bill').value;
    var total = bill * .15;
    document.getElementById('values').innerHTML = "Tip total: $" + total;
}

function bars() {
    var bill = document.getElementById('bill').value;
    var total = bill * .20;
    document.getElementById('values').innerHTML = "Tip total: $" + total;
}

function newly() {
    var bill = document.getElementById('bill').value;
    var total = bill * .25;
    document.getElementById('values').innerHTML = "Tip total: $" + total;
}