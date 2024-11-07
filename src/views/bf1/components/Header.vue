<script setup>
import {ref, useTemplateRef, onMounted} from "vue";
import {useRouter} from "vue-router";

const trackLeft = ref("0px");
const trackWidth = ref("40px");

const router = useRouter();

// 根据路由生成导航
const navArray = router.getRoutes().filter((x) => x.path.startsWith("/bf1/"));
const itemRefs = useTemplateRef("items");

// 在组件挂载完成后执行
onMounted(() => {
    const path = router.currentRoute.value;
    setTrackOffset(path.meta);
});

// 路由前置守卫
router.beforeEach((to) => {
    setTrackOffset(to.meta);
});

// 设置导航滑轨偏移
function setTrackOffset(meta) {
    const element = itemRefs.value[meta.index].$el;
    trackLeft.value = element.offsetLeft + "px";
    trackWidth.value = element.offsetWidth + "px";
}

// 切换全屏
function toggleFullscreen() {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen();
    } else {
        document.exitFullscreen();
    }
}
</script>

<template>
    <div class="container">
        <!-- 导航菜单 -->
        <nav class="tab-header">
            <RouterLink class="router-link" ref="items" v-for="item in navArray" :to="item.path">
                {{ item.meta.title }}
            </RouterLink>
            <div class="track"></div>
        </nav>
        <!-- 战地1等级和Logo -->
        <div class="bf1-logo">
            <div class="rank">
                <img class="rank-logo" src="/images/rank/rank-150.png" alt="">
                <div class="rank-150">150</div>
            </div>
            <img class="bf1-premium" src="/images/logo/logo-premium-pc.png" alt="" @click="toggleFullscreen">
        </div>
    </div>
</template>

<style scoped>
.container {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    padding: 0 100px;

    > .tab-header {
        flex: 1;
        display: flex;
        flex-direction: row;
        border-bottom: 1px solid var(--bf1-line-color);
        position: relative;
        margin-bottom: 10px;

        > .track {
            position: absolute;
            background-color: white;
            width: v-bind(trackWidth);
            height: 1px;
            left: v-bind(trackLeft);
            top: 45px;
            transition: all 0.3s ease-in-out;
        }
    }

    > .bf1-logo {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 20px 10px 0 20px;

        > .rank {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            margin-right: 15px;

            > .rank-logo {
                width: 40px;
                height: 40px;
                border-radius: 50%;
                border: 2px solid #FF9900;
                padding: 5px;
            }

            > .rank-150 {
                width: 30px;
                text-align: center;
                color: white;
                font-size: 8px;
                margin-top: 8px;
                border: 1px solid rgba(255, 255, 255, 0.5);
            }
        }

        > .bf1-premium {
            height: 50px;
        }
    }
}

.router-link {
    color: #ededed;
    background-color: transparent;
    padding: 10px 0;
    margin-right: 26px;
    font-size: 20px;
    font-weight: 500;
    text-wrap: nowrap;
    text-decoration: none;
    transition: all 0.2s ease-in-out;

    &:hover {
        color: #ffffff;
        text-shadow: 0 0 10px #ffffff;
    }
}

.router-link-active {
    color: #ffffff;
}
</style>