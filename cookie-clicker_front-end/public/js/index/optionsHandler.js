import $ from 'jquery';
import {getCookie} from './gameSaveManager';

export function toggleAutosave(){
    if($("autosave-check").is(":checked")){
        document.cookie = `autosave=true; SameSite=Secure; expires=Fri, 31 Dec 9999 23:59:59 GMT`;

        console.log(getCookie("autosave"));
    }else{

        console.log("hello");
        document.cookie = `autosave=false; SameSite=Secure; expires=Fri, 31 Dec 9999 23:59:59 GMT`;
    }
}

export function options(){

    if(getCookie("autosave") == 'true'){
        $('#autosave-check').prop("checked", true);
    }
}