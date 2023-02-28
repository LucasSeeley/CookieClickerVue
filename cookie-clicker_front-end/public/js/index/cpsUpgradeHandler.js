import { cookies, cps, changeCps, changeAmountOfCookies } from "./cookieHandler.js";
import { roundToNearest } from "../site.js";

export let cursors = 0;
export let cursorPrice = 15;
let cursorCPS = 1;
export let grandmas = 0;
export let grandmaPrice = 100;
let grandmaCPS = 5;
export let farms = 0;
export let farmPrice = 400;
let farmCPS = 10;
export let mines = 0;
export let minePrice = 1100;
let mineCPS = 50;

export function load(_cursors, _grandmas, _farms, _mines, _cursorPrice, _grandmaPrice, _farmPrice, _minePrice)
{
    // cursors
    cursors = isNaN(_cursors) ? 0 : _cursors;
    cursorPrice = isNaN(_cursorPrice) ? 15 : _cursorPrice;
    document.getElementById("cursor-building").querySelector(".price-text").innerHTML = Math.round(cursorPrice);
    changeCps(cps + cursorCPS * cursors);

    // grandmas
    grandmas = isNaN(_grandmas) ? 0 : _grandmas;
    grandmaPrice = isNaN(_grandmaPrice) ? 100 : _grandmaPrice;

    document.getElementById("grandma-building").querySelector(".price-text").innerHTML = Math.round(grandmaPrice);
    changeCps(cps + grandmaCPS * grandmas);

    // farms
    farms = isNaN(_farms) ? 0 : _farms;
    farmPrice = isNaN(_farmPrice) ? 400 : _farmPrice;

    document.getElementById("farm-building").querySelector(".price-text").innerHTML = Math.round(farmPrice);
    changeCps(cps + farmCPS * farms);


    // mines
    mines = isNaN(_mines) ? 0 : _mines;
    minePrice = isNaN(_minePrice) ? 1100 : _minePrice;

    document.getElementById("mine-building").querySelector(".price-text").innerHTML = Math.round(minePrice);
    changeCps(cps + mineCPS * mines);
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
        case "farm-building":
            if(doPurchase(farmPrice) === true){
                changeCps(cps + farmCPS);
                farms++;

                farmPrice *= 1.15;
                farmPrice = roundToNearest(farmPrice, 0);
                event.currentTarget.querySelector(".price-text").innerHTML = Math.round(farmPrice);
            }
            break;
        case "mine-building":
            if(doPurchase(minePrice) === true){
                changeCps(cps + mineCPS);
                mines++;
                minePrice *= 1.15;
                minePrice = roundToNearest(minePrice, 0);
                event.currentTarget.querySelector(".price-text").innerHTML = Math.round(minePrice);
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
    cursorCPS = 1;
    grandmas = 0;
    grandmaPrice = 100;
    grandmaCPS = 5;
    farms = 0;
    farmPrice = 400;
    farmCPS = 10;
    mines = 0;
    minePrice = 1100;
    mineCPS = 50;
    document.getElementById("cursor-building").querySelector(".price-text").innerHTML = Math.round(cursorPrice);
    document.getElementById("grandma-building").querySelector(".price-text").innerHTML = Math.round(grandmaPrice);
    document.getElementById("farm-building").querySelector(".price-text").innerHTML = Math.round(farmPrice);
    document.getElementById("mine-building").querySelector(".price-text").innerHTML = Math.round(minePrice);
}