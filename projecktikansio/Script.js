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
/*const apiurl = "https://api.igdb.com/v4/games/";


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
}*/
