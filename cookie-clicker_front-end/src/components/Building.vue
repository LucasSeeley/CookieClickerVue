<template>
    <div @click="doBuy($event)" class="item" :id="identifier">
        <img :src="'/images/' + imgName" draggable="false" class="thumbnail" />
        <div class="name">{{ name }}</div>
        <div class="price">
            <img src="/images/cookie.png" draggable="false" class="small-cookie" />
            <span class="price-text">{{ baseCost }}</span>
        </div>
    </div>
</template>

<script>
import $ from 'jquery';

export default{
    name: "StoreBuilding",
    props:{
        name: String,
        description: String,
        identifier: String,
        imgName: String,
        baseCost: Number
    },
    methods:{
        doBuy: function(event){

        }
    }
}
</script>

<style scoped>
</style>