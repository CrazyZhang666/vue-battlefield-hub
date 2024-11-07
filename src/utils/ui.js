import {useAppStore} from "@/stores/app.js";

const store = useAppStore();

function getRandomVideoData() {
    if (store.videoIndex < 3 && store.videoIndex >= 0) {
        store.videoIndex++;
    } else {
        store.videoIndex = 0;
    }

    switch (store.videoIndex) {
        case 0:
            return {
                video: "/videos/MP_Naval_BGLoop.mp4",
                image: "/videos/poster/MP_Naval_BGLoop.jpg"
            };
        case 1:
            return {
                video: "/videos/MP_Harbor_BGLoop.mp4",
                image: "/videos/poster/MP_Harbor_BGLoop.jpg"
            };
        case 2:
            return {
                video: "/videos/MP_Beachhead_BGLoop.mp4",
                image: "/videos/poster/MP_Beachhead_BGLoop.jpg"
            };
        case 3:
        default:
            return {
                video: "/videos/MP_Ridge_BGLoop.mp4",
                image: "/videos/poster/MP_Ridge_BGLoop.jpg"
            };
    }
}

function getRandomCampaignImage() {
    if (store.campaignIndex < 2 && store.campaignIndex >= 0) {
        store.campaignIndex++;
    } else {
        store.campaignIndex = 0;
    }

    switch (store.campaignIndex) {
        case 0:
            return "/images/card/campaign/card-campaign-01.png";
        case 1:
            return "/images/card/campaign/card-campaign-02.png";
        case 2:
        default:
            return "/images/card/campaign/card-campaign-03.png";
    }
}

function getRandomSoldierImage() {
    if (store.soldierIndex < 6 && store.soldierIndex >= 0) {
        store.soldierIndex++;
    } else {
        store.soldierIndex = 0;
    }

    switch (store.soldierIndex) {
        case 0:
            return "/images/soldier/soldier-assault.png";
        case 1:
            return "/images/soldier/soldier-medic.png";
        case 2:
            return "/images/soldier/soldier-support.png";
        case 3:
            return "/images/soldier/soldier-scout.png";
        case 4:
            return "/images/soldier/soldier-tanker.png";
        case 5:
            return "/images/soldier/soldier-pilot.png";
        case 6:
        default:
            return "/images/soldier/soldier-cavalry.png";
    }
}

export {
    getRandomVideoData,
    getRandomCampaignImage,
    getRandomSoldierImage
};