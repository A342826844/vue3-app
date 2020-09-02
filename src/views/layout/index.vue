    <template>
    <div class="layout">
        <div class="layout-route">
            <keep-alive>
                <router-view v-if="$route.meta.keepAlive"></router-view>
            </keep-alive>
            <router-view v-if="!$route.meta.keepAlive"></router-view>
        </div>
        <div>{{route.meta.name}}</div>
        <footer ref="footer" :style="{top: top}" class="layout-nav-footer border-t">
            <div class="circle"></div>
            <div class="ui-flex nav-boxs">
                <div
                    :class="{critop: key===2}"
                    @click="linkTo(item)"
                    :title="item.title"
                    class="flex__item nav-box"
                    v-for="(item,key) in tabList"
                    :key="key"
                >
                    <img class="tar-icon" :src="item.defaultIcon" :alt="item.title" v-if="item.name !== route.meta.name">
                    <img class="tar-icon" :src="item.activeIcon" :alt="item.title" v-if="item.name === route.meta.name">
                    <p class="nav-label" :style="{color: item.name !== route.meta.name ? '' : '#333333'}">{{item.title}}</p>
                </div>
            </div>
        </footer>
    </div>
</template>

<script lang="ts">
import {
    defineComponent, ref, computed, reactive,
} from 'vue';
import { useRoute, useRouter } from 'vue-router';

import homeN from '@/assets/img/layout/home_n.png';
import homeS from '@/assets/img/layout/home_s.gif';
import contractN from '@/assets/img/layout/contract_n.png';
import contractS from '@/assets/img/layout/contract_s.gif';
import spotN from '@/assets/img/layout/spot_n.png';
import spotS from '@/assets/img/layout/spot_s.gif';
import optionN from '@/assets/img/layout/option_n.png';
import optionS from '@/assets/img/layout/option_s.gif';
import assetsN from '@/assets/img/layout/assets_n.png';
import assetsS from '@/assets/img/layout/assets_s.gif';

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

        const route = useRoute();

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
                path: '/assets',
                name: 'assets',
                title: '资产',
                defaultIcon: assetsN,
                activeIcon: assetsS,
            },
        ]);

        const activeName = computed(() => useRoute());

        const linkTo = (item: LinkItem) => {
            console.log(item);
            router.push(item.path);
        };
        return {
            test,
            linkTo,
            route,
            activeName,
            tabList,
        };
    },
});
</script>

<style lang="scss" scoped>

.layout {
    overflow: hidden;
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
