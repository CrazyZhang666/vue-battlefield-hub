<script setup>
import Option from "@/components/bf1/Option.vue";
</script>

<template>
    <div class="bf1-view container">
        <div class="more-box">
            <Option image="/images/ui/ui-big-battlepack.png" tag="战斗包"/>
            <Option image="/images/ui/ui-big-options.png" tag="选项"/>
            <Option image="/images/ui/ui-big-companion.png" tag="小帮手"/>
            <Option image="/images/ui/ui-big-about.png" tag="关于"/>
            <Option image="/images/ui/ui-big-credits.png" tag="制作群"/>
        </div>
    </div>
</template>

<style scoped>
.container {
    > .more-box {
        display: flex;
        flex-direction: row;
    }
}
</style>