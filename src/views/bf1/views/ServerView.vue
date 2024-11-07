<script setup>
import {ref, reactive, onMounted} from "vue";
import {getServerMode, getServerMap, getServerSlot, getServerRegion, getServerType} from "@/utils/bf1.js";
import {getServerList} from "@/api/bf1.js";
import {isOfficialServer, getServerImageData, getCountryImageData} from "@/utils/local.js";

import Modal from "@/components/Modal.vue";
import Spinner from "@/components/Spinner.vue";
import Server from "@/views/bf1/components/Server.vue";
import Scoreboard from "@/views/bf1/components/Scoreboard.vue";

const serverList = ref([]);
const selectServer = ref({});

const isLoading = ref(false);
const isShowModal = ref(false);

const serverArgs = reactive({
    name: "",
    modes: getServerMode(),
    maps: getServerMap(),
    slots: getServerSlot(),
    regions: getServerRegion(),
    types: getServerType(),
    limit: 100
});

onMounted(() => {
    searchServer();
});

// 重设筛选条件
function resetFilter() {
    for (let key in serverArgs) {
        // 先判断成员是否为数组
        if (Array.isArray(serverArgs[key])) {
            serverArgs[key].forEach(item => item.isChecked = false);
        }
    }
}

// 获取选中值字符串
function getCheckedValues(data) {
    const result = data
        .filter(item => item.isChecked)
        .map(item => item.value);
    return result.join(",");
}

// 开始筛选服务器
async function searchServer() {
    isLoading.value = true;
    // 清空旧数组
    serverList.value.length = 0;

    await getServerList({
        name: serverArgs.name,
        modes: getCheckedValues(serverArgs.modes),
        maps: getCheckedValues(serverArgs.maps),
        slots: getCheckedValues(serverArgs.slots),
        regions: getCheckedValues(serverArgs.regions),
        types: getCheckedValues(serverArgs.types),
        limit: serverArgs.limit
    }).then(res => {
        res.data.data.forEach(item => {
            let imageData = getServerImageData(item.map.code);
            let countryData = getCountryImageData(item.country);

            let server = {
                gameId: item.gameId,
                guid: item.guid,
                name: item.name,
                description: item.description,
                soldier: item.slots.soldier.current,
                maxSoldier: item.slots.soldier.max,
                queue: item.slots.queue.current,
                spectator: item.slots.spectator.current,
                mapMode: item.mode.name,
                mapMode2: item.mode.code,
                mapName: item.map.name,
                mapName2: item.map.code,
                mapImage: imageData.mapImage,
                mapImage2: imageData.mapImage2,
                team1: imageData.team1,
                team2: imageData.team2,
                isCustom: item.isCustom,
                isOfficial: isOfficialServer(item.type),
                tickRate: 60,
                regionImage: countryData.image,
                ping: countryData.ping,
                pingImage: countryData.pingImage
            };
            serverList.value.push(server);

            // 按照人数降序排序
            serverList.value.sort((a, b) => {
                if (a.soldier === b.soldier) {
                    return b.queue - a.queue;
                }
                return b.soldier - a.soldier;
            });
        });

        isLoading.value = false;
    }).catch(err => {
        console.log(err);
        isLoading.value = false;
    });
}

// 获取当前选中的服务器
function getSelectedItem(server) {
    selectServer.value = server;
    isShowModal.value = true;
}
</script>

<template>
    <div class="bf1-view container">
        <div class="main-panel">
            <div class="table-header">
                <table>
                    <colgroup>
                        <col class="table-column-1"/>
                        <col class="table-column-2"/>
                        <col class="table-column-3"/>
                        <col class="table-column-4"/>
                        <col class="table-column-5"/>
                        <col class="table-column-6"/>
                        <col class="table-column-7"/>
                    </colgroup>
                    <thead>
                    <tr>
                        <th class="table-column-1">名称</th>
                        <th class="table-column-2"></th>
                        <th class="table-column-3"></th>
                        <th class="table-column-4">玩家</th>
                        <th class="table-column-5">PING</th>
                        <th class="table-column-6"></th>
                        <th class="table-column-7"></th>
                    </tr>
                    </thead>
                </table>
            </div>
            <div class="table-body">
                <table>
                    <colgroup>
                        <col class="table-column-1"/>
                        <col class="table-column-2"/>
                        <col class="table-column-3"/>
                        <col class="table-column-4"/>
                        <col class="table-column-5"/>
                        <col class="table-column-6"/>
                        <col class="table-column-7"/>
                    </colgroup>
                    <tbody>
                    <Server v-for="(server, index) in serverList" :server="server" :index="index" :key="index"
                            @onServerPlay="getSelectedItem(server)"/>
                    </tbody>
                </table>
                <Spinner v-if="isLoading" class="spinner-load"/>
                <Teleport to="body">
                    <Modal :is-show="isShowModal" @close="isShowModal=false">
                        <template #content>
                            <Scoreboard :server-info="selectServer"/>
                        </template>
                    </Modal>
                </Teleport>
            </div>
        </div>

        <div class="right-panel">
            <div>快速篩選</div>

            <div class="query-panel">
                <details name="mode">
                    <summary>遊戲模式</summary>
                </details>
                <div class="query-option">
                    <div class="option" v-for="item in serverArgs.modes">
                        <input type="checkbox" :id="item.id" :value="item.value" v-model="item.isChecked"/>
                        <label :for="item.id">{{ item.title }}</label>
                    </div>
                </div>

                <details name="mode">
                    <summary>地圖</summary>
                </details>
                <div class="query-option">
                    <div class="option" v-for="item in serverArgs.maps">
                        <input type="checkbox" :id="item.id" :value="item.value" v-model="item.isChecked"/>
                        <label :for="item.id">{{ item.title }}</label>
                    </div>
                </div>

                <details name="mode">
                    <summary>空位</summary>
                </details>
                <div class="query-option">
                    <div class="option" v-for="item in serverArgs.slots">
                        <input type="checkbox" :id="item.id" :value="item.value" v-model="item.isChecked"/>
                        <label :for="item.id">{{ item.title }}</label>
                    </div>
                </div>

                <details name="mode">
                    <summary>區域</summary>
                </details>
                <div class="query-option">
                    <div class="option" v-for="item in serverArgs.regions">
                        <input type="checkbox" :id="item.id" :value="item.value" v-model="item.isChecked"/>
                        <label :for="item.id">{{ item.title }}</label>
                    </div>
                </div>

                <details name="mode">
                    <summary>類型</summary>
                </details>
                <div class="query-option">
                    <div class="option" v-for="item in serverArgs.types">
                        <input type="checkbox" :id="item.id" :value="item.value" v-model="item.isChecked"/>
                        <label :for="item.id">{{ item.title }}</label>
                    </div>
                </div>
            </div>

            <hr class="cut-line"/>
            <input type="text" placeholder="以名稱篩選..." v-model="serverArgs.name"/>
            <hr/>
            <button @click="searchServer">開始篩選</button>
            <button @click="resetFilter">重設篩選條件</button>

            <div class="query-result">筛选结果 ({{ serverList.length }})</div>
        </div>
    </div>
</template>

<style scoped>
.container {
    display: flex;
    flex-direction: row;

    > .main-panel {
        flex: 1;
        margin-right: 20px;
        margin-bottom: 10px;
        display: flex;
        flex-direction: column;

        .table-column-1 {
            width: 45px;
        }

        .table-column-2 {
            width: 100px;
        }

        .table-column-3 {
            width: auto;
        }

        .table-column-4 {
            width: 140px;
        }

        .table-column-5 {
            width: 70px;
        }

        .table-column-6 {
            width: 60px;
        }

        .table-column-7 {
            width: 80px;
        }

        > .table-header {
            margin-bottom: 5px;
        }

        > .table-body {
            flex: 1;
            width: 100%;
            overflow: hidden;
            overflow-y: auto;
            position: relative;

            > .spinner-load {
                position: absolute;
                left: calc(50% - 21px);
                top: calc(50% - 21px);
            }
        }
    }

    > .right-panel {
        width: 200px;
        margin: 20px 10px 20px 30px;
        display: flex;
        flex-direction: column;

        > .query-panel {
            display: flex;
            flex-direction: column;
            margin-top: 10px;

            > details {
                border-top: 1px solid var(--bf1-border-color);
                position: relative;
                background-color: transparent;

                ::marker {
                    font-size: 0;
                }

                &::after {
                    content: "";
                    position: absolute;
                    top: 20px;
                    right: 10px;
                    width: 5px;
                    height: 5px;
                    border-right: 1px solid #ffffff;
                    border-top: 1px solid #ffffff;
                    transform: rotate(-45deg);
                    transition: all 0.2s ease-in-out;
                    opacity: 0.8;
                }

                > summary {
                    user-select: none;
                    outline: 0;
                    padding: 10px 0;
                    font-size: 14px;
                    text-align: center;
                    color: #ffffff;
                    opacity: 0.8;

                    &:hover {
                        opacity: 1;
                    }
                }

                &[open] {
                    &::after {
                        transform: rotate(135deg);
                    }

                    + .query-option {
                        margin-bottom: 10px;
                        max-height: 300px;
                    }
                }
            }

            > .query-option {
                max-height: 0;
                transition: all 0.2s ease-in-out;
                overflow: hidden auto;
                margin: 0 10px;

                > .option {
                    display: flex;
                    flex-direction: row;
                    justify-content: flex-start;
                    align-items: center;
                    margin-bottom: 5px;

                    > label {
                        flex: 1;
                        font-size: 14px;
                    }
                }
            }
        }

        > .cut-line {
            margin-top: 0;
        }

        > .query-result {
            font-size: 12px;
            text-align: center;
            margin-top: 5px;
            opacity: 0.8;
        }
    }
}
</style>