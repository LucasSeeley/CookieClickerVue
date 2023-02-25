<template>
    <div class="store">
        <div class="header">Store</div>
        <hr />
        <div class="category" id="switches"></div>
        <hr />
        <div class="category" id="upgrades"></div>
        <hr />
        <div class="category" id="buildings">
            <StoreBuilding name="Cursor" description="Auto-clicks once every 10 seconds." identifier="cursor-building"
                baseCost=15 />
            <StoreBuilding name="Grandma" description="A nice grandma to bake more cookies."
                identifier="grandma-building" baseCost=100 />
            <StoreBuilding name="Farm" description="Grows cookie plants from cookie seeds." identifier="farm-building"
                baseCost=1100 />
            <StoreBuilding name="Mine" description="Mines out cookie dough and chocolate chips."
                identifier="mine-building" baseCost=12000 />
            <StoreBuilding name="Factory" description="Produces large quantities of cookies."
                identifier="factory-building" baseCost=130000 />
            <StoreBuilding name="Bank" description="Generates cookies from interest." identifier="bank-building"
                baseCost=1400000 />
            <StoreBuilding name="Temple" description="Full of precious, ancient chocolate." identifier="temple-building"
                baseCost=20000000 />
            <StoreBuilding name="Wizard Tower" description="Summons cookies with magic spells."
                identifier="wizard-tower-building" baseCost=330000000 />
            <StoreBuilding name="Shipment" description="Brings in fresh cookies from the cookie planet."
                identifier="shipment-building" baseCost=5100000000 />
            <StoreBuilding name="Alchemy Lab" description="Turns gold into cookies!" identifier="alchemy-lab-building"
                baseCost=75000000000 />
            <StoreBuilding name="Portal" description="Opens the door to the Cookieverse." identifier="portal-building"
                baseCost=1000000000000 />
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