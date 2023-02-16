import $ from 'jquery';
import {getCookie} from './gameSaveManager';

export function toggleAutosave(){
    if(getCookie("autosave") === null){
        document.cookie = `autosave=true; SameSite=Secure; expires=Fri, 31 Dec 9999 23:59:59 GMT`;
    }
    document.cookie = `autosave=${!(getCookie("autosave") === true)}; SameSite=Secure; expires=Fri, 31 Dec 9999 23:59:59 GMT`;

    console.log(getCookie("autosave"));
}

export function options(){
    $("#rename-cover").css("visibility", "visible");
}