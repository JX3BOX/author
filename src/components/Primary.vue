<template>
    <div class="m-author-body">
        <el-tabs class="m-tabs" v-model="active">
            <el-tab-pane
                v-for="item in types"
                :key="item.value"
                :label="item.label"
                :name="item.value"
            >
            </el-tab-pane>
        </el-tabs>

        <div class="m-primary">
            <Post v-if="active == 'post'"/>
            <Wiki v-if="active == 'wiki'" />
            <Question v-if="active == 'question'" />
            <Paper v-if="active == 'paper'" />
            <Plan v-if="active == 'plan'" />
            <Collection v-if="active == 'collection'" />
            <Namespace v-if="active == 'namespace'" />
        </div>
    </div>
</template>

<script>
import Post from "@/components/Post.vue";
import Wiki from "@/components/Wiki.vue";
import Question from "@/components/Question.vue";
import Paper from "@/components/Paper.vue";
import Collection from "@/components/Collection.vue";
import Namespace from "@/components/Namespace.vue";
import Plan from "@/components/item_plan.vue";
export default {
    name: "Primary",
    props: [],
    data: function() {
        return {
            active: "post",
            types: [
                { label: "最新作品", value: "post" },
                { label: "百科贡献", value: "wiki" },
                { label: "TA的题目", value: "question" },
                { label: "TA的试卷", value: "paper" },
                { label: "TA的清单", value: "plan" },
                { label: "TA的小册", value: "collection" },
                { label: "TA的铭牌", value: "namespace" },
            ],
        };
    },
    methods: {},
    components: {
        Post,
        Wiki,
        Question,
        Paper,
        Collection,
        Namespace,
        Plan,
    },
};
</script>

<style lang="less">
</style>
