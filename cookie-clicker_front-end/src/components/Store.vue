<template>
    <div class="store">
        <div class="header">Store</div>
        <hr />
        <div class="category" id="switches"></div>
        <hr />
        <div class="category" id="upgrades"></div>
        <hr />
        <div class="category" id="buildings">

        </div>
    </div>
</template>

<script>
import $ from 'jquery';

export default{
    name: "UpgradeStore",
    components:{

    },
    methods:{

    }
}
</script>

<style scoped>
.category{
    min-height: 64px;
}

hr{
    margin: 0;
    padding: 0;
    border-top: 4px solid #C0C0C0;
    opacity: 1;
}

.store{
    width: 100%;
    height: 100%;
    background-color: #00000080;
}

.header{
    font-size: 1.7em;
    font-weight: bold;
    text-align: center;
    padding-top: 4px;
}
</style>