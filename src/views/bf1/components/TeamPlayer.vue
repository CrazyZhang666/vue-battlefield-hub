<script setup>
import Player from "@/views/bf1/components/Player.vue";

defineProps({
    teamPlayers: Array,
    faction: Object,
    isShow: Boolean
});
</script>

<template>
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
                    <col class="table-column-8"/>
                </colgroup>
                <thead>
                <tr>
                    <th class="table-th table-column-1">
                        <div class="table-th-faction">
                            <img class="faction-image" :src="faction.image" alt="">
                            <div class="faction-name">{{ faction.name }}</div>
                        </div>
                    </th>
                    <th class="table-th table-column-2">KD</th>
                    <th class="table-th table-column-3">KPM</th>
                    <th class="table-th table-column-4">爆头率</th>
                    <th class="table-th table-column-5">命中率</th>
                    <th class="table-th table-column-6">胜率</th>
                    <th class="table-th table-column-7">时长</th>
                    <th class="table-th table-column-8">延迟</th>
                </tr>
                </thead>
            </table>
        </div>
        <div v-if="isShow" class="table-body">
            <table>
                <colgroup>
                    <col class="table-column-1"/>
                    <col class="table-column-2"/>
                    <col class="table-column-3"/>
                    <col class="table-column-4"/>
                    <col class="table-column-5"/>
                    <col class="table-column-6"/>
                    <col class="table-column-7"/>
                    <col class="table-column-8"/>
                </colgroup>
                <tbody>
                <Player v-for="(player,index) in teamPlayers" :player="player" :index="index" :key="index"/>
                </tbody>
            </table>
        </div>
    </div>
</template>

<style scoped>
.main-panel {
    height: 100%;
    display: flex;
    flex-direction: column;

    thead {
        vertical-align: bottom;

        tr {
            border-bottom: 2px solid rgba(255, 255, 255, 0.3);
        }
    }

    .table-th {
        font-size: 20px;
        font-weight: normal;
        padding-bottom: 3px;

        > .table-th-faction {
            display: flex;
            flex-direction: row;
            justify-content: flex-start;
            align-items: flex-end;

            > .faction-image {
                height: 40px;
                width: 40px;
                object-fit: cover;
                margin-right: 15px;
            }

            > .faction-name {
                font-size: 26px;
            }
        }
    }

    .table-column-1 {
        width: auto;
    }

    .table-column-2 {
        width: 50px;
        text-align: right;
    }

    .table-column-3 {
        width: 50px;
        text-align: right;
    }

    .table-column-4 {
        width: 80px;
        text-align: right;
    }

    .table-column-5 {
        width: 70px;
        text-align: right;
    }

    .table-column-6 {
        width: 70px;
        text-align: right;
    }

    .table-column-7 {
        width: 80px;
        text-align: right;
    }

    .table-column-8 {
        width: 75px;
        text-align: right;
        padding-right: 10px;
    }

    > .table-header {
        margin-bottom: 10px;
    }

    > .table-body {
        flex: 1;
        width: 100%;
        overflow: hidden;
        overflow-y: auto;
        border-left: 2px solid rgba(255, 255, 255, 0.3);
    }
}
</style>