<template>
    <AppLayout>
        <div class="m-main m-index-popup">
            <component :is="event_component" :data="component_data" @close="goBack" />
        </div>
    </AppLayout>
</template>

<script>
import { __imgPath } from "@jx3box/jx3box-common/data/jx3box.json";
import cardType from "@/assets/data/card.json";
import { getHolidayCard } from "@/service/card";
import AppLayout from "@/layouts/AppLayout.vue";
import DefaultTemplate from "@/components/card/DefaultTemplate.vue";
import CardChildren from "@/components/card/CardChildren.vue";
import CardSpring from "@/components/card/CardSpring.vue";
import CardNewYear from "@/components/card/CardNewYear.vue";
import CardChristmas from "@/components/card/CardChristmas.vue";
import CardQixi from "@/components/card/CardQixi.vue";
import CardDragonBoat from "@/components/card/CardDragonBoat.vue";
import CardLantern from "@/components/card/CardLantern.vue";
import CardAutumn from "@/components/card/CardAutumn.vue";
import DoubleScreen from "@/components/card/DoubleScreen.vue";
import OneScreen from "@/components/card/OneScreen.vue";

export default {
    name: "holidayCard",
    components: {
        AppLayout,
        DefaultTemplate,
        CardChildren,
        CardSpring,
        CardNewYear,
        CardChristmas,
        CardQixi,
        CardDragonBoat,
        CardLantern,
        CardAutumn,
        DoubleScreen,
        OneScreen,
    },
    data: function () {
        return {
            cardType,
            list: [],
        };
    },
    computed: {
        // 用户id
        user_id() {
            return this.$route.params.uid;
        },
        // 打开的卡号id
        my_card_id() {
            return this.$route.params.id;
        },
        // 当前活动的信息
        active_event() {
            return this.list.length && this.list.find((item) => item.id == this.my_card_id);
        },
        // 当前卡号对应的活动id
        event_id() {
            return this.active_event?.event_id;
        },
        // 活动id对应的活动key
        event_key() {
            return this.cardType[this.event_id]?.key;
        },
        // 活动对应的图片地址
        imgLink() {
            return __imgPath + `topic/festival/${this.event_key}/`;
        },
        // 活动对应的图片列表
        imgList() {
            return this.cardType[this.event_id]?.imgList || [];
        },
        // 活动抽中的数量
        fontCount() {
            return this.active_event?.event_reward_count;
        },
        // 当前组件
        event_component() {
            return this.cardType[this.event_id]?.component;
        },
        // 组件数据
        component_data() {
            const _data = {
                default: this.default_data,
                children: this.children_data,
                spring: this.spring_data,
                newyear: this.newyear_data,
                christmas: this.christmas_data,
                qixi: this.qixi_data,
                dragon: this.dragon_data,
                lantern: this.newyear_data,
                autumn: this.newyear_data,
                double: this.double_data,
                one: this.one_data,
            };
            return _data[this.cardType[this.event_id]?.type];
        },
        // 默认数据
        default_data() {
            const bg = this.cardType[this.event_id]?.bg;
            const count = this.cardType[this.event_id]?.count;
            const countImgList = String(this.fontCount)
                .split("")
                .map((item) => `${this.imgLink}${item}.png`);
            const data = {
                imgList: this.imgList.map((item) => `${this.imgLink}${item}`),
                fontCount: this.fontCount,
                countImg: `${this.imgLink}${this.fontCount}.png`,
                countImgList,
                count,
            };
            if (bg) data.countBg = `${this.imgLink}${bg}`;
            return data;
        },
        // 儿童节
        children_data() {
            return {
                bgImg: `${this.imgLink}bg.png`,
                buttonImg: `${this.imgLink}button.png`,
                bg2Img: `${this.imgLink}bg2.png`,
                countImg: `${this.imgLink}${this.fontCount}.png`,
            };
        },
        // 春节
        spring_data() {
            const hasYear = this.cardType[this.event_id]?.year;
            const _default = {
                letter: `${this.imgLink}letter.png`,
                cover: `${this.imgLink}cover.png`,
                countImg: `${this.imgLink}${this.fontCount}.png`,
            };
            const _year = {
                year: true,
                bg: `${this.imgLink}BG.jpg`,
                cover: `${this.imgLink}cover.png`,
                button: `${this.imgLink}button.png`,
                countImg: `${this.imgLink}${this.fontCount}.png`,
            };
            return hasYear ? _year : _default;
        },
        // 元旦
        newyear_data() {
            return {
                fontCount: this.fontCount,
                imgList: this.imgList.map((item) => `${this.imgLink}${item}`),
            };
        },
        // 圣诞
        christmas_data() {
            return {
                countImg: `${this.imgLink}${this.fontCount}.png`,
                imgList: this.imgList.map((item) => `${this.imgLink}${item}`),
            };
        },
        // 七夕
        qixi_data() {
            return {
                fontCount: this.fontCount,
                countImg: `${this.imgLink}${this.fontCount}.png`,
                imgList: this.imgList.map((item) => `${this.imgLink}${item}`),
            };
        },
        // 端午
        dragon_data() {
            return {
                countImg: `${this.imgLink}${this.fontCount}.svg`,
                imgList: this.imgList.map((item) => `${this.imgLink}${item}`),
            };
        },
        double_data() {
            return {
                fontCount: this.fontCount,
                countImg: `${this.imgLink}${this.fontCount}.png`,
                imgList: this.imgList.map((item) => `${this.imgLink}${item}`),
                vImg: `${this.imgLink}/v${this.fontCount}.png`,
                bgImg: `${this.imgLink}bg.png`,
            };
        },
        one_data() {
            const key = this.event_key;
            const text = this.cardType[this.event_id]?.text;
            const data = {
                fontCount: this.fontCount,
                imgLink: __imgPath + `topic/festival/${key}.png`,
            };
            if (text) data.text = text;
            return data;
        },
    },
    watch: {
        my_card_id: {
            handler: function (id) {
                id ? this.load() : this.goBack();
            },
            immediate: true,
        },
    },
    methods: {
        goBack() {
            this.$router.push({ name: "index", params: { id: this.user_id } });
        },
        load() {
            getHolidayCard().then((res) => {
                this.list = res.data?.data?.list || [];
                const ids = (this.list.length && this.list.map((item) => item.id)) || [];
                if (!ids.includes(~~this.my_card_id)) this.goBack();
            });
        },
    },
};
</script>

<style lang="less">
.m-main {
    height: 100vh;
    background-color: #24292e;
}
@import "~@/assets/css/pop.less";
</style>
