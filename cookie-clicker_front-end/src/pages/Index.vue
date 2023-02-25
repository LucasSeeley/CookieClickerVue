<template>
    <RenameModal />
    <OptionsModal />

    <div class="notif-toasts toast-container bottom-0 start-50 translate-middle-x" id="toast-container">

    </div>
    <table id="game-window">
        <tr>
            <td class="cookie column">
                <CookieBanners />

                
                <CookieButton />
            </td>
            <td class="minigame column">
                <div class="news-section">
                    <table>
                        <!--table w two rows and two columns-->
                        <tr>
                            <td class="button" @click="doOptions()" data-bs-toggle="modal" data-bs-target="#options-modal"
        title="Options">
                                Options
                            </td><!--this will span two rows-->
                            <td class="news-column" rowspan="2">
                            </td>
                            <td class="button">
                                Info
                            </td>
                        </tr>
                        <tr>
                            <td class="button">
                                Stats
                            </td>
                            <td class="button" @click="doSave()">
                                Save
                            </td>
                        </tr>
                    </table>
                </div>

            </td>
            <td class="upgrade column">
                <UpgradeStore />
            </td>
        </tr>
    </table>
</template>

<script>
import $ from 'jquery';
import * as goldenCookie from '../../public/js/index/goldenCookie.js';
import { load, save } from '../../public/js/index/gameSaveManager.js';
import CookieButton from '../components/Cookie.vue';
import RenameModal from '../components/RenameModal.vue';
import CookieBanners from '../components/Banners.vue';
import OptionsModal from '../components/OptionsModal.vue';
import {options} from '../../public/js/index/optionsHandler';
import { getCookie } from '../../public/js/index/gameSaveManager.js';
import UpgradeStore from '../components/Store.vue'

export default {
    name: 'CookieClicker',
    created(){
        document.title = "IT211 - Cookie Clicker";
    },
    components: {
        CookieButton,
        RenameModal,
        CookieBanners,
        OptionsModal,
        UpgradeStore
    },
    methods:
    {     
        doSave: function(){
            save();
        },
        doOptions: function(){
            options();
        }
    }
}

$(document).ready(function () {
    goldenCookie.convertGCookieTimeToMS();
    goldenCookie.setNextSpawnTime();
    setInterval(goldenCookie.removeGoldenCookie, 100);
    load();
    if(getCookie("autosave") === 'true'){
        window.setInterval(save, 60000);
    }
});
</script>

<style>
@import "../../public/css/variables.css";
@import "../../public/css/Index/index.css";
@import "../../public/css/Index/news.css";
</style>