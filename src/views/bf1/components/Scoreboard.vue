<script setup>
import {ref, onMounted} from "vue";
import {getServerPlayerList} from "@/api/bf1.js";
import {getPlayerPingData, getRankImageData} from "@/utils/local.js";

import TeamPlayer from "@/views/bf1/components/TeamPlayer.vue";
import Spinner from "@/components/Spinner.vue";

const props = defineProps({
    serverInfo: Object
});

const team1PlayerList = ref([]);
const team2PlayerList = ref([]);

const isLoading = ref(false);

onMounted(() => {
    getPlayerList();
});

async function getPlayerList() {
    isLoading.value = true;
    // 清空旧数组
    team1PlayerList.value.length = 0;
    team2PlayerList.value.length = 0;

    await getServerPlayerList(props.serverInfo.gameId)
        .then((res) => {
            res.data.data.forEach(item => {
                if (item.teamId !== 1 && item.teamId !== 2)
                    return;

                let player = {
                    teamId: item.teamId,
                    rank: item.rank,
                    rankImage: getRankImageData(item.rank),
                    platoon: item.platoonName,
                    name: item.personaName,
                    pid: item.personaId,
                    kd: item.detailed?.kd.toFixed(2),
                    kpm: item.detailed?.kpm.toFixed(2),
                    heaRatio: item.detailed?.headShotsRatio.toFixed(2),
                    accRatio: item.detailed?.accuracyRatio.toFixed(2),
                    winRatio: item.detailed?.winRatio.toFixed(2),
                    playTime: item.detailed?.hoursPlayed,
                    latencyImage: getPlayerPingData(item.latency),
                    latency: (item.latency === -1 || item.latency > 999) ? 999 : item.latency
                };

                if (item.detailed === null) {
                    let value = (0).toFixed(2);

                    player.kd = value;
                    player.kpm = value;
                    player.heaRatio = value;
                    player.accRatio = value;
                    player.winRatio = value;
                    player.playTime = 0;
                }

                if (player.teamId === 1)
                    team1PlayerList.value.push(player);
                else
                    team2PlayerList.value.push(player);

                // 按照等级降序排序
                team1PlayerList.value.sort((a, b) => {
                    if (a.rank === b.rank) {
                        return b.playTime - a.playTime;
                    }
                    return b.rank - a.rank;
                });
                team2PlayerList.value.sort((a, b) => {
                    if (a.rank === b.rank) {
                        return b.playTime - a.playTime;
                    }
                    return b.rank - a.rank;
                });
            });

            isLoading.value = false;
        }).catch(err => {
            console.log(err);
            isLoading.value = false;
        });
}
</script>

<template>
    <div class="scoreboard">
        <div class="top-title">
            {{ serverInfo.name }}
        </div>
        <div class="main-content">
            <div class="team-player">
                <div class="team-1">
                    <TeamPlayer :team-players="team1PlayerList" :faction="serverInfo.team1" :is-show="!isLoading"/>
                </div>
                <div class="team-2">
                    <TeamPlayer :team-players="team2PlayerList" :faction="serverInfo.team2" :is-show="!isLoading"/>
                </div>
            </div>
            <Spinner v-if="isLoading" class="spinner-load"/>
        </div>
    </div>
</template>

<style scoped>
.scoreboard {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: stretch;
    align-items: stretch;
    padding: 20px 40px 30px 40px;
    overflow: auto;

    > .top-title {
        display: flex;
        flex-direction: column;
        align-items: center;
        color: #ffffff;
        font-size: 30px;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
    }

    > .main-content {
        flex: 1;
        margin-top: 10px;
        overflow: auto;
        position: relative;

        > .team-player {
            height: 100%;
            display: flex;
            flex-direction: row;
            overflow: auto;

            > .team-1 {
                flex: 1;
                margin-right: 15px;
            }

            > .team-2 {
                flex: 1;
                margin-left: 15px;
            }
        }

        > .spinner-load {
            position: absolute;
            left: calc(50% - 21px);
            top: calc(50% - 21px);
        }
    }
}
</style>