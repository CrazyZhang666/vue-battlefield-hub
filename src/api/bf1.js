import myAxios from "@/api/index.js";

// 获取服务器列表
async function getServerList(option) {
    return await myAxios({
        method: "get",
        baseURL: "https://battlefield.tools/api/",
        url: "/server/query/batch",
        params: {
            name: option.name,
            modes: option.modes,
            maps: option.maps,
            slots: option.slots,
            regions: option.regions,
            types: option.types,
            limit: option.limit
        }
    });
}

// 获取服务器玩家列表
async function getServerPlayerList(gameId) {
    return await myAxios({
        method: "get",
        baseURL: "https://battlefield.tools/api/",
        url: "/server/player/query/batch",
        params: {
            game_id: gameId,
            detailed: true
        }
    });
}

export {
    getServerList,
    getServerPlayerList
};