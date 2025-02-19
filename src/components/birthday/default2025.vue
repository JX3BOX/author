<template>
    <div class="p-birthday" @mousemove="handleMouseMove" @mouseleave="handleMouseLeave">
        <video class="u-video" :src="`${imgPath}bg.mp4`" type="video/mp4" autoplay loop muted></video>
        <div :class="letterClass" @click="openLetter">
            <!-- 内页背景 -->
            <img :src="`${imgPath}pack_in.png`" class="u-img u-pack-in" />
            <!-- 外信封下部 -->
            <img :src="`${imgPath}pack_out.png`" class="u-img u-pack-out" />
            <!-- 外信封上三角 -->
            <img :src="`${imgPath}pack_topout.png`" class="u-img u-pack-top-out" />
            <img :src="`${imgPath}pack_topin.png`" class="u-img u-pack-top-in" />
            <!-- 信封内容 -->
            <div class="m-content" :style="transformStyle">
                <img :src="`${imgPath}${star}/girl.png`" class="u-img u-girl" />
                <div class="m-paper">
                    <img :src="`${imgPath}paper.png`" class="u-bg" />
                    <span class="u-text name">{{ name }}</span>
                    <span class="u-text date">{{ date }}</span>
                </div>
                <img :src="`${imgPath}${star}/icon.png`" class="u-img u-icon" />
                <img :src="`${imgPath}girlQ.png`" class="u-img u-cake" />
                <img :src="`${imgPath}ground.png`" class="u-img u-ground" />
            </div>
            <img :src="`${imgPath}${star}/txt.png`" class="u-img u-txt" />
            <img :src="`${imgPath}${star}/img.png`" class="u-img u-star" />
            <!-- 漆封 -->
            <div :class="`u-paint ${clickCount == 1 ? 'animation' : ''}`">
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
            star: "SY",
            // 状态
            start: false,
            open: false,
            diffuse: false,
            clickCount: 0,
            // 鼠标位置
            mouseX: 0,
            mouseY: 0,
            isMouseOver: false,
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
        letterClass() {
            return {
                "m-letter": true,
                open: this.open,
                diffuse: this.diffuse,
            };
        },
        transformStyle() {
            if (this.isMouseOver)
                return {
                    transform: `perspective(2000px) translate3d(${this.mouseX}px,${this.mouseY}px, 0px) rotateY(${this.mouseX}deg) rotateX(${this.mouseY}deg)`,
                };
            return {
                transform: `perspective(2000px) translate(${this.mouseX}px,${this.mouseY}px, 0px) rotateY(${this.mouseY}deg) rotateX(${this.mouseX}deg)`,
            };
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
            this.clickCount++;
            if (this.clickCount == 1) {
                setTimeout(() => {
                    this.open = true;
                }, 500);
            }
            if (this.clickCount == 2) {
                this.diffuse = true;
            }
        },
        handleMouseMove(event) {
            if (this.clickCount < 2) return;
            this.mouseX = event.clientX / 100;
            this.mouseY = event.clientY / 100;
            this.isMouseOver = true;
        },
        handleMouseLeave() {
            if (this.clickCount < 2) return;
            this.isMouseOver = false;
        },
    },
};
</script>
<style lang="less" scope>
@import "~@/assets/css/birthday2025.less";
</style>
