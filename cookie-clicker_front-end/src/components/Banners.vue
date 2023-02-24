<template>
    <div id="bakery-name-banner" data-bs-toggle="modal" @click="doBringUpRenamePrompt()"
        data-bs-target="#bakery-name-modal" title="Rename Bakery">
        <span id="bakery-name">null</span>'s bakery
    </div>

    <div class="cookie-count-banner">
        <div class="cookies">
            <span id="cookie-counter">0</span>
            <span> cookies</span>
        </div>
        <div class="cps">
            <span>per second: </span>
            <span id="cps-counter">0</span>
        </div>
    </div>
</template>

<script>
import * as bakeryName from '../../public/js/index/bakeryName.js';

export default {
    name: "CookieBanners",
    methods: {
        doBringUpRenamePrompt: function ()
        {
            bakeryName.bringUpRenamePrompt();
        }
    }
}
</script>

<style scoped>
#bakery-name-banner
{
    background-color: #00000050;
    margin: auto;
    margin-top: 10%;
    text-align: center;
    padding: 0.4vh 0;
    font-size: calc(12px +0.6vw);
    /**/
    border-radius: 1000px;
    width: 80%;
    user-select: none;
}

#bakery-name-banner:hover
{
    cursor: pointer;
    text-shadow: 0 0 10px #FFF;
}

.cookie-count-banner
{
    background-color: #00000050;
    margin-top: 2%;
    text-align: center;
}

.cookies
{
    font-size: calc(16px + 1.2vw);
}

.cps
{
    font-size: calc(11px + 0.3vw);
}
</style>