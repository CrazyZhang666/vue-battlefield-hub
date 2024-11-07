<script setup>
import {onMounted, onBeforeMount} from "vue";

defineProps({
    isShow: Boolean
});

const emit = defineEmits(["close"]);

onMounted(() => {
    window.addEventListener("keyup", handleAllKey);
});

onBeforeMount(() => {
    window.removeEventListener("keyup", handleAllKey);
});

const handleAllKey = (event) => {
    // Escape
    if (event.keyCode === 27) {
        emit("close");
    }
};
</script>

<template>
    <Transition name="modal">
        <div v-if="isShow" class="modal-mask">
            <div class="modal-container">
                <slot name="content"/>
                <span class="modal-close" @click="$emit('close')"/>
            </div>
        </div>
    </Transition>
</template>

<style scoped>
.modal-mask {
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 9998;
    background-color: rgba(0, 0, 0, 0.2);
    backdrop-filter: blur(26px);
    transition: all 0.2s ease-in-out;

    > .modal-container {
        width: 100vw;
        height: 100vh;
        transition: all 0.2s ease-in-out;

        > .modal-close {
            position: fixed;
            top: 20px;
            right: 20px;
            opacity: 0.5;
            width: 20px;
            height: 20px;
            transition: opacity 0.1s ease-in-out;

            &::before {
                content: "";
                position: absolute;
                width: 100%;
                height: 2px;
                top: 50%;
                left: 0;
                background-color: #ffffff;
                transform: rotate(45deg);
            }

            &::after {
                content: "";
                position: absolute;
                width: 100%;
                height: 2px;
                top: 50%;
                left: 0;
                background-color: #ffffff;
                transform: rotate(-45deg);
            }

            &:hover {
                opacity: 1;
            }
        }
    }
}

.modal-enter-from {
    opacity: 0;
}

.modal-leave-to {
    opacity: 0;
}

.modal-enter-from .modal-container,
.modal-leave-to .modal-container {
    transform: scale(1.1);
}
</style>