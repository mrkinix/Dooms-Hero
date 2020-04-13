<template>
    <img :key="id" class="pick"
    v-bind:style="[reverse ? { 'z-index': 9999 - id, left: x_pos, bottom: y_pos,
    transform: 'rotate(180deg)'}
    : { 'z-index': 9999 - id, left: x_pos, bottom: y_pos }]"
    :src="require('@/assets/pick.png')">
</template>

<script>
import * as motion from '@/scripts/pickMotion';
import * as delay from 'delay';

export default {
    data() {
        return {
            y_pos: this.y,
            x_pos: this.x,
            x_initial: this.x,
        };
    },
    props: ['aa', 'x', 'y', 'action', 'reverse', 'id', 'leader'],
    mounted() {
        switch(this.action) {
            case 'right':
                motion.rightTrajectory(this)
                break;
            case 'left':
                motion.leftTrajectory(this)
                break;
            case 'middle':
                motion.middleTrajectory(this)
                break;
        };
        this.close();
    },
    methods: {
        close: async function() {
 
            await delay(3000);
            this.$emit('destruction')
            this.$destroy;
            this.$el.parentNode.removeChild(this.$el);
        },
    },
    async created() {
        await delay(2300);
        this.$emit('hittable');
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