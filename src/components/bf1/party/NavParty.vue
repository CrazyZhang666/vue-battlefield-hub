<script setup>
import Avatar from "@/components/bf1/Avatar.vue";
</script>

<template>
    <div class="party-box">
        <div class="party-content">
            <div class="party">
                <img class="img-cover" src="/images/party/party-minimized.png" alt="">
            </div>
            <div class="add">
                <Avatar icon="/images/party/icon-add-white.png" color="translate"/>
            </div>
            <div class="playing">
                <img class="img-cover" src="/images/party/playing-minimized.png" alt="">
            </div>
            <div class="playing-list">
                <Avatar icon="/images/menu/menu-icon-player.png" v-for="index of 24" :key="index"/>
            </div>
        </div>
    </div>
</template>

<style scoped>
.party-box {
    width: 100%;
    height: 100%;
    margin-left: 20px;

    > .party-content {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;

        > .party {
            width: 10px;
            height: 10px;
            margin-bottom: 20px;
        }

        > .add {
            width: 36px;
            height: 36px;
            margin-bottom: 20px;
        }

        > .playing {
            width: 10px;
            height: 10px;
            margin-bottom: 20px;
        }

        > .playing-list {
            flex: 1;
        }
    }
}
</style>