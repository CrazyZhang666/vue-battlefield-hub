<script setup>
import Card from "@/components/bf1/Card.vue";
</script>

<template>
    <div class="bf1-view container">
        <Card width="280px" height="400px" img-height="230px" img-hover-height="190px"
              image="/images/card/multiplayer/card-multiplayer-01.png"
              title="行動模式"
              description="《戰地風雲》系列作的全新模式。參與跨越數個地圖的大規模戰爭。在多個戰線上進攻或防守。"/>
        <Card width="280px" height="400px" img-height="230px" img-hover-height="190px"
              image="/images/card/multiplayer/card-multiplayer-02.png"
              title="快速配對"
              description="加入任何遊戲模式最快的方式。"/>
        <Card width="280px" height="400px" img-height="230px" img-hover-height="190px"
              image="/images/card/multiplayer/card-multiplayer-03.png"
              title="伺服器瀏覽器"
              description="尋找完美遊戲的老方法。設定好篩選條件後就能準備開始了。"/>
        <Card width="280px" height="400px" img-height="230px" img-hover-height="190px"
              image="/images/card/multiplayer/card-multiplayer-04.png"
              title="自訂遊戲"
              description="享受自訂體驗，突顯社群中目前最熱門的遊戲模式。找出您的最愛。"/>
    </div>
</template>

<style scoped>
.container {
    display: flex;
    flex-direction: row;
}
</style>