<template>
        <div class="modal" id="options-modal">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content dialog">
                <div class="modal-body">
                    <button type="button" data-bs-target="#options-modal"
                        class="btn-close btn-close-white close-button" aria-lavel="Close"
                        data-bs-dismiss="modal"></button>
                    <div class="header">
                        OPTIONS
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="autosave-check">
                        <label class="form-check-label" for="autosave-check">Autosave</label>
                    </div>
                    <div class="button-box">
                        <button class="btn btn-outline-dark"
                            data-bs-dismiss="modal" @click="doToggleAutosave">Confirm</button>
                        <button class="btn btn-outline-dark" data-bs-dismiss="modal">Cancel</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import $ from 'jquery';
import * as options from '../../public/js/index/optionsHandler';

export default{
    name: "OptionsModal",
    methods:{
        doToggleAutosave: function(){
            options.toggleAutosave;
        }
    }
}
</script>

<style scoped>

/*dialog box */
.dialog {
    /*relative to rename cover*/
    text-align: center !important;
    font-family: Tahoma, Arial, Helvetica, sans-serif;
    /*one way to center an absolute object on a screen (left 50%) the translate */
    background-color: var(--background-color) !important;
    box-shadow: inset 0 0 1em 1em #161616;
    /*1em is the size of your font-1em says the blur and spread should be the size of the font*/
    border: 4px ridge #80630C !important;
    /*padding:1vh 2vw;*/
    width: 80%;
    border: 4px ridge var(--border-color);
}
.dialog .header
 {
        font-weight:bold;
        font-size:calc(11px + 0.4vw);
        width:100%;

 }
.dialog .text, .dialog .input-container
{
        /*em is the same height as font if the font takes up 1 em*/
        margin-bottom:0.5em;
        border:1px solid #FFFFFF40;
        border-radius:2px;
}

.dialog .text {
        margin-top: 0.5em;
        /*in percentages */
        padding:0.5vh 1vw;
}
    /*references input tag inside input container inside dialog */
.dialog .input-container input {
        width:100%;
        font-size:0.9em;
        text-align:center;
        /*first 0 is verticle padding and second 0 is horizontal (left and right sides)*/
        padding: 0 0.2em;
        

}

.close-button {

    position:absolute;
    top:4px;
    right:4px;
    
}
.close-button:hover {
    cursor:pointer;


}

.button-box {

    display:flex;

    justify-content:space-evenly;

    font-size:0.8em;
    color:white;
    border:2px ridge var(--border-color);
}
.button-box button{
    font-size:0.8em;
    color:white;
    border: 2px ridge var(--border-color);
}
 
.button-box button:hover
{
    border: 2px ridge #C0C0C0;
}

</style>