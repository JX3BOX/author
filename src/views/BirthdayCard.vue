<template>
    <HeaderLessLayout>
        <div class="m-main m-index-popup">
            <component :is="event_component" />
        </div>
    </HeaderLessLayout>
</template>

<script>
import HeaderLessLayout from "@/layouts/HeaderLessLayout.vue";

// 2025贺卡
import Default2025 from "@/components/birthday/default2025.vue";
// 2024贺卡
import Default2024 from "@/components/birthday/default2024.vue";
export default {
    name: "BirthdayCard",
    components: {
        HeaderLessLayout,
        Default2025,
        Default2024,
    },
    data: function () {
        return {
            event_component: "default2025",
        };
    },
    methods: {
    },
    mounted() {
        const skin = this.$route.params.skin;

        this.event_component = skin == 'undefined' ? 'default2025' : skin
    },
};
</script>

<style lang="less">

</style>
