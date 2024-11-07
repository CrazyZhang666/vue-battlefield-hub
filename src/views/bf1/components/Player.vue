<script setup>
defineProps({
    player: Object,
    index: Number
});
</script>

<template>
    <tr>
        <td>
            <!-- 序号、等级、等级图标、战队、玩家昵称 -->
            <div class="player-info">
                <div class="index">{{ index + 1 }}</div>
                <div class="rank">{{ player.rank }}</div>
                <div class="rank-image">
                    <img :src="player.rankImage" alt=""/>
                </div>
                <div class="platoon-name">
                    <div class="platoon" v-if="player.platoon!=''">[{{ player.platoon }}]</div>
                    <div class="name">{{ player.name }}</div>
                </div>
            </div>
        </td>

        <td>
            <!-- KD -->
            <div class="player-kd">{{ player.kd }}</div>
        </td>

        <td>
            <!-- KPM -->
            <div class="player-kpm">{{ player.kpm }}</div>
        </td>

        <td>
            <!-- 爆头率 -->
            <div class="player-heaRatio">{{ player.heaRatio }}%</div>
        </td>

        <td>
            <!-- 命中率 -->
            <div class="player-accRatio"> {{ player.accRatio }}%</div>
        </td>

        <td>
            <!-- 胜率 -->
            <div class="player-winRatio">{{ player.winRatio }}%</div>
        </td>

        <td>
            <!-- 游玩时间 -->
            <div class="player-playTime">{{ player.playTime }}/h</div>
        </td>

        <td>
            <!-- 延迟 -->
            <div class="player-latency">
                <div class="latency-image">
                    <img :src="player.latencyImage" alt=""/>
                </div>
                <div class="latency-number">{{ player.latency }}</div>
            </div>
        </td>
    </tr>
</template>

<style scoped>
tr {
    font-size: 14px;
    font-weight: normal;
    color: rgba(255, 255, 255, 0.9);

    & td {
        > .player-info {
            height: 26px;
            display: flex;
            flex-direction: row;
            justify-content: flex-start;
            align-items: center;

            > .index {
                width: 30px;
                text-align: right;
            }

            > .rank {
                width: 30px;
                line-height: 16px;
                font-size: 11px;
                text-align: center;
                border: 1px solid rgba(255, 255, 255, 0.9);
                margin-left: 15px;
            }

            > .rank-image {
                width: 24px;
                height: 24px;
                margin-left: 10px;

                > img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }
            }

            > .platoon-name {
                display: flex;
                font-size: 16px;
                margin-left: 10px;

                > .platoon {
                    margin-right: 5px;
                    color: deepskyblue;
                }
            }
        }

        > .player-kd {
            text-align: right;
        }

        > .player-kpm {
            text-align: right;
        }

        > .player-heaRatio {
            text-align: right;
        }

        > .player-accRatio {
            text-align: right;
        }

        > .player-winRatio {
            text-align: right;
        }

        > .player-playTime {
            text-align: right;
        }

        > .player-latency {
            display: flex;
            flex-direction: row;
            justify-content: flex-end;
            align-items: center;
            padding-right: 10px;

            > .latency-image {
                flex: 1;
                display: flex;
                flex-direction: row;
                justify-content: flex-end;
                align-items: center;
            }

            > .latency-number {
                width: 30px;
                text-align: right;
            }
        }
    }

    &:hover {
        color: #000000;
        background-color: #ffffff;

        & td {
            > .player-info {
                .rank {
                    border-color: #000000;
                }
            }

            > .player-latency {
                > .latency-image {
                    filter: invert(100%);
                }
            }
        }
    }
}
</style>