//register event handlers
//if someone clicks on the bakery names
import $ from 'jquery';
import {randomInteger} from "../site"

export let name;
let json;

export function bringUpRenamePromt()
{
    $("#rename-cover").css("visibility", "visible");

    $("#name-input").keyup(function () {
        if ($("#name-input").val().length > 20) {
            $("#name-input").val($("#name-input").val().substring(0, 20));
        }
    });

   
}

export function populateJson(){
    let fetchBakeryNamePromise = new Promise(function (success,failure)
    {
        $.getJSON("text/bakery-names.json",function(data)
        {
            success(data);
        })
        .fail(function()
        {
            failure();
        })
    });
    fetchBakeryNamePromise.then(
        function (data)//Success
        {
            json = data;

            if($("#bakery-name").text() != null){
                name = $("#bakery-name").text();
                return;
            }

            name = json.adjectives[randomInteger(0, json.adjectives.length)];
            name += json.nouns[randomInteger(0, json.nouns.length)];

            
            $("#bakery-name").text(name);
        },
        function() // Failure
        {
            alert("Unable to fetch bakery names!");
            console.error("Unable to fetch bakery names!");
        }
    );

}


export function randomizeNameInput()
{

    let tempName = json.adjectives[randomInteger(0, json.adjectives.length)];
    tempName += json.nouns[randomInteger(0, json.nouns.length)];


    /*let tempName = json.adjectives[Math.floor(Math.random() * json.adjectives.length)];*/
    tempName += json.nouns[Math.floor(Math.random() * json.nouns.length)];
    $("#name-input").val(tempName);
}

export function acceptName()
{
    var name = $('#name-input').val();
    
    //change our new name to your bakery name now
    $("#bakery-name").text(name);
    //selecting rename cover from dom
    $("#rename-cover").css("visibility", "hidden");

}
