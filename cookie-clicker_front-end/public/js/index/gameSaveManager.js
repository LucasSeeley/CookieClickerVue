import $ from "jquery";
import {createToast} from "./toastController.js";
import * as cookieHandler from "./cookieHandler.js"

export function save()
{
    console.log("cookie stuff is happenin");
    createToast("Game saved", 2000);
    
    document.cookie = `cookies=${cookieHandler.cookies}; SameSite=Secure; expires=Fri, 31 Dec 9999 23:59:59 GMT`;
    document.cookie = `bakeryName=${$("#bakery-name").text()}; SameSite=Secure; expires=Fri, 31 Dec 9999 23:59:59 GMT`;    
}

export function load()
{
    
    cookieHandler.changeAmountOfCookies(Number(getCookie("cookies")));
    /*below is how we handle the first time loading a page*/

    cookieHandler.changeAmountOfCookies(isNaN(cookieHandler.cookies) ? 0 : cookieHandler.cookies);

    /* load bakery name*/
    
    $("#bakery-name").text(getCookie("bakeryName"));
}

function updateGUI()
{
    document.getElementById("cookie-counter").innerHTML = cookieHandler.cookies;
    document.getElementById("cps-counter").innerHTML = cookieHandler.cps;
}

export function getCookie(name){
    return document.cookie.split("; ").find((x) => x.startsWith(`${name}=`))?.split("=")[1]
}