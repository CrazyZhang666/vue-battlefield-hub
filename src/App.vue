<script setup>
import NavMenu from "@/components/bf1/menu/NavMenu.vue";
import NavParty from "@/components/bf1/party/NavParty.vue";
</script>

<template>
    <main>
        <div class="main-left">
            <NavMenu/>
        </div>
        <div class="main-view">
            <RouterView/>
        </div>
        <div class="main-right">
            <NavParty/>
        </div>
    </main>
</template>

<style scoped>
main {
    width: 100vw;
    height: 100vh;

    > .main-left {
        position: fixed;
        left: 0;
        top: 0;
        bottom: 0;
        z-index: 99;
    }

    > .main-view {
        width: 100vw;
        height: 100vh;
    }

    > .main-right {
        position: fixed;
        top: 20px;
        bottom: 20px;
        right: 0;
        z-index: 99;
        width: 100px;
        overflow: hidden;
        transition: all 0.1s ease-in-out;

        &:hover {
            width: 240px;
            background-color: rgba(0, 0, 0, 0.8);
        }
    }
}
</style>
