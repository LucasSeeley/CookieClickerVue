<template>
    <div class="cookie-container">
        <img class="shine" draggable="false" src="/images/shine.png" />
        <!--two classes shine and reverse-->
        <img class="shine reverse" draggable="false" src="/images/shine.png" />
        <img @click="doCookieClicked()" id="cookie-button" src="/images/cookie.png" draggable="false" />
    </div>
</template>

<script>
import * as cookieHandler from '../../public/js/index/cookieHandler.js';

export default{
    name: 'CookieClicker',
    methods:{
        doCookieClicked: function() 
        {
            cookieHandler.cookieClicked();
        }   
    }
}

setInterval(cookieHandler.calculateCps, 10);

</script>

<style scoped>
.cookie-container
{
    position:relative;
    margin:auto;
    margin-top:16%;
    width:45%;
    min-width:250px;
    user-select:none;
}

#cookie-button {
    position:absolute;
    top:0;
    left:0;
    max-width:100%;
    border-radius:100%;
    display:block;
    /*will try and keep aspect ratio will not go below */
    /*will take .2s to grow and shrink*/
    transition:all .2s ease-in-out;
}
#cookie-button:hover {
    cursor:pointer;
    transform:scale(1.05);

}

.cookie-container .shine {
    z-index: -1;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    /**/
    scale: 2;
    border-radius: 100%;
    display: block;
    /*50% transparent*/
    opacity: 0.5;
    animation-name: spin;
    /**/
    animation-duration: 20s;
    animation-iteration-count: infinite;
    /*keep it moving the same way the whole time*/
    animation-timing-function: linear;
}
/*by not having a space its an && statement*/
.cookie-container .shine.reverse

{
       scale:1.8;
       opacity:0.4;
       /*if it has both classes it will play reverse*/
       animation-direction:reverse;
       animation-duration:22s;
  }


@keyframes spin {
    from {
        transform: rotate(0deg)
    }
    to {
        transform: rotate(360deg)
    }
}
</style>