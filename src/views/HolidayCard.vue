<template>
    <AppLayout>
        <div class="m-main m-index-popup">
            <component :is="event_component" :data="component_data" @checked="checked" @close="goBack" />
        </div>
    </AppLayout>
</template>

<script>
import { __imgPath } from "@jx3box/jx3box-common/data/jx3box.json";
import cardType from "@/assets/data/card.json";
import { getHolidayCard } from "@/service/card";
import AppLayout from "@/layouts/AppLayout.vue";
import DefaultTemplate from "@/components/card/DefaultTemplate.vue";
import Card2024Children from "@/components/card/Card2024Children.vue";
import Card2024Spring from "@/components/card/Card2024Spring.vue";
import Card2024NewYear from "@/components/card/Card2024NewYear.vue";
import Card2023Christmas from "@/components/card/Card2023Christmas.vue";
export default {
    name: "holidayCard",
    components: { AppLayout, DefaultTemplate, Card2024Children, Card2024Spring, Card2024NewYear, Card2023Christmas },
    data: function () {
        return {
            cardType,
            check: false,
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
            return this.list.find((item) => item.id == this.my_card_id);
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
            return {
                letter: `${this.imgLink}letter.png`,
                cover: `${this.imgLink}cover.png`,
                countImg: `${this.imgLink}${this.fontCount}.png`,
            };
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
                this.list = res?.data || [];
                // const ids = this.list.map((item) => item.id);
                // if (!ids.includes(this.my_card_id)) this.goBack();
            });
        },
        checked() {
            this.check = true;
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
