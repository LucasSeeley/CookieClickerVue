<template>
    <div @click="doBuy($event)" class="item" :id="identifier">
        <img class="thumbnail" :src="'/images/' + imgName" draggable="false" />
        <div class="name">{{ name }}</div>
        <div class="price">
            <img class="small-cookie" src="/images/cookie.png" draggable="false" />
            <span class="price-text">{{ baseCost }}</span>
        </div>
    </div>
</template>

<script>
import { buy } from '../../public/js/index/cpsUpgradeHandler.js';

export default {
    name: 'StoreBuilding',
    props: {
        name: String,
        description: String,
        identifier: String,
        imgName: String,
        baseCost: Number
    },
    methods: {
        doBuy: function (event) {
            buy(event);
        }
    }
}
</script>

<style scoped>
.item 
{

    width: 100%;
    height: 64px;
    background-color: #C8C8C8;
    border: 6px solid #A0A0A0;
    user-select: none;
	position: relative;
	-webkit-transition: opacity 0.25s ease-out, margin-bottom 0.1s ease-out;
	-moz-transition: opacity 0.25s ease-out, margin-bottom 0.1s ease-out;
	-ms-transition: opacity 0.25s ease-out, margin-bottom 0.1s ease-out;
	-o-transition: opacity 0.25s ease-out, margin-bottom 0.1s ease-out;
	transition: opacity 0.25s ease-out, margin-bottom 0.1s ease-out;
	border:none;
	text-align:left;
	line-height:inherit;
}

.item:hover 
{
    cursor: pointer;
    background-color: #D8D8D8;
    border-color: #B0B0B0;
}

.thumbnail 
{
    position: absolute;
    left: 0;
    width: 64px;
    height: 64px;
    filter: drop-shadow(0 0 2px black);
}

.name 
{
    position: absolute;
    top: 2px;
    left: 64px;
    font-size: 1.6em;
    font-weight: bold;
    text-shadow: 0 1px 2px black;
}

.price 
{
    position: absolute;
    bottom: 6px;
    left: 64px;
}

.small-cookie 
{
    width: 1em;
    height: 1em;
    filter: drop-shadow(0 0 1px black);
}

.price-text 
{
    font-size: 0.8em;
    text-shadow: 0 1px 2px black;
}
</style>