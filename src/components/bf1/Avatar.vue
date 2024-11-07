<script setup>
defineProps({
    icon: String,
    color: {
        type: String,
        default: "#02A0E2"
    }
});
</script>

<template>
    <div class="border">
        <div class="line"></div>
        <div class="avatar">
            <img :src="icon" alt="">
        </div>
    </div>
</template>

<style scoped>
.border {
    display: flex;
    flex-direction: row;
    margin-bottom: 8px;

    > .line {
        width: 2px;
        background-color: v-bind(color);
        margin-right: 2px;
    }

    > .avatar {
        width: 36px;
        height: 36px;

        > img {
            width: 100%;
            height: 100%;
        }
    }
}
</style>