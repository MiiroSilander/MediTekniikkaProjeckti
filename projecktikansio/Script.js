'use strict';
/*
let xhr = new XMLHttpRequest();
// we defined the xhr
 

xhr.open('POST', 'https://id.twitch.tv/oauth2/token?client_id=9o9l55cbtqtzmpe9dv7hpgqepf99i6&client_secret=b04grht2o906845vru9vac6etbxda3&grant_type=client_credentials', true);
xhr.setRequestHeader('Content-Type', 'application/json');
xhr.send();

let token;
xhr.onreadystatechange = function () {
    if (this.readyState != 4) return;

    if (this.status == 200) {
        let data = JSON.parse(this.responseText);
        token = data.access_token;
        
        console.log(data);
        // we get the returned data
    }
    // end of state change: it can be after some time (async)
};

const fuButton = document.getElementById("fuckyou");
fuckyou.addEventListener('click', access);

function access() {
xhr.open('POST', 'https://api.igdb.com/v4/games/');
xhr.setRequestHeader('Content-Type', 'application/json');
xhr.setRequestHeader('Client-ID', '9o9l55cbtqtzmpe9dv7hpgqepf99i6');
xhr.setRequestHeader('Authorization', 'Bearer ' + token);
//xhr.setRequestHeader('Access-Control-Allow-Origin', '*');
xhr.send();
//alert(token);
}

// JavaScript source code
const apiurl = "https://api.igdb.com/v4/games/";




const searchButton = document.getElementById("searchbutton");
const searchField = document.getElementById("search");

searchButton.addEventListener('click', doQuery);


function doQuery() {
    let searchWord = searchField.value;
    
    apiQuery = apiurl + searchWord;
    console.log("Lähetettävä kysely: " + apiQuery);

    doSearch(apiQuery);   
    alert(apiQuery);
}

function doSearch(apiQuery)  {

    fetch(apiQuery).then(function(response) {
        return response.json();
    }).then(function(json) {
        showResult(json);
    });
};

function showResult(jsonData) {
    
    console.log(jsonData);
}

*/

/*let text = '{ "employees" : [' +
    '{ "firstName":"John" , "lastName":"Doe" },' +
    '{ "firstName":"Anna" , "lastName":"Smith" },' +
    '{ "firstName":"Peter" , "lastName":"Jones" } ]}';

var obj = JSON.parse(text);

for (let i = 0; i < obj.employees.length; i++) {
    mainElementti.innerHTML += `
            <p> Nimi: ${obj.employees[i].firstName} </p>
                <p> Nimi:     ${obj.employees[i].lastName} </p>
           
             `
        ;

}*/

    // Kuinka paljon side bar liukuu sivun p��lle  xxxPX tai xxx%
    function openNav() {
        document.getElementById("mySidenav").style.width = "200px";
    }

    // Set the width of the side navigation to 0 
    function closeNav() {
        document.getElementById("mySidenav").style.width = "0";
    } 



const mainElementti = document.querySelector("main");

//tähän lisäillä kaikki maholliset pelit mitä saadaan.
let data = '{ "games" : [' +

    '{ "name" : "Alan Wake" , "url": "https://www.remedygames.com/games/alan-wake/", "image" : "https://upload.wikimedia.org/wikipedia/fi/2/2e/Alanwake.jpg", "publisher": "Remedy Entertaiment, Microsoft",  "genres": "Third-person shooter, Action Adventure, Survival Horror", "Developers" : "Remedy Entertaiment, Nitro Games", "Platform" : "Windows, Xbox 360/One", "Ratings" : "PEGI 16", "Realesed" : "14.5.2010", "Mode" : "Singler-player" },' +
    '{ "name" : "Arma 3" , "url": "https://arma3.com/", "image" : "https://upload.wikimedia.org/wikipedia/fi/5/5b/Arma_3_kansikuva.jpg", "publisher": "Bohemia Interactive Studio",  "genres": "Tactical Shooter, War Simulator", "Developers" : "Bohemia Interactive", "Platform" : "Windows", "Ratings" : "PEGI 16", "Realesed" : "12.9.2013", "Mode" : "Singler-player, Multi-player" },' +
    '{ "name" : "Borderlands 1" , "url": "https://borderlands.fandom.com/wiki/Borderlands", "image" : "https://static.wikia.nocookie.net/borderlands/images/d/d2/BorderlandsBoxArt.jpg/revision/latest/scale-to-width-down/567?cb=20091210094729", "publisher": "2K Games",  "genres": "FPRPG", "Developers" : "Gearbox Software", "Platform" : "Playstation 3/4, xbox 360/One, Nintendo Switch, Windows", "Ratings" : "PEGI 18", "Realesed" : "23.10.2009", "Mode" : "Singler-player, 2-4 cooperative multiplayer" },' +
    '{ "name" : "Borderlands 2" , "url": "https://borderlands.fandom.com/wiki/Borderlands_2", "image" : "https://static.wikia.nocookie.net/borderlands/images/7/77/Borderlands2boxart3.jpg/revision/latest/scale-to-width-down/250?cb=20160301234253", "publisher": "2K Games",  "genres": "FPS/RPG", "Developers" : "Gearbox Software", "Platform" : "Playstation 3/4, xbox 360/One, Nintendo Switch, Windows", "Ratings" : "PEGI 18", "Realesed" : "21.9.2012" , "Mode" : "Singler-player, 2-4 cooperative multiplayer"},' +
    '{ "name" : "Borderlands 3" , "url": "https://borderlands.com/en-US/#-", "image" : "https://upload.wikimedia.org/wikipedia/fi/9/9b/Borderlands_3_Kansi.jpg", "publisher": "2K Games",  "genres": "FPS/RPG", "Developers" : "Gearbox Software", "Platform" : "Playstation 4/6, Xbox One, Windows", "Ratings" : "PEGI 18", "Realesed" : "13.9.2019", "Mode" : "Singler-player, 2-4 cooperative multiplayer"},' +
    '{ "name" : "The Elder Scrolls V: Skyrim" , "url": "https://elderscrolls.bethesda.net/en/skyrim", "image" : "https://www.emp.fi/dw/image/v2/BBQV_PRD/on/demandware.static/-/Sites-master-emp/default/dw44ca2b20/images/3/2/9/9/329975-emp.jpg?sfrm=png", "publisher": "Bethesda Softworks",  "genres": "RPG, Open world", "Developers" : "Bethesda Game Studios", "Platform" : "Nintendo Switch, Playstation 3/4, Windows, Xbox 360/One", "Ratings" : "PEGI 18", "Realesed" : "11.11.2011", "Mode" : "Singler-player" },' +
    '{ "name" : "Hellblade: Senuas Sacrifice" , "url": "https://www.hellblade.com/", "image" : "https://s3.gaming-cdn.com/images/products/872/271x377/hellblade-senuas-sacrifice-cover.jpg", "publisher": "Ninja Theory",  "genres": "Hack and slash, Action adventure", "Developers" : "Ninja Theory", "Platform" : "Playstation 4, Windows", "Ratings" : "PEGI 18", "Realesed" : "8.8.2017", "Mode" : "Singler-player" },' +
    '{ "name" : "Max Payne 2: The Fall of Max Payne" , "url": "https://www.rockstargames.com/games/maxpayne2", "image" : "https://upload.wikimedia.org/wikipedia/fi/9/95/Maxpayne2.jpg", "publisher": "Rockstar Games",  "genres": "Third-Person Shooter", "Developers" : "Remedy Entertainment", "Platform" : "Playstation 2, xBox, Windows", "Ratings" : "PEGI 18", "Realesed" : "14.10.2003", "Mode" : "Singler-player" },' +
    '{ "name" : "Squad" , "url": "https://joinsquad.com/", "image" : "https://upload.wikimedia.org/wikipedia/en/d/de/Squad_%28videogame%29_2016_frontcover.png", "publisher": "Offworld Industries",  "genres": "Firts-person shooter, tactical shooter", "Developers" : "Offworld Industries", "Platform" : "Windows", "Ratings" : "PEGI 16", "Realesed" : "23.9.2020 (Early Access Realese 15.12.2015)", "Mode" : "Multiplayer" },' +
    '{ "name" : "The Witcher 3: Wild Hunt" , "url": "https://thewitcher.com/en/witcher3", "image" : "https://store-images.s-microsoft.com/image/apps.28990.69531514236615003.8f0d03d6-6311-4c21-a151-834503c2901a.d629260e-2bc4-4588-950c-f278cbc22a64?mode=scale&q=90&h=300&w=200", "publisher": "CD Projeckt",  "genres": "Action RPG, Hack and slash", "Developers" : "CD Projeckt Red", "Platform" : "Windows, Playstation 4, Xbox One, Nintendo Switch", "Ratings" : "PEGI 18", "Realesed" : "19.5.2015", "Mode" : "Singleplayer" },' +



    //ei huomioida tätä alinta. Sulkee listan ja laitetaan viimeisen pelin tiedot tähän.
    '{ "name" : "Borderlands 1" , "url": "https://borderlands.fandom.com/wiki/Borderlands", "image" : "https://static.wikia.nocookie.net/borderlands/images/d/d2/BorderlandsBoxArt.jpg/revision/latest/scale-to-width-down/567?cb=20091210094729", "publisher": "2K Games",  "genres": "FPRPG", "Developers" : "Gearbox Software", "Platform" : "Playstation 4/5, Xbox One, Windows", "Ratings" : "PEGI 18, ESRB: Mature", "Realesed" : "13.9.2019" }]}';

//muuttaa "data/json" luettavaks
let database = JSON.parse(data);


    //printtaa "data" kannan -> kotisivu.html  "main" sisään.
    for (let j = 0; j <  database.games.length; j++) {
        mainElementti.innerHTML += `
        <article>
            <p> Name: ${database.games[j].name} </p>        
             <p> URL for offisal website:   <a href = "${database.games[j].url}"> ${database.games[j].url}</a>   </p>                   
                <img src="${database.games[j].image}" alt="sarjan kuva">
                     <p> publisher: ${database.games[j].publisher}  </p>
                        <p> genre: ${database.games[j].genres}</p>
                            <p> mode: ${database.games[j].Mode}</p>
                     <p> Developers: ${database.games[j].Developers}</p>
                    <p> Platform: ${database.games[j].Platform}</p>
                 <p> Ratings: ${database.games[j].Ratings}</p>
            <p> Realesed: ${database.games[j].Realesed}</p>

         <p>---------------------------------------------------------------------------------- </p>
         </article>`;

    }
