<script setup>
import Menu from "@/components/bf1/Menu.vue";
</script>

<template>
    <div class="main-menu">
        <div class="menu-top">
            <Menu icon="/images/menu/menu-icon-bf2042.png" hint="《BATTLEFIELD 2042》"/>
            <Menu icon="/images/menu/menu-icon-bfv.png" hint="《战地风云 5》"/>
            <Menu icon="/images/menu/menu-icon-bf1.png" hint="《BATTLEFIELD 1》" is-active/>
            <Menu icon="/images/menu/menu-icon-bf4.png" hint="《战地风云4》"/>
            <Menu icon="/images/menu/menu-icon-bfh.png" hint="《战地风云 : HARDLINE》》"/>
            <Menu icon="/images/menu/menu-icon-player.png" hint="职涯"/>
            <Menu icon="/images/menu/menu-icon-platoons.png" hint="战队"/>
            <Menu icon="/images/menu/menu-icon-video.png" hint="观赏"/>
            <Menu icon="/images/menu/menu-icon-news.png" hint="最新消息"/>
        </div>
        <div class="menu-bottom">
            <Menu icon="/images/menu/menu-icon-help.png" hint="帮助" margin-bottom="0px"/>
            <Menu icon="/images/menu/menu-icon-quit.png" hint="离开" margin-bottom="0px"/>
        </div>
    </div>
</template>

<style scoped>
.main-menu {
    height: 100%;
    display: flex;
    flex-direction: column;
    border-right: 1px solid var(--bf1-line-color);

    > .menu-top {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    > .menu-bottom {
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin-bottom: 20px;
    }
}
</style>
