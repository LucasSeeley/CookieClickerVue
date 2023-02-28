import { roundToNearest } from "../site";
import { createToast } from "./toastController";

//global variables
export let cookies = 0;
let cookiesGainedOnClick = 1;
export let cps = 0;

export function cookieClicked() {
    cookies += cookiesGainedOnClick;
    updateGUI();

    if(cookies % 10 == 0){
        createToast(`Hooray! ${cookies} Cookies Clicked`, 2000);
    }
}

function updateGUI() {
    document.getElementById("cookie-counter").innerHTML = roundToNearest(cookies, 1);
    document.getElementById("cps-counter").innerHTML = cps;

}

export function increaseCookieCount(amount){
    cookies+=amount;
    updateGUI();
}

export function changeAmountOfCookies(amount){
    cookies = amount;
    updateGUI();
}

export function changeCps(amount){
    cps = amount;
    updateGUI();
}

export function calculateCps(){
    cookies += cps/100;
    updateGUI();
}