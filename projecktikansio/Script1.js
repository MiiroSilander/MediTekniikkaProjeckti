// JavaScript source code



// Kuinka paljon side bar liukuu sivun p��lle  xxxPX tai xxx%
function openNav() {
    document.getElementById("mySidenav").style.width = "200px";
}

// Set the width of the side navigation to 0 
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

const searchButton = document.getElementById("searchbutton");
const searchField = document.getElementById("search");

searchButton.addEventListener('click', closeNav);

const mainElementti = document.querySelector("main");

// Alla tyhjä data stringi:
// '{ "name" : "" , "url": "", "image" : "", "publisher": "",  "genres": "", "Developers" : "", "Platform" : "", "Ratings" : "", "Realesed" : "", "Mode" : "", "Trailer" : ""},' +

//tähän lisäillä kaikki maholliset pelit mitä saadaan.
let data = '{ "games" : [' +

    '{ "name" : "Alan Wake" , "url": "https://www.remedygames.com/games/alan-wake/", "image" : "https://upload.wikimedia.org/wikipedia/fi/2/2e/Alanwake.jpg", "publisher": "Remedy Entertaiment, Microsoft",  "genres": "Third-person shooter, Action Adventure, Survival Horror", "Developers" : "Remedy Entertaiment, Nitro Games", "Platform" : "Windows, Xbox 360/One", "Ratings" : "PEGI 16", "Realesed" : "14.5.2010", "Mode" : "Singler-player", "Trailer" : "https://www.youtube.com/embed/Z_6iHChUNhE", "Page" : "AlanWakePage.html"  },' +
    '{ "name" : "Arma 3" , "url": "https://arma3.com/", "image" : "https://upload.wikimedia.org/wikipedia/fi/5/5b/Arma_3_kansikuva.jpg", "publisher": "Bohemia Interactive Studio",  "genres": "Tactical Shooter, War Simulator", "Developers" : "Bohemia Interactive", "Platform" : "Windows", "Ratings" : "PEGI 16", "Realesed" : "12.9.2013", "Mode" : "Singler-player, Multi-player", "Trailer" : "https://www.youtube.com/embed/kwxFrvE0bI4", "Page" : "Arma 3.html"},' +
    '{ "name" : "Borderlands 1" , "url": "https://borderlands.fandom.com/wiki/Borderlands", "image" : "https://static.wikia.nocookie.net/borderlands/images/d/d2/BorderlandsBoxArt.jpg/revision/latest/scale-to-width-down/567?cb=20091210094729", "publisher": "2K Games",  "genres": "FPRPG", "Developers" : "Gearbox Software", "Platform" : "Playstation 3/4, xbox 360/One, Nintendo Switch, Windows", "Ratings" : "PEGI 18", "Realesed" : "23.10.2009", "Mode" : "Singler-player, 2-4 cooperative multiplayer", "Trailer" : "https://www.youtube.com/embed/v3ZWbpce_Os", "Page" : "Borderlands 1.html" },' +
    '{ "name" : "Borderlands 2" , "url": "https://borderlands.fandom.com/wiki/Borderlands_2", "image" : "https://static.wikia.nocookie.net/borderlands/images/7/77/Borderlands2boxart3.jpg/revision/latest/scale-to-width-down/250?cb=20160301234253", "publisher": "2K Games",  "genres": "FPS/RPG", "Developers" : "Gearbox Software", "Platform" : "Playstation 3/4, xbox 360/One, Nintendo Switch, Windows", "Ratings" : "PEGI 18", "Realesed" : "21.9.2012" , "Mode" : "Singler-player, 2-4 cooperative multiplayer", "Trailer" : "https://www.youtube.com/embed/kKVf5feSMEg", "Page" : "Borderlands 2.html"},' +
    '{ "name" : "Borderlands 3" , "url": "https://borderlands.com/en-US/#-", "image" : "https://upload.wikimedia.org/wikipedia/fi/9/9b/Borderlands_3_Kansi.jpg", "publisher": "2K Games",  "genres": "FPS/RPG", "Developers" : "Gearbox Software", "Platform" : "Playstation 4/6, Xbox One, Windows", "Ratings" : "PEGI 18", "Realesed" : "13.9.2019", "Mode" : "Singler-player, 2-4 cooperative multiplayer", "Trailer" : "https://www.youtube.com/embed/d9Gu1PspA3Y", "Page" : "Borderlands 3.html"},' +
    '{ "name" : "The Elder Scrolls V: Skyrim" , "url": "https://elderscrolls.bethesda.net/en/skyrim", "image" : "https://www.emp.fi/dw/image/v2/BBQV_PRD/on/demandware.static/-/Sites-master-emp/default/dw44ca2b20/images/3/2/9/9/329975-emp.jpg?sfrm=png", "publisher": "Bethesda Softworks",  "genres": "RPG, Open world", "Developers" : "Bethesda Game Studios", "Platform" : "Nintendo Switch, Playstation 3/4, Windows, Xbox 360/One", "Ratings" : "PEGI 18", "Realesed" : "11.11.2011", "Mode" : "Singler-player", "Trailer" : "https://www.youtube.com/embed/JSRtYpNRoN0", "Page" : "TheElderScrollsVSkyrim.html" },' +
    '{ "name" : "Hellblade: Senuas Sacrifice" , "url": "https://www.hellblade.com/", "image" : "https://s3.gaming-cdn.com/images/products/872/271x377/hellblade-senuas-sacrifice-cover.jpg", "publisher": "Ninja Theory",  "genres": "Hack and slash, Action adventure", "Developers" : "Ninja Theory", "Platform" : "Playstation 4, Windows", "Ratings" : "PEGI 18", "Realesed" : "8.8.2017", "Mode" : "Singler-player", "Trailer" : "https://www.youtube.com/embed/fBJ0ifVtK5c", "Page" : "HellbladeSenuasSacrifice.html" },' +
    '{ "name" : "Max Payne 2: The Fall of Max Payne" , "url": "https://www.rockstargames.com/games/maxpayne2", "image" : "https://upload.wikimedia.org/wikipedia/fi/9/95/Maxpayne2.jpg", "publisher": "Rockstar Games",  "genres": "Third-Person Shooter", "Developers" : "Remedy Entertainment", "Platform" : "Playstation 2, xBox, Windows", "Ratings" : "PEGI 18", "Realesed" : "14.10.2003", "Mode" : "Singler-player", "Trailer" : "https://www.youtube.com/embed/wkBbLqgcQco", "Page" : "MaxPayne2TheFallofMaxPayne.html" },' +
    '{ "name" : "Squad" , "url": "https://joinsquad.com/", "image" : "https://upload.wikimedia.org/wikipedia/en/d/de/Squad_%28videogame%29_2016_frontcover.png", "publisher": "Offworld Industries",  "genres": "Firts-person shooter, tactical shooter", "Developers" : "Offworld Industries", "Platform" : "Windows", "Ratings" : "PEGI 16", "Realesed" : "23.9.2020 (Early Access Realese 15.12.2015)", "Mode" : "Multiplayer", "Trailer" : "https://www.youtube.com/embed/UDnUD73gRXk", "Page" : "Squad.html" },' +
    '{ "name" : "The Witcher 3: Wild Hunt" , "url": "https://thewitcher.com/en/witcher3", "image" : "https://store-images.s-microsoft.com/image/apps.28990.69531514236615003.8f0d03d6-6311-4c21-a151-834503c2901a.d629260e-2bc4-4588-950c-f278cbc22a64?mode=scale&q=90&h=300&w=200", "publisher": "CD Projeckt",  "genres": "Action RPG, Hack and slash", "Developers" : "CD Projeckt Red", "Platform" : "Windows, Playstation 4, Xbox One, Nintendo Switch", "Ratings" : "PEGI 18", "Realesed" : "19.5.2015", "Mode" : "Singleplayer", "Trailer" : "https://www.youtube.com/embed/c0i88t0Kacs", "Page" : "TheWitcher3WildHunt.html" },' +
    '{ "name" : "Kingdom Hearts" , "url": "https://www.kingdomhearts.com/3/fi/home/", "image" : "img/KH4.jpg", "publisher": "Square Enix",  "genres": "Action, role-playing", "Developers" : "Square Enix Business Division 3", "Platform" : "PlayStation 4, Xbox One, Microsoft Windows", "Ratings" : "PEGI 12", "Realesed" : 25.1.2019", "Mode" : "Singler-player", "Trailer" : "https://www.youtube.com/watch?v=2VawSnaxtSI&ab_channel=KINGDOMHEARTS" },' +
    '{ "name" : "World of Warcraft" , "url": "https://worldofwarcraft.com/en-us/", "image" : "https://upload.wikimedia.org/wikipedia/en/thumb/9/91/WoW_Box_Art1.jpg/220px-WoW_Box_Art1.jpg", "publisher": "Blizzard Entertainment",  "genres": "MMORPG", "Developers" : "Blizzard Entertainment", "Platform" : "Windows, macOS", "Ratings" : "", "Realesed" : "23.11.2004", "Mode" : "Multiplayer", "Trailer" : "https://www.youtube.com/embed/vlVSJ0AvZe0", "Page" : "WorldofWarcraft.html"}]}';
    

   


//muuttaa "data/json" luettavaks
let database = JSON.parse(data);




//Haku systeemi
searchbutton.addEventListener('click', teeHaku);


function teeHaku() {


    let hakusana = document.getElementById('search').value;

    for (let i = 0; i < database.games.length; i++) {
        if (database.games[i].name === hakusana || database.games[i].Search === hakusana) {

            mainElementti.innerHTML += `
        <article id="testi">
            <p> Name: ${database.games[i].name} </p>        
             <p> URL for official website:   <a href = "${database.games[i].url}"> ${database.games[i].url}</a>   </p>                   
                <a href="${database.games[i].Page}">   <img width="360" height="500" src="${database.games[i].image}" alt="Sarjan kuva"></a> 
                     <p> publisher: ${database.games[i].publisher}  </p>
                        <p> genre: ${database.games[i].genres}</p>
                            <p> mode: ${database.games[i].Mode}</p>
                     <p> Developers: ${database.games[i].Developers}</p>
                    <p> Platform: ${database.games[i].Platform}</p>
                 <p> Ratings: ${database.games[i].Ratings}</p>
            <p> Realesed: ${database.games[i].Realesed}</p>
            <p> Trailer: <br>
            <iframe width="540" height="360" src="${database.games[i].Trailer}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </p>
        
         <p>---------------------------------------------------------------------------------- </p>
         </article>`;



        }

    }

}



//Jokaista hakua varten tyhjentää ylimääräiset haut
function clearer() {
    let letter = document.getElementById("testi");
    letter.remove();
}