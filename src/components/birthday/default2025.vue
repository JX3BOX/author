<template>
    <div class="p-birthday">
        <video class="u-video" :src="`${imgPath}bg.mp4`" type="video/mp4" autoplay loop muted></video>
        <div :class="`m-letter ${open ? 'open' : ''}`" @click="openLetter">
            <!-- 内页背景 -->
            <img :src="`${imgPath}pack_in.png`" class="u-img u-pack-in" />
            <!-- 外信封下部 -->
            <img :src="`${imgPath}pack_out.png`" class="u-img u-pack-out" />
            <!-- 外信封上三角 -->
            <img :src="`${imgPath}pack_topout.png`" class="u-img u-pack-top-out" />
            <img :src="`${imgPath}pack_topin.png`" class="u-img u-pack-top-in" />
            <!-- 信封内容 -->
            <img :src="`${imgPath}${star}/girl.png`" class="u-img u-girl" />
            <div class="m-paper">
                <img :src="`${imgPath}paper.png`" class="u-bg" />
                <span class="u-text name">{{ name }}</span>
                <span class="u-text date">{{ date }}</span>
            </div>
            <img :src="`${imgPath}${star}/icon.png`" class="u-img u-icon" />
            <img :src="`${imgPath}${star}/img.png`" class="u-img u-star" />
            <img :src="`${imgPath}${star}/txt.png`" class="u-img u-txt" />
            <!-- 漆封 -->
            <div :class="`u-paint ${start ? 'animation' : ''}`">
                <img :src="`${imgPath}paint.png`" class="u-pack-paint" />
                <img :src="`${imgPath}ok.png`" class="u-pack-ok" />
            </div>
        </div>
    </div>
</template>

<script>
import { getBirthdayDetail } from "@/service/birthday";
import User from "@jx3box/jx3box-common/js/user";
import dayjs from "dayjs";
import { __cdn } from "@jx3box/jx3box-common/data/jx3box.json";
export default {
    name: "Default2025",
    data: function () {
        return {
            data: "",
            imgPath: __cdn + "design/card/birthday/default2025/",
            start: false,
            open: false,
            diffuse: false,
            star: "SY",
        };
    },
    computed: {
        user() {
            return User.getInfo();
        },
        id: function () {
            return this.$route.query.id;
        },
        uid: function () {
            return this.$route.params.uid;
        },
        isMine: function () {
            return this.uid == this.user.uid;
        },
        name: function () {
            return this.user.name;
        },
        date() {
            return this.dateFormat(this.data.created_at);
        },
    },
    watch: {
        start: function (val) {
            if (val) {
                setTimeout(() => {
                    this.open = true;
                }, 1000);
            }
        },
    },
    mounted() {
        this.loadData();
    },
    methods: {
        dateFormat: function (val) {
            return dayjs(val).format("YYYY年MM月DD日");
        },
        loadData() {
            if (!this.isMine) return;
            getBirthdayDetail(this.id).then((res) => {
                this.data = res.data.data;
            });
        },
        openLetter() {
            this.start = true;
            if (this.start) {
                this.diffuse = true;
            }
        },
    },
};
</script>
<style lang="less" scope>
@import "~@/assets/css/birthday2025.less";
</style>
