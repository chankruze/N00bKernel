var quotes = [
    "N00biness Overloaded !",
    "You are a n00b !",
    "This kernel will bomb your GF !",
    "N00b devs here !",
    "Funk Your Girl !"
];
// Troll Myself
let troll_index = Math.floor(Math.random() * quotes.length);
let troll_to_show = quotes[troll_index];
document.getElementById("troll").innerHTML = troll_to_show;

$('#myAlert').on('closed.bs.alert', function () {
    $('.alert').alert('close')
})