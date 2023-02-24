import { cookies, cps, changeCps, changeAmountOfCookies } from "./cookieHandler.js";
import { roundToNearest } from "../site.js";

export let cursors = 0;
export let cursorPrice = 15;
let cursorCPS = 0.1;
export let grandmas = 0;
export let grandmaPrice = 100;
let grandmaCPS = 1;

export function load(_cursors, _grandmas, _cursorPrice, _grandmaPrice)
{
    // cursors
    cursors = isNaN(_cursors) ? 0 : _cursors;
    cursorPrice = isNaN(_cursorPrice) ? 0 : _cursorPrice;
    document.getElementById("cursor-building").querySelector(".price-text").innerHTML = Math.round(cursorPrice);
    changeCps(cps + cursorCPS * cursors);

    // grandmas
    grandmas = isNaN(_grandmas) ? 0 : _grandmas;
    grandmaPrice = isNaN(_grandmaPrice) ? 0 : _grandmaPrice;

    document.getElementById("grandma-building").querySelector(".price-text").innerHTML = Math.round(grandmaPrice);
    changeCps(cps + grandmaCPS * grandmas);
}

export function buy(event) 
{
    console.log(event);

    switch(event.currentTarget.id.toLowerCase())
    {
        case "cursor-building":
            if(doPurchase(cursorPrice) === true)
            {
                // do the purchase
                changeCps(cps + cursorCPS);
                cursors++;
                // cursor price will need to be rounded to nearest whole number, 
                // but will need to be calculated first, the rounded
                cursorPrice *= 1.15;
                cursorPrice = roundToNearest(cursorPrice, 0);
                event.currentTarget.querySelector(".price-text").innerHTML = Math.round(cursorPrice);
            }
            break;
        case "grandma-building":
            if(doPurchase(grandmaPrice) === true)
            {
                // do the purchase
                changeCps(cps + grandmaCPS);
                grandmas++;
                // grandma price will need to be rounded to nearest whole number, 
                // but will need to be calculated first, the rounded
                grandmaPrice *= 1.15;
                grandmaPrice = roundToNearest(grandmaPrice, 0);
                event.currentTarget.querySelector(".price-text").innerHTML = Math.round(grandmaPrice);
            }
            break;
        default:
            console.error("Invalid ID was given to Building.");
    }
}

function doPurchase(price) 
{
    if (cookies >= price) 
    {
        changeAmountOfCookies(cookies - price);
        return true;
    }

    return false;
}

export function resetUpgrades() {
    cursors = 0;
    cursorPrice = 15;
    cursorCPS = 0.1;
    grandmas = 0;
     grandmaPrice = 100;
    grandmaCPS = 1;
        document.getElementById("cursor-building").querySelector(".price-text").innerHTML = Math.round(cursorPrice);
        document.getElementById("grandma-building").querySelector(".price-text").innerHTML = Math.round(grandmaPrice);
}