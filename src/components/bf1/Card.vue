<script setup>
defineProps({
    image: String,
    width: {
        type: String,
        default: "380px"
    },
    height: {
        type: String,
        default: "250px"
    },
    imgHeight: {
        type: String,
        default: "130px"
    },
    imgHoverHeight: {
        type: String,
        default: "90px"
    },
    title: {
        type: String,
        default: "卡片标题"
    },
    description: {
        type: String,
        default: "卡片描述内容"
    }
});
</script>

<template>
    <div class="card">
        <img :src="image" alt="">
        <div class="content">
            <div class="title">{{ title }}</div>
            <div class="description">{{ description }}</div>
        </div>
        <div class="play">遊玩</div>
    </div>
</template>

<style scoped>
.card {
    width: v-bind(width);
    height: v-bind(height);
    color: white;
    background-color: rgba(0, 0, 0, 0.4);
    margin-right: 10px;
    transition: all 0.1s ease-in-out;
    display: flex;
    flex-direction: column;
    overflow: hidden;

    &:hover {
        color: black;
        background-color: white;

        > img {
            height: v-bind(imgHoverHeight);
        }

        > .play {
            height: 40px;
            visibility: visible;
        }
    }

    > img {
        width: 100%;
        height: v-bind(imgHeight);
        object-fit: cover;
        transition: all 0.15s ease-in-out;
    }

    > .content {
        flex: 1;
        margin: 15px;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;

        > .title {
            font-size: 20px;
            font-weight: 500;
            margin-bottom: 5px;
        }

        > .description {
            font-size: 12px;
            opacity: 0.8;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            line-clamp: 3;
        }
    }

    > .play {
        height: 0;
        visibility: hidden;
        font-size: 13px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-top: 1px solid #E5E5E5;
        transition: all 0.1s ease-in-out;
    }
}
</style>