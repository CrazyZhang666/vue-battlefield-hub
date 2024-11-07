const faction = {
    AHU: {name: "奥匈帝国", image: "/images/faction/faction_ahu.png"},
    GER: {name: "德意志帝国", image: "/images/faction/faction_ger.png"},
    ITA: {name: "义大利王国", image: "/images/faction/faction_ita.png"},
    OTM: {name: "鄂图曼帝国", image: "/images/faction/faction_otm.png"},
    UK: {name: "大英帝国", image: "/images/faction/faction_uk.png"},
    USA: {name: "美利坚合众国", image: "/images/faction/faction_usa.png"},
    FRA: {name: "法国", image: "/images/faction/faction_fra.png"},
    RUS: {name: "俄罗斯帝国", image: "/images/faction/faction_rus.png"},
    BOL: {name: "红军", image: "/images/faction/faction_bol.png"},
    WA: {name: "白军", image: "/images/faction/faction_wa.png"},
    OTT: {name: "鄂图曼帝国", image: "/images/faction/faction_ott.png"},
    UKG: {name: "大英帝国", image: "/images/faction/faction_ukg.png"},
    UKM: {name: "皇家海军陆战队", image: "/images/faction/faction_ukm.png"}
};

const region = {
    NAm: "北美洲",
    SAm: "南美洲",
    AC: "南极洲",
    Afr: "非洲",
    EU: "欧洲",
    Asia: "亚洲",
    OC: "大洋洲"
};

function isOfficialServer(type) {
    return type === 1;
}

function getServerImageData(map) {
    switch (map.toLowerCase()) {
        case "mp_mountainfort":
            return {
                mapName: "格拉巴山",
                mapImage: "/images/map/mp_mountainfort_medium.jpg",
                map2Image: "/images/map2/mp_mountainfort_any.jpg",
                team1: faction.ITA,
                team2: faction.AHU
            };
        case "mp_forest":
            return {
                mapName: "阿尔贡森林",
                mapImage: "/images/map/mp_forest_medium.jpg",
                map2Image: "/images/map2/mp_forest_any.jpg",
                team1: faction.USA,
                team2: faction.GER
            };
        case "mp_italiancoast":
            return {
                mapName: "帝国边境",
                mapImage: "/images/map/mp_italiancoast_medium.jpg",
                map2Image: "/images/map2/mp_italiancoast_any.jpg",
                team1: faction.ITA,
                team2: faction.AHU
            };
        case "mp_chateau":
            return {
                mapName: "流血宴厅",
                mapImage: "/images/map/mp_chateau_medium.jpg",
                map2Image: "/images/map2/mp_chateau_any.jpg",
                team1: faction.USA,
                team2: faction.GER
            };
        case "mp_scar":
            return {
                mapName: "圣康坦的伤痕",
                mapImage: "/images/map/mp_scar_medium.jpg",
                map2Image: "/images/map2/mp_scar_any.jpg",
                team1: faction.GER,
                team2: faction.UK
            };
        case "mp_desert":
            return {
                mapName: "西奈沙漠",
                mapImage: "/images/map/mp_desert_medium.jpg",
                map2Image: "/images/map2/mp_desert_any.jpg",
                team1: faction.UK,
                team2: faction.OTM
            };
        case "mp_amiens":
            return {
                mapName: "亚眠",
                mapImage: "/images/map/mp_amiens_medium.jpg",
                map2Image: "/images/map2/mp_amiens_any.jpg",
                team1: faction.GER,
                team2: faction.UK
            };
        case "mp_suez":
            return {
                mapName: "苏伊士",
                mapImage: "/images/map/mp_suez_medium.jpg",
                map2Image: "/images/map2/mp_suez_any.jpg",
                team1: faction.UK,
                team2: faction.OTM
            };
        case "mp_faofortress":
            return {
                mapName: "法欧堡",
                mapImage: "/images/map/mp_faofortress_medium.jpg",
                map2Image: "/images/map2/mp_faofortress_any.jpg",
                team1: faction.UK,
                team2: faction.OTM
            };
        case "mp_giant":
            return {
                mapName: "庞然暗影",
                mapImage: "/images/map/mp_giant_medium.jpg",
                map2Image: "/images/map2/mp_giant_any.jpg",
                team1: faction.UK,
                team2: faction.GER
            };
        case "mp_fields":
            return {
                mapName: "苏瓦松",
                mapImage: "/images/map/mp_fields_medium.jpg",
                map2Image: "/images/map2/mp_fields_any.jpg",
                team1: faction.FRA,
                team2: faction.GER
            };
        case "mp_graveyard":
            return {
                mapName: "决裂",
                mapImage: "/images/map/mp_graveyard_medium.jpg",
                map2Image: "/images/map2/mp_graveyard_any.jpg",
                team1: faction.FRA,
                team2: faction.GER
            };
        case "mp_underworld":
            return {
                mapName: "法乌克斯要塞",
                mapImage: "/images/map/mp_underworld_medium.jpg",
                map2Image: "/images/map2/mp_underworld_any.jpg",
                team1: faction.GER,
                team2: faction.FRA
            };
        case "mp_verdun":
            return {
                mapName: "凡尔登高地",
                mapImage: "/images/map/mp_verdun_medium.jpg",
                map2Image: "/images/map2/mp_verdun_any.jpg",
                team1: faction.GER,
                team2: faction.FRA
            };
        case "mp_trench":
            return {
                mapName: "尼维尔之夜",
                mapImage: "/images/map/mp_trench_medium.jpg",
                map2Image: "/images/map2/mp_trench_any.jpg",
                team1: faction.GER,
                team2: faction.FRA
            };
        case "mp_shoveltown":
            return {
                mapName: "攻占托尔",
                mapImage: "/images/map/mp_shoveltown_medium.jpg",
                map2Image: "/images/map2/mp_shoveltown_any.jpg",
                team1: faction.GER,
                team2: faction.FRA
            };
        case "mp_bridge":
            return {
                mapName: "勃鲁希洛夫关口",
                mapImage: "/images/map/mp_bridge_medium.jpg",
                map2Image: "/images/map2/mp_bridge_any.jpg",
                team1: faction.RUS,
                team2: faction.AHU
            };
        case "mp_islands":
            return {
                mapName: "阿尔比恩",
                mapImage: "/images/map/mp_islands_medium.jpg",
                map2Image: "/images/map2/mp_islands_any.jpg",
                team1: faction.GER,
                team2: faction.RUS
            };
        case "mp_ravines":
            return {
                mapName: "武普库夫山口",
                mapImage: "/images/map/mp_ravines_medium.jpg",
                map2Image: "/images/map2/mp_ravines_any.jpg",
                team1: faction.AHU,
                team2: faction.RUS
            };
        case "mp_valley":
            return {
                mapName: "加利西亚",
                mapImage: "/images/map/mp_valley_medium.jpg",
                map2Image: "/images/map2/mp_valley_any.jpg",
                team1: faction.RUS,
                team2: faction.AHU
            };
        case "mp_tsaritsyn":
            return {
                mapName: "察里津",
                mapImage: "/images/map/mp_tsaritsyn_medium.jpg",
                map2Image: "/images/map2/mp_tsaritsyn_any.jpg",
                team1: faction.BOL,
                team2: faction.RUS
            };
        case "mp_volga":
            return {
                mapName: "窝瓦河",
                mapImage: "/images/map/mp_volga_medium.jpg",
                map2Image: "/images/map2/mp_volga_any.jpg",
                team1: faction.BOL,
                team2: faction.RUS
            };
        case "mp_beachhead":
            return {
                mapName: "海丽丝岬",
                mapImage: "/images/map/mp_beachhead_medium.jpg",
                map2Image: "/images/map2/mp_beachhead_any.jpg",
                team1: faction.UK,
                team2: faction.OTM
            };
        case "mp_harbor":
            return {
                mapName: "泽布吕赫",
                mapImage: "/images/map/mp_harbor_medium.jpg",
                map2Image: "/images/map2/mp_harbor_any.jpg",
                team1: faction.UKM,
                team2: faction.GER
            };
        case "mp_naval":
            return {
                mapName: "黑尔戈兰湾",
                mapImage: "/images/map/mp_naval_medium.jpg",
                map2Image: "/images/map2/mp_naval_any.jpg",
                team1: faction.UKM,
                team2: faction.GER
            };
        case "mp_ridge":
            return {
                mapName: "阿奇巴巴",
                mapImage: "/images/map/mp_ridge_medium.jpg",
                map2Image: "/images/map2/mp_ridge_any.jpg",
                team1: faction.UK,
                team2: faction.OTM
            };
        case "mp_offensive":
            return {
                mapName: "索姆河",
                mapImage: "/images/map/mp_offensive_medium.jpg",
                map2Image: "/images/map2/mp_offensive_any.jpg",
                team1: faction.UK,
                team2: faction.GER
            };
        case "mp_hell":
            return {
                mapName: "帕斯尚尔",
                mapImage: "/images/map/mp_hell_medium.jpg",
                map2Image: "/images/map2/mp_hell_any.jpg",
                team1: faction.UK,
                team2: faction.GER
            };
        case "mp_river":
            return {
                mapName: "卡波雷托",
                mapImage: "/images/map/mp_river_medium.jpg",
                map2Image: "/images/map2/mp_river_any.jpg",
                team1: faction.AHU,
                team2: faction.ITA
            };
        case "mp_alps":
            return {
                mapName: "剃刀边缘",
                mapImage: "/images/map/mp_alps_medium.jpg",
                map2Image: "/images/map2/mp_alps_any.jpg",
                team1: faction.GER,
                team2: faction.UK
            };
        case "mp_blitz":
            return {
                mapName: "伦敦的呼唤：夜袭",
                mapImage: "/images/map/mp_blitz_medium.jpg",
                map2Image: "/images/map2/mp_blitz_any.jpg",
                team1: faction.GER,
                team2: faction.UK
            };
        case "mp_london":
            return {
                mapName: "伦敦的呼唤：灾祸",
                mapImage: "/images/map/mp_london_medium.jpg",
                map2Image: "/images/map2/mp_london_any.jpg",
                team1: faction.GER,
                team2: faction.UK
            };
        default:
            return {};
    }
}

function getCountryImageData(country) {
    switch (country) {
        case 1:
            return {
                // 日本
                image: "/images/country/country-jp.png",
                ping: 56,
                pingImage: "/images/ping/ping-good.png"
            };
        case 2:
            return {
                // 香港
                image: "/images/country/country-hk.png",
                ping: 32,
                pingImage: "/images/ping/ping-best.png"
            };
        case 3:
            return {
                // 美国
                image: "/images/country/country-us.png",
                ping: 180,
                pingImage: "/images/ping/ping-ok.png"
            };
        case 4:
            return {
                // 阿拉伯
                image: "/images/country/country-za.png",
                ping: 260,
                pingImage: "/images/ping/ping-worst.png"
            };
        case 5:
            return {
                // 澳大利亚
                image: "/images/country/country-au.png",
                ping: 160,
                pingImage: "/images/ping/ping-bad.png"
            };
        case 6:
            return {
                // 德国
                image: "/images/country/country-de.png",
                ping: 145,
                pingImage: "/images/ping/ping-ok.png"
            };
        case 7:
            return {
                // 巴西
                image: "/images/country/country-br.png",
                ping: 210,
                pingImage: "/images/ping/ping-worst.png"
            };
    }
}

function getRankImageData(rank) {
    switch (true) {
        case rank === 0:
            return "/images/rank/rank-0.png";
        case rank <= 9:
            return "/images/rank/rank-1-9.png";
        case rank <= 19:
            return "/images/rank/rank-10-19.png";
        case rank <= 29:
            return "/images/rank/rank-20-29.png";
        case rank <= 39:
            return "/images/rank/rank-30-39.png";
        case rank <= 49:
            return "/images/rank/rank-40-49.png";
        case rank <= 59:
            return "/images/rank/rank-50-59.png";
        case rank <= 69:
            return "/images/rank/rank-60-69.png";
        case rank <= 79:
            return "/images/rank/rank-70-79.png";
        case rank <= 89:
            return "/images/rank/rank-80-89.png";
        case rank <= 99:
            return "/images/rank/rank-90-99.png";
        case rank <= 109:
            return "/images/rank/rank-100-109.png";
        case rank <= 119:
            return "/images/rank/rank-110-119.png";
        case rank <= 129:
            return "/images/rank/rank-120-129.png";
        case rank <= 139:
            return "/images/rank/rank-130-139.png";
        case rank <= 149:
            return "/images/rank/rank-140-149.png";
        case rank === 150:
            return "/images/rank/rank-150.png";
        default:
            return "/images/rank/rank-0.png";
    }
}

function getPlayerPingData(ping) {
    switch (true) {
        case ping >= 0 && ping <= 49:
            return "/images/ping2/ping-tiny-4.png";
        case ping >= 50 && ping <= 99:
            return "/images/ping2/ping-tiny-3.png";
        case ping >= 100 && ping <= 169:
            return "/images/ping2/ping-tiny-2.png";
        case ping >= 170 && ping <= 219:
            return "/images/ping2/ping-tiny-1.png";
        case ping >= 220 && ping <= 999:
            return "/images/ping2/ping-tiny-0.png";
        default:
            return "/images/ping2/ping-tiny-0.png";
    }
}

export {
    isOfficialServer,
    getServerImageData,
    getCountryImageData,
    getRankImageData,
    getPlayerPingData
};