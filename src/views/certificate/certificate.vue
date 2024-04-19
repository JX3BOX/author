<template>
    <AppLayout>
        <div class="m-main">
            <div class="u-title m-hide">第一届证书</div>
            <div class="u-time m-hide">获得时间：2019-10-10</div>
            <el-image class="u-img" :fit="'contain'" :src="collectionImg" :preview-src-list="[collectionImg]">
            </el-image>
            <button @click="print" class="u-btn m-hide el-button el-button--primary">打印证书</button>

            <canvas id="canvas" ref="canvas"></canvas>
        </div>
    </AppLayout>
</template>

<script>
import { __imgPath } from "@jx3box/jx3box-common/data/jx3box.json";
import AppLayout from "@/layouts/AppLayout.vue";
import CI from "./collection.json";
export default {
    name: "Author",
    components: { AppLayout },
    props: [],
    data: function () {
        return {
            drawConfig: {},
            drawCtx: {},
            collectionImg: "",
            exportImgTime: "",
        };
    },
    computed: {},
    created: function () {},
    mounted() {
        this.drawConfig = CI[this.$route.params.cid];
        this.Init();
    },
    methods: {
        Init() {
            this.draw();
        },
        draw() {
            const canvas = document.getElementById("canvas");
            const ctx = canvas.getContext("2d");
            this.drawCtx = ctx;
            this.loadDrawImage(this.drawConfig.key, "bg").then((img) => {
                const targetWidth = 1280; // 目标宽度
                const aspectRatio = img.width / img.height;
                const targetHeight = targetWidth / aspectRatio;
                this.$refs.canvas.width = targetWidth;
                this.$refs.canvas.height = targetHeight;
                this.$nextTick(() => {
                    this.drawImg(img, 0, 0, canvas.width, canvas.height);
                    for (const key in this.drawConfig.element) {
                        let item = this.drawConfig.element[key];
                        if (item.style) {
                            if (item.type == "text") {
                                item.key = key;
                                this.drawText(ctx, item);
                            } else if (item.type == "rank") {
                                this.drawRank(ctx, item);
                            } else if (item.type == "qr") {
                                this.drawQr(ctx, item);
                            }
                        }
                    }
                });
            });
        },
        drawText(ctx, data) {
            let style = data.style;
            ctx.font = `${style.fontSize}px Arial`;
            ctx.textAlign = style.textAlign;
            ctx.fillStyle = style.color;
            if (data.key != "team") {
                ctx.fillText(data.content, style.left, style.top);
            } else {
                this.drawWrappedText(ctx, data.content, style);
            }
        },
        drawWrappedText(ctx, text, style) {
            let words = text.split(style.split);
            let line = "";
            for (let i = 0; i < words.length; i++) {
                let testLine = line + words[i];
                let metrics = ctx.measureText(testLine);
                let testWidth = metrics.width;
                if (testWidth > style.width && i > 0) {
                    ctx.fillText(line, style.left, style.top);
                    line = words[i];
                    style.top += style.height;
                } else {
                    if (i < words.length - 1) {
                        testLine += style.split;
                    }
                    line = testLine;
                }
            }
            ctx.fillText(line, style.left, style.top);
        },
        drawRank(ctx, data) {
            let imgType = 1;
            let rankSrc = "";
            let numArray = [];
            if (data.content == 1) {
                rankSrc = "first";
            } else if (data.content == 2) {
                rankSrc = "second";
            } else if (data.content == 3) {
                rankSrc = "third";
            } else if (data.content == 100) {
                imgType = 3;
                numArray = [1, 100];
            } else if (data.content == null) {
                rankSrc = "hundred";
            } else if (data.content <= 10) {
                imgType = 2;
                rankSrc = data.content;
            } else if (data.content > 10) {
                imgType = 3;
                numArray = data.content
                    .toString()
                    .split("")
                    .map((num) => (num === "0" ? 10 : parseInt(num)));
            }
            if (imgType == 1) {
                this.loadDrawImage(rankSrc).then((img) => {
                    const targetWidth = data.style.topWidth; // 目标宽度
                    const aspectRatio = img.width / img.height;
                    const targetHeight = targetWidth / aspectRatio;
                    if (data.style.type == "center") {
                        this.drawImg(img, data.style.left - targetWidth / 2, data.style.top, targetWidth, targetHeight);
                    } else if (data.style.type == "left") {
                        this.drawImg(img, data.style.left, data.style.top, targetWidth, targetHeight);
                    }
                });
            } else if (imgType == 2) {
                this.loadDrawImage("before").then((img) => {
                    const targetWidth = data.style.otherWidth; // 目标宽度
                    const aspectRatio = img.width / img.height;
                    const targetHeight = targetWidth / aspectRatio;
                    if (data.style.type == "center") {
                        this.drawImg(
                            img,
                            data.style.left - targetWidth * 1.5 - data.style.spaceWidth,
                            data.style.top,
                            targetWidth,
                            targetHeight
                        );
                    } else if (data.style.type == "left") {
                        this.drawImg(img, data.style.left, data.style.top, targetWidth, targetHeight);
                    }
                });
                this.loadDrawImage("after").then((img) => {
                    const targetWidth = data.style.otherWidth; // 目标宽度
                    const aspectRatio = img.width / img.height;
                    const targetHeight = targetWidth / aspectRatio;
                    if (data.style.type == "center") {
                        this.drawImg(
                            img,
                            data.style.left + targetWidth / 2 + data.style.spaceWidth,
                            data.style.top,
                            targetWidth,
                            targetHeight
                        );
                    } else if (data.style.type == "left") {
                        this.drawImg(
                            img,
                            data.style.left + targetWidth * 2 + data.style.spaceWidth * 2,
                            data.style.top,
                            targetWidth,
                            targetHeight
                        );
                    }
                });
                this.loadDrawImage(rankSrc).then((img) => {
                    const targetWidth = data.style.otherWidth; // 目标宽度
                    const aspectRatio = img.width / img.height;
                    const targetHeight = targetWidth / aspectRatio;
                    if (data.style.type == "center") {
                        this.drawImg(img, data.style.left - targetWidth / 2, data.style.top, targetWidth, targetHeight);
                    } else if (data.style.type == "left") {
                        this.drawImg(
                            img,
                            data.style.left + targetWidth + data.style.spaceWidth,
                            data.style.top,
                            targetWidth,
                            targetHeight
                        );
                    }
                });
            } else if (imgType == 3) {
                this.loadDrawImage("before").then((img) => {
                    const targetWidth = data.style.otherWidth; // 目标宽度
                    const aspectRatio = img.width / img.height;
                    const targetHeight = targetWidth / aspectRatio;
                    if (data.style.type == "center") {
                        this.drawImg(
                            img,
                            data.style.left - targetWidth * 2 - data.style.spaceWidth,
                            data.style.top,
                            targetWidth,
                            targetHeight
                        );
                    } else if (data.style.type == "left") {
                        this.drawImg(img, data.style.left, data.style.top, targetWidth, targetHeight);
                    }
                });
                this.loadDrawImage("after").then((img) => {
                    const targetWidth = data.style.otherWidth; // 目标宽度
                    const aspectRatio = img.width / img.height;
                    const targetHeight = targetWidth / aspectRatio;
                    if (data.style.type == "center") {
                        this.drawImg(
                            img,
                            data.style.left + targetWidth + data.style.spaceWidth,
                            data.style.top,
                            targetWidth,
                            targetHeight
                        );
                    } else if (data.style.type == "left") {
                        this.drawImg(
                            img,
                            data.style.left + targetWidth * 3 + data.style.spaceWidth * 3,
                            data.style.top,
                            targetWidth,
                            targetHeight
                        );
                    }
                });
                numArray.map((item, index) => {
                    this.loadDrawImage(item).then((img) => {
                        const targetWidth = data.style.otherWidth; // 目标宽度
                        const aspectRatio = img.width / img.height;
                        const targetHeight = targetWidth / aspectRatio;
                        if (data.style.type == "center") {
                            this.drawImg(
                                img,
                                data.style.left -
                                    targetWidth -
                                    data.style.spaceWidth / 2 +
                                    index * (targetWidth + data.style.spaceWidth / 2),
                                data.style.top,
                                targetWidth,
                                targetHeight
                            );
                        } else if (data.style.type == "left") {
                            this.drawImg(
                                img,
                                data.style.left +
                                    targetWidth +
                                    data.style.spaceWidth +
                                    index * (targetWidth + data.style.spaceWidth),
                                data.style.top,
                                targetWidth,
                                targetHeight
                            );
                        }
                    });
                });
            }
        },
        loadDrawImage(src, type = "rank") {
            const newImg = new Image();
            newImg.setAttribute("crossOrigin", "anonymous");
            newImg.src = this.getImgPath(src, type);
            return new Promise((resolve, reject) => {
                newImg.onload = () => {
                    resolve(newImg);
                };
            });
        },
        drawQr(ctx, data) {
            this.loadDrawImage(null, "qr").then((img) => {
                this.drawImg(img, 150, 1490, 100, 100);
            });
        },
        drawImg(img, left, top, width, height) {
            this.drawCtx.drawImage(img, left, top, width, height);
            this.canvasExport();
        },
        getImgPath(id, type) {
            let imgUrl = "";
            if (type == "bg") {
                imgUrl = `img/dashboard/collection/${id}/background.png`;
            } else if (type == "rank") {
                imgUrl = `img/dashboard/collection/${this.drawConfig.key}/rank/${id}.png`;
            } else if (type == "qr") {
                imgUrl = `img/dashboard/collection/${this.$route.params.cid}/qr.png`;
            }
            return __imgPath + imgUrl;
        },
        canvasExport() {
            clearTimeout(this.exportImgTime);
            const canvas = document.getElementById("canvas");
            this.exportImgTime = setTimeout(() => {
                console.log(1);
                this.collectionImg = canvas.toDataURL("image/png");
            }, 100);
        },
        print() {
            window.print();
        },
    },
};
</script>

<style lang="less" scoped>
.m-main {
    &::after {
        content: "";
        position: fixed;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        background-color: #24292e;
        z-index: -1;
    }
    .mt(@header-height);
    .pt(50px);
    .pb(50px);
    .x();
    .u-title {
        .fz(28px);
        .bold();
        .color(#ffffff);
    }
    .u-time {
        .mt(10px);
        .fz(14px);
        .color(#999999);
    }
    .u-img {
        .db();
        .w(400px);
        .pointer();
        margin: 0 auto;
        .mt(10px);
        box-shadow: 0 0 10px 10px rgba(255, 255, 255, 0.1);
        .r(5px);
    }
    #canvas {
        display: block;
        position: fixed;
        left: 0;
        right: 0;
        transform: translateX(-110%) translateY(-110%);
    }
    .u-btn {
        .db();
        .w(200px);
        margin: 0 auto;
        .mt(50px);
    }
}
@media print {
    .c-header {
        .none();
    }
    .m-main {
        margin: 0;
        padding: 0;
        &::after {
            .none();
        }
    }
    .m-hide {
        .none() !important;
    }
}
</style>
