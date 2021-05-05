// JavaScript source code

//Tää jokaseen pelin omalle sivulle saa navigaation toimimaan


// Kuinka paljon side bar liukuu sivun p��lle  xxxPX tai xxx%
function openNav() {
    document.getElementById("mySidenav").style.width = "200px";
}

// Set the width of the side navigation to 0 
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

const mainElementti = document.querySelector("main");