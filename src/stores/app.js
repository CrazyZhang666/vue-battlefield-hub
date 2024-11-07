import {ref} from "vue";
import {defineStore} from "pinia";

export const useAppStore = defineStore("main", () => {
    const videoIndex = ref(0);
    const campaignIndex = ref(0);
    const soldierIndex = ref(0);

    return {videoIndex, campaignIndex, soldierIndex};
}, {
    persist: true
});