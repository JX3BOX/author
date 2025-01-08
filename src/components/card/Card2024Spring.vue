<template>
    <div class="card2024Spring" @click.stop>
        <div class="u-springFestival-card fadeInUpBig p-animation">
            <div class="u-letter u-img m-animation" ref="letter" @click="close">
                <img class="u-img" :src="letter" alt="新年快乐" />
                <img class="u-img" :src="countImg" alt="新年快乐" />
            </div>
            <img class="u-cover u-img" ref="cover" :src="cover" alt="新年快乐" @click="open" />
        </div>
    </div>
</template>
<script>
export default {
    name: "card2024Spring",
    props: ["data"],
    computed: {
        cover() {
            return this.data.cover;
        },
        letter() {
            return this.data.letter;
        },
        countImg() {
            return this.data.countImg;
        },
    },
    data() {
        return {};
    },
    methods: {
        open() {
            const letter = this.$refs.letter;
            const cover = this.$refs.cover;
            cover.classList.add("click");
            letter.classList.add("fadeOutDownBig");
            letter.addEventListener(
                "animationend",
                () => {
                    letter.classList.remove("fadeOutDownBig");
                    letter.classList.add("fadeInDownBig");
                },
                { once: true }
            );
        },
        close() {
            this.$emit("close");
        },
    },
};
</script>
<style lang="less">
@import "~@/assets/css/animation.less";
.m-animation {
    -webkit-animation-duration: 0.5s;
    animation-duration: 0.5s;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
}
.card2024Spring {
    .pf;
    .full;
    .lt(0);
    .u-springFestival-card {
        .pointer;
        .size(392px,720px);
        .ct(o,392px,720px);
        .u-img {
            .pa;
            .full;
            .lt(0);
            transition: all 0.5s;
        }
        &:hover {
            .u-letter {
                top: 5%;
            }
        }
        .u-cover {
            transition: all 1.5s;
            &.click {
                transform: rotate(5deg);
            }
        }
        .u-letter {
            .size(calc(100% - 8px));
            .ml(4px);
        }
        .u-letter.fadeInDownBig {
            .z(1);
            top: 0 !important;
        }
    }
}
@media screen and (min-width: @2k) {
    .card2024Spring {
        .u-springFestival-card {
            .size(600px,1100px);
            .ct(o,600px,1100px);
        }
    }
}
</style>
