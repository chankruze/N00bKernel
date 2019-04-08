let quotes = [
    "Tell me I’m your slut.",
    "It may be between your legs, but it belongs to me. Understand?",
    "Eyes on me, baby. Always on me!",
    "I want you in my bed and between my legs.",
    "I swear to God I won’t stop until you’re shaking.",
    "Be naked when I get home.",
    "This kernel will bomb your GF.",
    "I want to taste me on your fingers.",
    "I licked it, so it’s mine.",
    "Shut up and kiss me.",
    "Go ahead. Touch it."
];
// Troll Myself
let troll_index = Math.floor(Math.random() * quotes.length);
let troll_to_show = quotes[troll_index];
document.getElementById("troll").innerHTML = troll_to_show;

$('#myAlert').on('closed.bs.alert', function () {
    $('.alert').alert('close')
})