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
xhr.setRequestHeader('Authorization', 'Bearer ' + 'duhjdb4v4e5jmd7v0443c684giljw4');
xhr.setRequestHeader('Access-Control-Allow-Origin', '*');
xhr.setRequestHeader('Access-Control-Allow-Methods', 'DELETE, POST, GET, OPTIONS')
xhr.setRequestHeader('Access-Control-Allow-Headers', 'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With')
xhr.send();
//alert(token);
}

// JavaScript source code
const apiurl = "https://api.igdb.com/v4/games/";

/*


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

  //  const searchButton = document.getElementById("searchbutton");
   // const searchField = document.getElementById("search");

 //   searchButton.addEventListener('click', closeNav);

const mainElementti = document.querySelector("main");

// Alla tyhjä data stringi:
// '{ "name" : "" , "url": "", "image" : "", "publisher": "",  "genres": "", "Developers" : "", "Platform" : "", "Ratings" : "", "Realesed" : "", "Mode" : "", "Trailer" : ""},' +

//tähän lisäillä kaikki maholliset pelit mitä saadaan.
let data = '{ "games" : [' +

    '{ "name" : "Alan Wake" , "url": "https://www.remedygames.com/games/alan-wake/", "image" : "img/Alanwake.jpg", "publisher": "Remedy Entertaiment, Microsoft",  "genres": "Third-person shooter, Action Adventure, Survival Horror", "Developers" : "Remedy Entertaiment, Nitro Games", "Platform" : "Windows, Xbox 360/One", "Ratings" : "PEGI 16", "Realesed" : "14.5.2010", "Mode" : "Singler-player", "Trailer" : "https://www.youtube.com/embed/Z_6iHChUNhE" },' +
    '{ "name" : "Arma 3" , "url": "https://arma3.com/", "image" : "img/Arma_3_kansikuva.jpg", "publisher": "Bohemia Interactive Studio",  "genres": "Tactical Shooter, War Simulator", "Developers" : "Bohemia Interactive", "Platform" : "Windows", "Ratings" : "PEGI 16", "Realesed" : "12.9.2013", "Mode" : "Singler-player, Multi-player", "Trailer" : "https://www.youtube.com/embed/kwxFrvE0bI4" },' +
    '{ "name" : "Borderlands 1" , "url": "https://borderlands.fandom.com/wiki/Borderlands", "image" : "img/BorderlandsBoxArt.jpg", "publisher": "2K Games",  "genres": "FPRPG", "Developers" : "Gearbox Software", "Platform" : "Playstation 3/4, xbox 360/One, Nintendo Switch, Windows", "Ratings" : "PEGI 18", "Realesed" : "23.10.2009", "Mode" : "Singler-player, 2-4 cooperative multiplayer", "Trailer" : "https://www.youtube.com/embed/v3ZWbpce_Os" },' +
    '{ "name" : "Borderlands 2" , "url": "https://borderlands.fandom.com/wiki/Borderlands_2", "image" : "img/Borderlands2boxart3.jpg", "publisher": "2K Games",  "genres": "FPS/RPG", "Developers" : "Gearbox Software", "Platform" : "Playstation 3/4, xbox 360/One, Nintendo Switch, Windows", "Ratings" : "PEGI 18", "Realesed" : "21.9.2012" , "Mode" : "Singler-player, 2-4 cooperative multiplayer", "Trailer" : "https://www.youtube.com/embed/kKVf5feSMEg"},' +
    '{ "name" : "Borderlands 3" , "url": "https://borderlands.com/en-US/#-", "image" : "https://upload.wikimedia.org/wikipedia/fi/9/9b/Borderlands_3_Kansi.jpg", "publisher": "2K Games",  "genres": "FPS/RPG", "Developers" : "Gearbox Software", "Platform" : "Playstation 4/6, Xbox One, Windows", "Ratings" : "PEGI 18", "Realesed" : "13.9.2019", "Mode" : "Singler-player, 2-4 cooperative multiplayer", "Trailer" : "https://www.youtube.com/embed/d9Gu1PspA3Y"},' +
    '{ "name" : "The Elder Scrolls V: Skyrim" , "url": "https://elderscrolls.bethesda.net/en/skyrim", "image" : "https://www.emp.fi/dw/image/v2/BBQV_PRD/on/demandware.static/-/Sites-master-emp/default/dw44ca2b20/images/3/2/9/9/329975-emp.jpg?sfrm=png", "publisher": "Bethesda Softworks",  "genres": "RPG, Open world", "Developers" : "Bethesda Game Studios", "Platform" : "Nintendo Switch, Playstation 3/4, Windows, Xbox 360/One", "Ratings" : "PEGI 18", "Realesed" : "11.11.2011", "Mode" : "Singler-player", "Trailer" : "https://www.youtube.com/embed/JSRtYpNRoN0" },' +
    '{ "name" : "Hellblade: Senuas Sacrifice" , "url": "https://www.hellblade.com/", "image" : "https://s3.gaming-cdn.com/images/products/872/271x377/hellblade-senuas-sacrifice-cover.jpg", "publisher": "Ninja Theory",  "genres": "Hack and slash, Action adventure", "Developers" : "Ninja Theory", "Platform" : "Playstation 4, Windows", "Ratings" : "PEGI 18", "Realesed" : "8.8.2017", "Mode" : "Singler-player", "Trailer" : "https://www.youtube.com/embed/fBJ0ifVtK5c" },' +
    '{ "name" : "Max Payne 2: The Fall of Max Payne" , "url": "https://www.rockstargames.com/games/maxpayne2", "image" : "https://upload.wikimedia.org/wikipedia/fi/9/95/Maxpayne2.jpg", "publisher": "Rockstar Games",  "genres": "Third-Person Shooter", "Developers" : "Remedy Entertainment", "Platform" : "Playstation 2, xBox, Windows", "Ratings" : "PEGI 18", "Realesed" : "14.10.2003", "Mode" : "Singler-player", "Trailer" : "https://www.youtube.com/embed/wkBbLqgcQco" },' +
    '{ "name" : "Squad" , "url": "https://joinsquad.com/", "image" : "https://upload.wikimedia.org/wikipedia/en/d/de/Squad_%28videogame%29_2016_frontcover.png", "publisher": "Offworld Industries",  "genres": "Firts-person shooter, tactical shooter", "Developers" : "Offworld Industries", "Platform" : "Windows", "Ratings" : "PEGI 16", "Realesed" : "23.9.2020 (Early Access Realese 15.12.2015)", "Mode" : "Multiplayer", "Trailer" : "https://www.youtube.com/embed/UDnUD73gRXk" },' +
    '{ "name" : "The Witcher 3: Wild Hunt" , "url": "https://thewitcher.com/en/witcher3", "image" : "img/TQKAd8U6hnIFQIIcz6qnFh8C.webp", "publisher": "CD Projeckt",  "genres": "Action RPG, Hack and slash", "Developers" : "CD Projeckt Red", "Platform" : "Windows, Playstation 4, Xbox One, Nintendo Switch", "Ratings" : "PEGI 18", "Realesed" : "19.5.2015", "Mode" : "Singleplayer", "Trailer" : "https://www.youtube.com/embed/c0i88t0Kacs" },' +
    '{ "name" : "World of Warcraft" , "url": "https://worldofwarcraft.com/en-us/", "image" : "https://upload.wikimedia.org/wikipedia/en/thumb/9/91/WoW_Box_Art1.jpg/220px-WoW_Box_Art1.jpg", "publisher": "Blizzard Entertainment",  "genres": "MMORPG", "Developers" : "Blizzard Entertainment", "Platform" : "Windows, macOS", "Ratings" : "", "Realesed" : "23.11.2004", "Mode" : "Multiplayer", "Trailer" : "https://www.youtube.com/embed/vlVSJ0AvZe0"},' +
    
    

    //ei huomioida tätä alinta. Sulkee listan ja laitetaan viimeisen pelin tiedot tähän.
    '{ "name" : "Borderlands 1" , "url": "https://borderlands.fandom.com/wiki/Borderlands", "image" : "https://static.wikia.nocookie.net/borderlands/images/d/d2/BorderlandsBoxArt.jpg/revision/latest/scale-to-width-down/567?cb=20091210094729", "publisher": "2K Games",  "genres": "FPRPG", "Developers" : "Gearbox Software", "Platform" : "Playstation 4/5, Xbox One, Windows", "Ratings" : "PEGI 18, ESRB: Mature", "Realesed" : "13.9.2019" }]}';

    
//muuttaa "data/json" luettavaks
let database = JSON.parse(data);



    //kotisivu.addEventListener('click', pelitkirjasto);




//function pelitkirjasto() {
    //printtaa "data" kannan -> kotisivu.html  "main" sisään.
  /*  for (let j = 0; j < database.games.length; j++) {
        mainElementti.innerHTML += `
        <article id="testi">
            <p> Name: ${database.games[j].name} </p>                         
             <a href="${database.games[j].Page}">   <img width="360" height="500" src="${database.games[j].image}" alt="Sarjan kuva"></a>
         <p>---------------------------------------------------------------------------------- </p>
         </article>`;

    }*/


let map;
    let marker;

    function initMap() {
      const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 11,
        center: { lat: 60.173, lng: 24.941 },
      });
      marker = new google.maps.Marker({
        map,
        draggable: true,
        animation: google.maps.Animation.DROP,
        position: { lat: 60.173, lng: 24.941 },
      });
      
    }

    document.addEventListener( 'DOMContentLoaded', function () {
		new Splide( '#splide', {
            type   : 'loop',
            perPage: 5,
            focus  : 'center',
        }).mount();

        new Splide( '#splide2', {
            type   : 'loop',
            perPage: 5,
            focus  : 'center',
        }).mount();
            } );