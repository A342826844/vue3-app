    <template>
    <div class="layout">
        <div class="layout-route">
            <keep-alive>
                <router-view v-if="$route.meta.keepAlive"></router-view>
            </keep-alive>
            <router-view v-if="!$route.meta.keepAlive"></router-view>
        </div>
        <footer v-show="route.meta.hasFooter" ref="footer" :style="{top: top}" class="layout-nav-footer border-t">
            <div class="circle"></div>
            <div class="ui-flex nav-boxs">
                <div
                    :class="{critop: index===2}"
                    @click="linkTo(item, index)"
                    :title="item.title"
                    class="flex__item nav-box"
                    v-for="(item, index) in tabList"
                    :key="item.name"
                >
                    <img
                        class="tar-icon"
                        :src="item.name !== route.meta.name ? item.defaultIcon : item.activeIcon "
                        :alt="item.title"
                    >
                    <p class="nav-label" :style="{color: item.name !== route.meta.name ? '' : '#333333'}">{{item.title}}</p>
                </div>
            </div>
        </footer>
    </div>
</template>

<script lang="ts">
import {
    defineComponent, ref, computed, reactive, onMounted, Ref,
} from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useStore } from 'vuex';

/* eslint-disable @typescript-eslint/no-var-requires */
const homeN = require('@/assets/img/layout/home_n.png');
const homeS = require('@/assets/img/layout/home_s.gif');
const contractN = require('@/assets/img/layout/contract_n.png');
const contractS = require('@/assets/img/layout/contract_s.gif');
const spotN = require('@/assets/img/layout/spot_n.png');
const spotS = require('@/assets/img/layout/spot_s.gif');
const optionN = require('@/assets/img/layout/option_n.png');
const optionS = require('@/assets/img/layout/option_s.gif');
const assetsN = require('@/assets/img/layout/assets_n.png');
const assetsS = require('@/assets/img/layout/assets_s.gif');

interface LinkItem {
    path: string;
    name: string;
    title: string;
    defaultIcon: unknown;
    activeIcon: unknown;
}

export default defineComponent({
    name: 'Home',
    setup() {
        const test = ref(1);

        const store = useStore();

        const top = ref();

        const route = useRoute();

        const footer: Ref = ref(null);

        const router = useRouter();

        const tabList = reactive([
            {
                path: '/home',
                name: 'home',
                title: '首页',
                defaultIcon: homeN,
                activeIcon: homeS,
            }, {
                path: '/future',
                name: 'future',
                title: '永续',
                defaultIcon: contractN,
                activeIcon: contractS,
            }, {
                path: '/spot',
                name: 'spot',
                title: '期货',
                defaultIcon: spotN,
                activeIcon: spotS,
            }, {
                path: '/option',
                name: 'option',
                title: '期权',
                defaultIcon: optionN,
                activeIcon: optionS,
            }, {
                path: '/login',
                name: 'login',
                title: '资产',
                defaultIcon: assetsN,
                activeIcon: assetsS,
            },
        ]);

        onMounted(() => {
            // nextTick(() => {
            //     console.log(toRaw(route.meta), '==');
            // });
            // console.log('onMounted');
            // // const { clientWidth } = document.documentElement;
            // console.log(top.value, footer.value.offsetHeight, footer.value.clientHeight, footer.value.scrollHeight);
            let timer = 0;
            const clientWidthNow = document.documentElement.clientHeight;
            const resizeHandle = () => {
                const { clientHeight } = document.documentElement;
                const footerHeight = footer.value && footer.value.clientHeight;
                // const clientHeightNow = document.documentElement;
                console.log(clientWidthNow - clientHeight, clientHeight * 0.25);
                if (footer.value && (clientWidthNow - clientHeight <= clientHeight * 0.25)) {
                    top.value = `${clientHeight - footerHeight}px`;
                    console.log(top.value);
                }
            };
            // XXX: 这里的route.meta.hasFooter 值还是undefined 所以用异步的方式去对footer定位
            setTimeout(() => {
                resizeHandle();
            }, 0);
            // XXX: 解决有些移动设备软键盘弹出后footer跑到软件盘上方
            window.addEventListener('resize', () => {
                clearTimeout(timer);
                timer = setTimeout(() => {
                    resizeHandle();
                }, 350);
            });
        });

        const activeName = computed(() => useRoute());

        const linkTo = (item: LinkItem, index: number) => {
            store.commit('changeLoading', true);
            setTimeout(() => {
                store.commit('changeLoading', false);
            }, 2000);
            console.log(tabList, tabList[index].activeIcon);
            tabList[index].activeIcon = item.activeIcon;
            router.push(item.path);
        };
        return {
            test,
            linkTo,
            route,
            activeName,
            tabList,
            top,
            footer,
        };
    },
});
</script>

<style lang="scss" scoped>

.layout {
    overflow: hidden;
    height: 100%;
    &-route{
        height: 100%;
    }
    .layout-nav-footer {
        position: fixed;
        box-shadow: 0px -2px 10px 0px rgba(203, 203, 203, 0.75);
        z-index: 100;
        width: 100%;
        height: 100px;
        background-color: #fff;
        top: calc(100% - 100px);
        .circle{
            position: relative;
            &::before{
                content: '';
                position: absolute;
                top: -30px;
                left: 0;
                right: 0;
                margin: auto;
                height: 120px;
                width: 120px;
                border-top: 1PX solid #cecece;
                border-radius: 50%;
                background: #fff;
                box-shadow: 0px -2px 10px 0px rgba(203, 203, 203, 0.75);
            }
        }
        .nav-boxs {
            align-items: center;
            height: inherit;
            position: relative;
            background: #fff;
            .nav-box {
                display: inline-block;
                min-width: 150px;
                position: relative;
                text-align: center;
            }
            .nav-label {
                font-size: 24px;
                color: #C3C3CD;
            }
            .tar-icon{
                height: auto;
                width: 46px;
                display: inline-block;
                position: relative;
                margin: 0 auto 10px;
                text-align: center;
                top: 8px;
            }
            .router-link-exact-active,
            .router-link-active {
                .nav-label {
                    color: #3e80ca;
                }
            }
        }
        .critop{
            .tar-icon{
                height:75px;
                width: auto;
                top: 0;
            }
            .nav-label {
                position: relative;
                top: -15px;
            }
        }
    }
}
</style>
