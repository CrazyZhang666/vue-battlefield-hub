<script setup>
defineProps({
    image: String,
    tag: String
});
</script>

<template>
    <div class="option">
        <div class="option-image">
            <img :src="image" alt=""/>
        </div>
        <div class="option-tag">{{ tag }}</div>
    </div>
</template>

<style scoped>
.option {
    width: 240px;
    height: 300px;
    color: #ffffff;
    background-color: rgba(0, 0, 0, 0.4);
    transition: all 0.1s ease-in-out;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    margin-right: 10px;

    &:hover {
        color: #000000;
        background-color: #ffffff;

        > .option-image {
            > img {
                filter: invert(100%);
            }
        }

        > .option-tag {
            color: #000000;
        }
    }

    > .option-image {
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;

        > img {
            width: 50%;
            object-fit: cover;
        }
    }

    > .option-tag {
        text-align: left;
        font-size: 14px;
        padding: 15px 20px;
        color: rgba(255, 255, 255, 0.8);
    }
}
</style>