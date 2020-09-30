<template>
    <div class="app-headers" :class="[theme, { isTransparent }]">
        <img
            v-if="isBack"
            @click="goback"
            v-show="theme === 'light'"
            class="goBack"
            src="@/assets/img/common/previous_page.png" alt=""
        >
        <img
            v-if="isBack"
            @click="goback"
            v-show="theme === 'dark'"
            class="goBack"
            src="@/assets/img/common/baise_go.png" alt=""
        >
        <span class="title">{{title}}</span>
        <span class="rightTitle" @click="$emit('right-click')">{{value}}</span>
        <span class="right"><slot></slot></span>
    </div>
</template>

<script lang='ts'>
/*
    有返回键，有title，有副按钮的头部公共组件
    事件
        back: 点击返回键事件，如果有back事件则执行自定义事件, 如果没有则执行默认route.go(-1)事件

*/

import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';

export default defineComponent({
    name: 'Headers',
    props: {
        theme: {
            type: String,
            default: 'light', // light dark
        },
        isTransparent: {
            type: Boolean,
            default: false,
        },
        isBack: {
            type: Boolean,
            default: true,
        },
        title: {
            type: String,
        },
        value: {
            type: String,
        },
    },
    setup(props, { attrs, emit }) {
        const router = useRouter();

        const goback = () => {
            if (typeof attrs.onBack === 'function') {
                emit('back');
                return;
            }
            router.go(-1);
        };

        return {
            goback,
        };
    },
});

</script>

<style lang="scss">
.app-headers {
    background: #fff;
    height: 88px;
    width: 100%;
    text-align: left;
    line-height: 88px;
    padding-left: 41px;
    padding-right: 21px;
    position: sticky;
    color: #202025;
    top: 0;
    z-index: 1000;
    &.dark{
        background: #333;
        color: #FFFFFF;
    }
    &.isTransparent{
        background: transparent;
    }
    .rightTitle, .right{
        font-size: 28px;
        position: absolute;
        right: 0;
        height: 100%;
        margin-right: 30px;
    }
    .goBack {
        width: 19px;
        height: 33px;
        position: absolute;
        top:25px;
        left:41px
    }
    .title {
        display: inline-block;
        transform: translateX(-50%);
        font-size: 34px;
        font-weight: normal;
        position: absolute;
        left:50%;
    }
    .right {
        float: right;
    }
}
</style>
