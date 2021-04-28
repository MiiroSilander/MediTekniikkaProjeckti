// JavaScript source code
const apiurl = "https://api.igdb.com/v4/games";

/* Kuinka paljon side bar liukuu sivun p��lle  xxxPX tai xxx%*/
function openNav() {
    document.getElementById("mySidenav").style.width = "200px";
}

/* Set the width of the side navigation to 0 */
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
