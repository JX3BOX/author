<template>
    <div>
        2025贺卡 -- {{data}}
    </div>
</template>


<script>
import {getBirthdayDetail} from "@/service/birthday";
import User from "@jx3box/jx3box-common/js/user";
export default {
    name: "Default2025",
    data: function () {
        return {
            data: "",
        };
    },
    computed: {
        id: function () {
            return this.$route.query.id;
        },
        uid: function() {
            return this.$route.params.uid
        },
        isMine: function() {
            return this.uid == User.getInfo().uid;
        }
    },
    mounted() {
        this.loadData()
    },
    methods: {
        loadData() {
            if (!this.isMine) return
            getBirthdayDetail(this.id).then(res => {
                this.data = res.data.data
            })
        }
    },
}
</script>
