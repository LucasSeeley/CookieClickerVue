<template>
    <div class="store">
        <div class="header">Store</div>
        <hr />
        <div class="category" id="buildings">
            <StoreBuilding name="Cursor" description="Auto-clicks once every 10 seconds." identifier="cursor-building"
                imgName="cursor.png" baseCost=15 />
            <StoreBuilding name="Grandma" description="A nice grandma to bake more cookies."
                imgName="grandma.png" identifier="grandma-building" baseCost=100 />
            <StoreBuilding name="Farm" description="Grows cookie plants from cookie seeds." identifier="farm-building"
                imgName="farm.png" baseCost=400 />
                <StoreBuilding name="Mine" description="" identifier="mine-building"
                imgName="mine.png" baseCost=1100 />
        </div>
    </div>
</template>

<script>
import StoreBuilding from './Building.vue';

export default {
    name: "UpgradeStore",
    components:
    {
        StoreBuilding
    }
}
</script>

<style scoped>
.category
{
    min-height: 64px;
    width: 100%;
    padding-left: 15px;
}

hr
{
    margin: 0 !important;
    padding: 0 !important;
    border: 1px solid transparent;
    /* border-top: 4px solid #C0C0C0; */
    opacity: 1;
    height: 10%;
    width: 21.91%;
    position: absolute;
    overflow-y: hidden;
    padding-top: 16px;
    width: 100vw;
}

.store
{
    width: 101%;
    height: 100%;
    display: inline-table;
}

.header
{
    font-size: 1.7em;
    font-weight: bold;
    text-align: center;
    padding-top: 4px;
}
</style>