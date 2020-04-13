<template>
    <img @click="rightTrajectory" :key="x_initial.id"
    v-bind:style="{ left: x_pos, bottom: y_pos }" 
    class="pick" :src="require('@/assets/pick.png')">
</template>

<script>
export default {
    data() {
        return {
            y_pos: this.y,
            x_pos: this.x,
            x_initial: this.x,
        }
    },
    props: ['aa', 'x', 'y'],
    methods: {
        middleTrajectory: function() {
            for (let i = 0; i < 50; i++) {
                const that = this;
                setTimeout(() => {
                    that.y_pos = parseInt(that.y_pos) - 0.1 + 'vh' 
                }, i * 60)                
            }
        },
        leftTrajectory: function() {
            for (let i = 0; i < 50; i++) {
                const that = this;
                setTimeout(() => {
                    that.y_pos = parseInt(that.y_pos) - 0.1 + 'vh' 
                    that.x_pos = `calc(5% + 12.5vh + ${(parseInt(this.y_pos) / 3.98)}vh)`
                }, i * 60)                
            }
        },
        rightTrajectory: function() {
            for (let i = 0; i < 50; i++) {
                const that = this;
                setTimeout(() => {
                    that.y_pos = parseInt(that.y_pos) - 0.1 + 'vh' 
                    console.log(this.x_initial)
                    that.x_pos = `calc(5% + 61.6vh - ${(parseInt(this.y_pos) / 3.63)}vh)`
                    console.log(this.x_pos);
                }, i * 60)                
            }
        }
    },
}
</script>

<style lang="scss" scoped>
.pick {
    height: auto;
    width: 6vh;
    position: absolute;
}

</style>