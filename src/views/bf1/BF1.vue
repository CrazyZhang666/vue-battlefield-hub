<script setup>
import {ref, onMounted} from "vue";
import {useRouter} from "vue-router";

import Header from "@/views/bf1/components/Header.vue";

import {getRandomVideoData} from "@/utils/ui.js";

const router = useRouter();

const backVideo = ref("");
const backImage = ref("");

// 路由切换动画名称
const transitionName = ref("");
// 背景视频偏移数据
const videoLeftOffset = ref("-150px");

// 在组件挂载完成后执行
onMounted(() => {
    getRandomVideo();
});

// 获取随机背景视频
function getRandomVideo() {
    let result = getRandomVideoData();
    backVideo.value = result.video;
    backImage.value = result.image;
}

// 路由前置守卫
router.beforeEach((to, from) => {
    // 根据路由标记判断触发哪个动画
    if (to.meta.index > from.meta.index) {
        // 从右往左动画
        transitionName.value = "slide-right";
    } else if (to.meta.index < from.meta.index) {
        // 从左往右动画
        transitionName.value = "slide-left";
    } else {
        transitionName.value = "";
    }
    // 设置背景视频偏移数据
    videoLeftOffset.value = to.meta.offset;
});
</script>

<template>
    <!-- 战地1页面 -->
    <div class="bf1">
        <!-- 背景视频 -->
        <video autoplay loop muted preload="auto" class="main-video" :poster="backImage">
            <source :src="backVideo" type="video/mp4"/>
        </video>
        <!-- 主要内容区域 -->
        <div class="main-container">
            <!-- 顶部导航菜单 -->
            <Header/>
            <!-- 导航内容区域 -->
            <div class="main-view">
                <RouterView v-slot="{ Component }">
                    <transition :name="transitionName">
                        <keep-alive>
                            <component :is="Component"/>
                        </keep-alive>
                    </transition>
                </RouterView>
            </div>
        </div>
    </div>
</template>

<style scoped>
.bf1 {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    overflow: hidden;

    > .main-video {
        width: 100vw;
        height: 100vh;
        position: absolute;
        top: 0;
        left: v-bind(videoLeftOffset);
        z-index: -999;
        object-fit: cover;
        scale: 1.3;
        transition: left 0.2s ease-in-out;
    }

    > .main-container {
        width: 100vw;
        height: 100vh;
        position: absolute;
        left: 0;
        top: 0;
        background-color: rgba(0, 0, 0, 0.2);
        backdrop-filter: blur(18px);
        display: flex;
        flex-direction: column;
        overflow: hidden;

        > .main-view {
            flex: 1;
            width: 200%;
            display: flex;
            overflow: hidden;
        }
    }
}

.slide-left-enter-active {
    animation: slide-left-in 0.2s;
}

.slide-left-leave-active {
    animation: slide-left-out 0.2s;
}

.slide-right-enter-active {
    animation: slide-right-in 0.2s;
}

.slide-right-leave-active {
    animation: slide-right-out 0.2s;
}

@keyframes slide-left-in {
    0% {
        transform: translateX(-200%);
    }

    100% {
        transform: translateX(-100%);
    }
}

@keyframes slide-left-out {
    0% {
        transform: translateX(0%);
    }

    100% {
        transform: translateX(100%);
    }
}

@keyframes slide-right-in {
    0% {
        transform: translateX(0%);
    }

    100% {
        transform: translateX(-100%);
    }
}

@keyframes slide-right-out {
    0% {
        transform: translateX(0%);
    }

    100% {
        transform: translateX(-100%);
    }
}
</style>