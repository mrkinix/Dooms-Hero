<template>
    <img :key="id" class="pick" v-if='leader <= id'
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
            leader: 0,
            destroyed: false
        };
    },
    props: ['x', 'y', 'action', 'reverse', 'id', ],
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
            if (!this.destroyed) {
                this.$emit('score', -1, undefined, true)
                this.$emit('destruction');
                this.$destroy;
                this.$el.parentNode.removeChild(this.$el);
            }
        },
        controller: function() {
            const KEYS = ['f', 'g', 'h']
            const STRINGS = { f: 'left', g: 'middle', h: 'right'}
            const ACTIONS = ['left', 'middle', 'right']
            window.addEventListener('keydown', (e) => {
                if (KEYS.includes(e.key)) {
                    if ((parseInt(this.y_pos, 10) < 24)
                    && (STRINGS[e.key] === this.action)
                    && (this.leader === this.id)) {
                        this.destroyed = true;
                        this.$emit('score', 1, ACTIONS.indexOf(this.action))
                        this.$emit('destruction');
                        // this.$destroy;
                        this.$el.parentNode.removeChild(this.$el);
                    }
                    else if (this.leader === this.id) {
                        this.$emit('score', -1)
                    }
                }
            });
        }
    },

    watch: {
        leader : function() {
            if (this.leader === this.id) {
                this.controller()
            }
        }
    },
    created() {
        if (this.leader === this.id) {
            this.controller()
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