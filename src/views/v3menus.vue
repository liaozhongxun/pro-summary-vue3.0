<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="menu-page page">
        <ul class="list">
            <li class="item" v-for="(item, index) in menuList" :key="index" @click="$toPath(item.path)">
                <i class="iconfont" :class="item.icon" ></i><span>{{item.name}}</span>
            </li>
        </ul>
    </div>
</template>

<script setup>
import useMenus from "@/pinia/v3menus";
import { storeToRefs } from "pinia";

const menusStore = useMenus();
const { menuList, title } = storeToRefs(menusStore);
console.log(menuList, title);
</script>

<style lang="scss" scoped>
@import "@/common/style/mixin.scss";

.list {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 1px 1px;
    .item {
        height: 70px;
        // padding-top: 10px;
        background-color: #fff;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        color:#777;
        .iconfont {
            font-size: 25px;
            margin-bottom: 5px;
        }
        &:active {
            background-color: rgb(250, 249, 249);
        }
        &:last-child{
            grid-column-start:span 2;
            grid-column-end:4;
        }
    }
}
</style>
