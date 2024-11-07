<script setup></script>

<template>
    <div class="bf1-view container">
        <div class="store-box">
            <div class="store-option">
                <div class="option-common">英雄同捆包</div>
                <div class="option-common">战斗包</div>
                <div class="option-common">捷径装备</div>
                <div class="option-common">资料片</div>
                <div class="option-common">高级</div>
                <div class="option-common">租用伺服器</div>
                <div class="option-common">EA PLAY</div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.container {
    > .store-box {
        display: flex;
        flex-direction: row;
        margin-top: 10px;

        > .store-option {
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: flex-start;
            margin-top: 30px;
            overflow: hidden auto;
            height: 500px;

            > .option-common {
                height: 50px;
                width: 300px;
                border-top: 1px solid rgba(255, 255, 255, 0.2);
                line-height: 50px;
                padding-left: 15px;
                font-size: 14px;

                &:hover {
                    color: #000000;
                    background-color: #ffffff;
                }

                &:last-child {
                    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
                }
            }
        }
    }
}
</style>