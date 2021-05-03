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
    '{ "name" : "Borderlands 1" , "url": "https://borderlands.fandom.com/wiki/Borderlands", "image" : "https://static.wikia.nocookie.net/borderlands/images/d/d2/BorderlandsBoxArt.jpg/revision/latest/scale-to-width-down/567?cb=20091210094729", "publisher": "2K Games",  "genres": "FPRPG", "Developers" : "Gearbox Software", "Platform" : "Playstation 3/4, xbox 360/One, Nintendo Switch, Windows", "Ratings" : "PEGI 18, ESRB: Mature", "Realesed" : "23.10.2009", "Mode" : "Singler-player, 2-4 cooperative multiplayer" },' +
    '{ "name" : "Borderlands 2" , "url": "https://borderlands.fandom.com/wiki/Borderlands_2", "image" : "https://static.wikia.nocookie.net/borderlands/images/7/77/Borderlands2boxart3.jpg/revision/latest/scale-to-width-down/250?cb=20160301234253", "publisher": "2K Games",  "genres": "FPS/RPG", "Developers" : "Gearbox Software", "Platform" : "Playstation 3/4, xbox 360/One, Nintendo Switch, Windows", "Ratings" : "PEGI 18, ESRB: Mature", "Realesed" : "21.9.2012" , "Mode" : "Singler-player, 2-4 cooperative multiplayer"},' +
    '{ "name" : "Borderlands 3" , "url": "https://borderlands.com/en-US/#-", "image" : "https://upload.wikimedia.org/wikipedia/fi/9/9b/Borderlands_3_Kansi.jpg", "publisher": "2K Games",  "genres": "FPS/RPG", "Developers" : "Gearbox Software", "Platform" : "Playstation 4/6, Xbox One, Windows", "Ratings" : "PEGI 18, ESRB: Mature", "Realesed" : "13.9.2019", "Mode" : "Singler-player, 2-4 cooperative multiplayer"},' +


    //ei huomioida tätä alinta. Sulkee listan ja laitetaan viimeisen pelin tiedot tähän.
    '{ "name" : "Borderlands 1" , "url": "https://borderlands.fandom.com/wiki/Borderlands", "image" : "https://static.wikia.nocookie.net/borderlands/images/d/d2/BorderlandsBoxArt.jpg/revision/latest/scale-to-width-down/567?cb=20091210094729", "publisher": "2K Games",  "genres": "FPRPG", "Developers" : "Gearbox Software", "Platform" : "Playstation 4/5, Xbox One, Windows", "Ratings" : "PEGI 18, ESRB: Mature", "Realesed" : "13.9.2019" }]}';

//muuttaa "data/json" luettavaks
let database = JSON.parse(data);


    //printtaa "data" kannan -> kotisivu.html  "main" sisään.
    for (let j = 0; j <  database.games.length; j++) {
        mainElementti.innerHTML += `
                <p> Nimi: ${database.games[j].name} </p>        
             <p> URL for offisal website: </p>  <a href = "${database.games[j].url}"> ${database.games[j].url}</a>                      
            <img src="${database.games[j].image}" alt="sarjan kuva"> 
            <p> publisher: ${database.games[j].publisher}</p>
            <p> genre: ${database.games[j].genres}</p>
            <p> mode: ${database.games[j].Mode}</p>
            <p> Developers: ${database.games[j].Developers}</p>
            <p> Platform: ${database.games[j].Platform}</p>
            <p> Ratings: ${database.games[j].Ratings}</p>
            <p> Realesed: ${database.games[j].Realesed}</p>

                <p>---------------------------------------------------------------------------------- </p>
                 `
            ;

    }
