//half circle and button
//click on and off color

let circles = document.querySelectorAll('.circles');

let switches = document.querySelectorAll('.switches');

switches.forEach(add => {
    add.addEventListener('click', change);
});

function change(e){

    e.target.style.backgroundColor = "blue";
}