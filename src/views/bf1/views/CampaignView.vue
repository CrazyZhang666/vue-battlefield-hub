<script setup>
import {ref, onMounted} from "vue";
import {getRandomCampaignImage} from "@/utils/ui.js";

const campaignImage = ref("");

onMounted(() => {
    campaignImage.value = getRandomCampaignImage();
});
</script>

<template>
    <div class="bf1-view container">
        <div class="game-box">
            <div class="box-image">
                <img :src="campaignImage" alt=""/>
            </div>
            <div class="box-content">
                <div class="content-title">游玩战争故事</div>
                <div class="content-main">
                    <div class="part">
                        <div class="part-1">已完成战争故事</div>
                        <div class="part-2">6/6</div>
                    </div>
                    <div class="part">
                        <div class="part-1">百科条目</div>
                        <div class="part-2">53/53</div>
                    </div>
                    <div class="part">
                        <div class="part-1">野战手册</div>
                        <div class="part-2">66/66</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.container {
    > .game-box {
        width: 800px;
        height: 410px;
        color: white;
        background-color: rgba(0, 0, 0, 0.4);
        display: flex;
        flex-direction: column;

        &:hover {
            color: black;
            background-color: white;

            > .box-image {
                height: 210px;
            }
        }

        > .box-image {
            height: 220px;
            transition: all 0.1s ease-in-out;

            > img {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }

        > .box-content {
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;

            > .content-title {
                font-size: 24px;
                margin-bottom: 20px;
            }

            > .content-main {
                width: 100%;
                display: flex;
                flex-direction: row;
                justify-content: space-around;
                align-items: center;

                > .part {
                    text-align: center;

                    > .part-1 {
                        font-size: 14px;
                    }

                    > .part-2 {
                        margin-top: 10px;
                        font-size: 30px;
                    }
                }
            }
        }
    }
}
</style>