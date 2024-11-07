<script setup>
defineProps({
    icon: String,
    hint: String,
    isActive: {
        type: Boolean,
        default: false
    },
    marginBottom: {
        type: String,
        default: "15px"
    }
});
</script>

<template>
    <div class="menu" :class="{ 'menu-active': isActive }">
        <img :src="icon" alt=""/>
        <div class="hint">{{ hint }}</div>
    </div>
</template>

<style scoped>
.menu {
    height: 40px;
    width: 70px;
    margin-bottom: v-bind(marginBottom);
    border-left: 2px solid transparent;
    border-right: 2px solid transparent;
    display: flex;
    justify-content: center;
    position: relative;

    > img {
        width: 40px;
        height: 40px;
        opacity: 0.5;
        transition: all 0.1s ease-in-out;

        &:hover {
            opacity: 0.9;

            ~ .hint {
                visibility: visible;
                opacity: 1;
            }
        }
    }

    > .hint {
        display: block;
        visibility: hidden;
        opacity: 0;
        padding: 2px 5px;
        position: absolute;
        left: 60px;
        top: 7px;
        background-color: black;
        color: white;
        font-size: 15px;
        white-space: nowrap;
        transition: all 0.1s ease-in-out;
    }
}

.menu-active {
    border-left-color: #ff9900;

    > img {
        opacity: 0.7;
    }
}
</style>
