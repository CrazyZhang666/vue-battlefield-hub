<script setup>
import Card from "@/components/bf1/Card.vue";
</script>

<template>
    <div class="bf1-view container">
        <div class="welcome-msg">CrazyZhang666，快樂星期五。新的每週勛章在等著您。</div>
        <div class="card-box">
            <Card image="/images/card/home/card-home-01.png" title="行動模式"
                  description="踏上一次大戰的史詩戰役旅途。攻擊方需要佔領旗幟，並且突破由防守方所堅守的防線。"/>
            <Card image="/images/card/home/card-home-02.png" title="征服"
                  description="壯闊的全面戰爭：守住多數旗幟並殲滅敵方士兵來獲得勝利。"/>
        </div>
    </div>
</template>

<style scoped>
.container {
    display: flex;
    flex-direction: column;

    > .welcome-msg {
        color: white;
        font-size: 20px;
        margin-bottom: 20px;
    }

    > .card-box {
        display: flex;
    }
}
</style>