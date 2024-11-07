import {createRouter, createWebHistory} from "vue-router";

const routes = [
    {
        path: "/:pathMatch(.*)*",
        redirect: "/bf1/home"
    },
    {
        path: "/bf1",
        name: "bf1",
        component: () => import("@/views/bf1/BF1.vue"),
        children: [
            {
                path: "home",
                name: "home",
                component: () => import("@/views/bf1/views/HomeView.vue"),
                meta: {
                    title: "首页",
                    index: 0,
                    offset: "-150px"
                }
            },
            {
                path: "multiplayer",
                name: "multiplayer",
                component: () => import("@/views/bf1/views/MultiplayerView.vue"),
                meta: {
                    title: "多人模式",
                    index: 1,
                    offset: "-100px"
                }
            },
            {
                path: "campaign",
                name: "campaign",
                component: () => import("@/views/bf1/views/CampaignView.vue"),
                meta: {
                    title: "战役",
                    index: 2,
                    offset: "-50px"
                }
            },
            {
                path: "soldier",
                name: "soldier",
                component: () => import("@/views/bf1/views/SoldierView.vue"),
                meta: {
                    title: "士兵",
                    index: 3,
                    offset: "0px"
                }
            },
            {
                path: "store",
                name: "store",
                component: () => import("@/views/bf1/views/StoreView.vue"),
                meta: {
                    title: "商店",
                    index: 4,
                    offset: "50px"
                }
            },
            {
                path: "more",
                name: "more",
                component: () => import("@/views/bf1/views/MoreView.vue"),
                meta: {
                    title: "更多",
                    index: 5,
                    offset: "100px"
                }
            },
            {
                path: "server",
                name: "server",
                component: () => import("@/views/bf1/views/ServerView.vue"),
                meta: {
                    title: "服务器",
                    index: 6,
                    offset: "150px"
                }
            }
        ]
    }
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
});

export default router;