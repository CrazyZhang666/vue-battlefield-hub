<script setup>
import {ref, onMounted} from "vue";
import {getRandomSoldierImage} from "@/utils/ui.js";

const soldierImage = ref("");

onMounted(() => {
    soldierImage.value = getRandomSoldierImage();
});
</script>

<template>
    <div class="bf1-view container">
        <div class="soldier-box">
            <div class="soldier-image">
                <img :src="soldierImage" alt="">
            </div>
            <div class="soldier-content">
                <div class="rank-name">
                    <img class="rank-logo" src="/images/rank/rank-150.png" alt="">
                    <div class="player-info">
                        <div class="name">[DICE] CrazyZhang666</div>
                        <div class="rank-xp-part">
                            <div class="part-rank">150</div>
                            <div class="part-xp">50,000,000 / 50,000,000</div>
                        </div>
                    </div>
                </div>
                <div class="player-detail">
                    <div class="player-option">
                        <div class="option-common">自定士兵</div>
                        <div class="option-common">战斗包</div>
                        <div class="option-common">社群任务</div>
                        <div class="option-common">勤务小任务</div>
                        <div class="option-common">战队</div>
                        <div class="option-common">武器和配备</div>
                        <div class="option-common">载具</div>
                        <div class="option-common">勋章</div>
                        <div class="option-common">动带</div>
                        <div class="option-common">百科</div>
                        <div class="option-common">狗牌</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.container {
    .soldier-box {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: flex-start;

        > .soldier-image {
            width: 400px;
            display: flex;
            flex-direction: row;
            justify-content: flex-start;
            align-items: flex-start;

            > img {
                width: 100%;
                object-fit: cover;
            }
        }

        > .soldier-content {
            flex: 1;
            margin-left: 20px;
            margin-top: 30px;

            > .rank-name {
                display: flex;
                flex-direction: row;
                justify-content: flex-start;
                align-items: center;

                > .rank-logo {
                    width: 80px;
                    height: 80px;
                    border-radius: 50%;
                    border: 2px solid #FF9900;
                    padding: 15px;
                }

                > .player-info {
                    margin-left: 15px;

                    > .name {
                        font-size: 26px;
                    }

                    > .rank-xp-part {
                        margin-top: 5px;
                        display: flex;

                        > .part-rank {
                            width: 50px;
                            text-align: center;
                            border: 1px solid rgba(255, 255, 255, 0.5);
                            margin-right: 10px;
                            font-size: 14px;
                        }
                    }
                }
            }

            > .player-detail {
                display: flex;

                > .player-option {
                    display: flex;
                    flex-direction: column;
                    justify-content: flex-start;
                    align-items: flex-start;
                    margin-top: 30px;
                    overflow: hidden auto;
                    height: 500px;

                    > .option-common {
                        height: 50px;
                        width: 300px;
                        border-top: 1px solid rgba(255, 255, 255, 0.2);
                        line-height: 50px;
                        padding-left: 15px;
                        font-size: 14px;

                        &:hover {
                            color: #000000;
                            background-color: #ffffff;
                        }

                        &:last-child {
                            border-bottom: 1px solid rgba(255, 255, 255, 0.2);
                        }
                    }
                }
            }
        }
    }
}
</style>