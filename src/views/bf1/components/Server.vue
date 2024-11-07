<script setup>
defineProps({
    server: Object,
    index: Number
});

const emit = defineEmits(
    ["onServerPlay"]
);
</script>

<template>
    <tr>
        <td>
            <!-- 服务器收藏 -->
            <div class="server-star">
                <img src="/images/ui/ui-small-star-white.png" alt="">
            </div>
        </td>

        <td>
            <!-- 服务器地图 -->
            <div class="server-image">
                <img :src="server.mapImage" alt="">
                <div class="index">{{ index + 1 }}</div>
            </div>
        </td>

        <td>
            <!-- 服务器信息 -->
            <div class="server-info">
                <div class="title">{{ server.name }}</div>
                <div class="details">
                    <div class="country">
                        <img :src="server.regionImage" alt=""/>
                    </div>
                    <div>{{ server.mapMode }} - {{ server.mapName }}</div>
                    <div v-if="server.isCustom">&nbsp;-</div>
                    <div class="custom" v-if="server.isCustom">&nbsp;自定</div>
                    <div>&nbsp;- {{ server.tickRate }}HZ</div>
                    <div class="official" v-if="server.isOfficial">[官服]</div>
                </div>
                <div class="tooltip">
                    <div class="tooltip-name">{{ server.name }}</div>
                    <div class="tooltip-description">{{ server.description }}</div>
                </div>
            </div>
        </td>

        <td>
            <!-- 服务器人数 -->
            <div class="server-count">
                <div class="player-solider">{{ server.soldier }} / {{ server.maxSoldier }}</div>
                <div v-if="server.queue!==0" class="player-queue">[{{ server.queue }}]</div>
                <div v-if="server.spectator!==0" class="player-spectator">({{ server.spectator }})</div>
            </div>
        </td>

        <td>
            <!-- 服务器Ping -->
            <div class="server-ping">
                <img :src="server.pingImage" alt="">
                <div>{{ server.ping }}</div>
            </div>
        </td>

        <td>
            <!-- 更多 -->
            <div class="server-more">
                <img src="/images/ui/ui-dots-white.png" alt="">
            </div>
        </td>

        <td>
            <!-- 游玩 -->
            <div class="server-play" @click="emit('onServerPlay')">
                <img src="/images/ui/ui-playing-minimized.png" alt="">
            </div>
        </td>
    </tr>
</template>

<style scoped>
tr {
    height: auto;
    color: #ffffff;
    border-top: 1px solid transparent;
    border-bottom: 1px solid var(--bf1-line-color);
    position: relative;

    &:hover {
        color: #000000;
        background-color: #ffffff;

        > td {
            > .server-star {
                visibility: visible;
                filter: invert(100%);
            }

            > .server-info {
                > .details {
                    color: #000000;
                }
            }

            > .server-more {
                visibility: visible;
                filter: invert(100%);
            }

            > .server-play {
                visibility: visible;
                filter: invert(100%);
            }
        }
    }

    > td {
        > .server-star {
            width: auto;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            visibility: hidden;
            opacity: 0.5;
            margin-right: 0;

            &:hover {
                opacity: 1;
            }

            > img {
                width: 14px;
                height: 14px;
                object-fit: cover;
            }
        }

        > .server-image {
            width: auto;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            position: relative;

            > img {
                width: 100px;
                height: 55px;
                object-fit: cover;
            }

            > .index {
                color: rgba(255, 255, 255, 0.5);
                position: absolute;
                left: 3px;
                bottom: 1px;
                font-size: 10px;
                font-weight: normal;
            }
        }

        > .server-info {
            width: auto;
            height: 100%;
            padding: 0 10px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: flex-start;

            > .title {
                width: 100%;
                font-size: 16px;
                font-weight: bold;
                margin-bottom: 3px;
                white-space: nowrap;
                text-overflow: ellipsis;
                overflow: hidden;
            }

            > .details {
                display: flex;
                flex-direction: row;
                justify-content: flex-start;
                align-items: center;
                font-size: 15px;
                color: rgba(255, 255, 255, 0.8);

                > .country {
                    width: 23px;
                    height: 16px;
                    margin-right: 10px;
                    box-shadow: 0 0 1px #000000;
                    overflow: hidden;
                    scale: 0.9;

                    > img {
                        width: 100%;
                        height: 100%;
                        object-fit: cover;
                    }
                }

                > .custom {
                    color: #ff9900;
                }

                > .official {
                    color: #02a0e2;
                    margin-left: 10px;
                }
            }

            > .tooltip {
                padding: 10px;
                position: absolute;
                left: 30%;
                top: 60%;
                max-width: 600px;
                box-shadow: 0 0 10px #000000;
                background-color: #ffffff;
                color: #000000;
                visibility: collapse;
                z-index: 99;

                > .tooltip-name {
                    font-size: 14px;
                    font-weight: bold;
                    margin-bottom: 5px;
                    padding-bottom: 5px;
                    border-bottom: 1px solid gray;
                }

                > .tooltip-description {
                    font-size: 12px;
                }
            }

            &:hover {
                > .tooltip {
                    visibility: visible;
                }
            }
        }

        > .server-count {
            width: auto;
            height: 100%;
            font-size: 14px;
            display: flex;
            justify-content: flex-start;
            align-items: center;

            > .player-solider {
            }

            > .player-queue {
                margin-left: 5px;
            }

            > .player-spectator {
                margin-left: 5px;
                color: rgba(255, 255, 255, 0.5);
            }
        }

        > .server-ping {
            width: auto;
            height: 100%;
            display: flex;
            justify-content: flex-start;
            align-items: center;

            > img {
                height: 10px;
                object-fit: cover;
            }

            > div {
                margin-left: 10px;
                text-align: left;
                font-size: 12px;
                font-weight: normal;
            }
        }

        > .server-more {
            width: auto;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            visibility: hidden;

            &:hover {
                > img {
                    opacity: 1;
                }
            }

            > img {
                opacity: 0.5;
                width: 21px;
                height: 5px;
                object-fit: cover;
            }
        }

        > .server-play {
            width: auto;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            visibility: hidden;
            border-left: 1px solid var(--bf1-border-color);

            &:hover {
                > img {
                    opacity: 1;
                }
            }

            > img {
                opacity: 0.5;
                width: 14px;
                height: 14px;
                object-fit: cover;
            }
        }
    }
}
</style>