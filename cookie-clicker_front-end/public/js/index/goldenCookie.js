import $ from 'jquery';
import {randomFloat, randomInteger} from '../site.js';
import { cookies, cps, increaseCookieCount} from './cookieHandler.js';

const maxGCookieLife = 13000;
let Tmin = 300;/*in seconds how long it takes for a cookie to appear*/
let Tmax = 900;
let nextSpawnInterval;

export function convertGCookieTimeToMS()
{
    Tmin *= 1000;
    Tmax *= 1000;
}

/**/

export function setNextSpawnTime()
{
    let nextSpawnTime = randomFloat(Tmin, Tmax);
    /* nextSpawnTime is the actual delay*/
    nextSpawnInterval = window.setTimeout(spawnCookie, nextSpawnTime);
    console.log(`Golden cookie will spawn in ${nextSpawnTime / 1000} seconds`);
}


function spawnCookie()
{
    let cookie = document.createElement("img");
    cookie.src = "/images/goldCookie.png";
    cookie.className = "golden-cookie";
    cookie.style.top = randomFloat(10, 90) + "%";
    cookie.style.left = randomFloat(10, 90) + "%";
    /*when someone clicks on cookie*/
    cookie.onclick = () => { goldenCookieClicked(cookie); };
    document.getElementsByTagName("body")[0].appendChild(cookie);
    goldenCookieFadeIn(cookie);
    setNextSpawnTime();
}
/*hw*/
function goldenCookieClicked(cookie)
{

    cookie.remove;
    let randomCookieAmount = Math.round(Math.min(cookies * 1.15, cps));
    increaseCookieCount(randomCookieAmount);
}

function goldenCookieFadeIn(cookie)
{
    let increaseScaleAmount = randomFloat(0.0006, 0.001);
    /**/ 
    let increaseOpacityAmount = increaseScaleAmount * 1.2;
    cookie.style.scale = 0;
    cookie.style.opacity = 0;
    let scale = 0;
    let opacity = 0;
    let interval = setInterval(function ()
    {
        if (scale >= 1)
        {
            clearInterval(interval);
            cookie.dataset.timeSpawned = Date.now() + randomInteger(1000, 2000);
        }

        if (opacity < 1)
        {
            opacity = Math.min(1, opacity + increaseOpacityAmount);
            cookie.style.opacity = opacity;
        }

        /*Math.min ensures it cannot exceed 1*/
        scale = Math.min(1, scale + increaseScaleAmount);
        cookie.style.scale = scale;

    }, 10);
}

function goldenCookieFadeOut(cookie)
{
    let decreaseOpacityAmount = randomFloat(0.0006, 0.001);
    /**/
    let increaseOpacityAmount = decreaseOpacityAmount * 0.6;
    cookie.style.scale = 0;
    cookie.style.opacity = 0;
    let scale = 1;
    let opacity = 1;
    let interval = setInterval(function () {
        if (scale <= 0) {
            clearInterval(interval);
            cookie.remove();
        }

        if (opacity > 0) {
            opacity = Math.max(0, opacity - decreaseOpacityAmount);
            cookie.style.opacity = opacity;
        }

        /*Math.min ensures it cannot exceed 1*/
        scale = Math.max(0, scale - decreaseOpacityAmount);
        cookie.style.scale = scale;

    }, 10);

}

export function removeGoldenCookie()
{
    let goldenCookies = $(".golden-cookie");
    goldenCookies = Array.from(goldenCookies);


    goldenCookies = goldenCookies.filter(function (item)
    {
        return Date.now() - item.dataset.timeSpawned > maxGCookieLife;
    });

    for (let goldenCookie of goldenCookies)
    {
        if (goldenCookie.style.scale >= 1)
        {
            goldenCookieFadeOut(goldenCookie);
        }
    }
}