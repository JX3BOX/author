<template>
    <AppLayout>
        <div class="m-main"></div>
    </AppLayout>
</template>

<script>
import { getHolidayCard } from "@/service/card";
import AppLayout from "@/layouts/AppLayout.vue";
export default {
    name: "holidayCard",
    components: { AppLayout },
    props: [],
    data: function () {
        return {};
    },
    computed: {},
    watch: {},
    methods: {
        load() {
            getHolidayCard().then((res) => {
                console.log(res);
            });
        },
    },
    mounted () {
        this.load();
    }
};
</script>

<style lang="less" scoped></style>
