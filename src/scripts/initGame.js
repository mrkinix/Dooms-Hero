import Vue from 'vue';
import Button from '../components/button.vue';

export const generate = (e, _x, _y, pos, reverse) => {
    const ComponentClass = Vue.extend(Button);
    const instance = new ComponentClass({
        propsData: {
            aa: 'wiw',
            x: _x,
            y: _y,
            action: pos,
            reverse: reverse,
            id: e.created,
            leader: e.leader
        },
        created(){
            this.$on(['destruction'], () => { e.test() })
            this.$on(['hittable'], () => { e.test1() })
        },
    });
    e.created += 1;
    instance.$mount();
    e.$refs.container.appendChild(instance.$el);
};

export const createUi = (e) => {
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < 20; i++) {
        setTimeout(() => { e.playing -= 0.05; }, i * 60);
    }
    e.left_pos_board = '50vw - 0.56*70vh - 5%';
};

export const leftInit = (e, reverse) => {
    e.queue.push('left')
    const X_POSITION = 'calc(50vw - 0.56*70vh + 30vh)';
    const Y_POSITION = '70vh';
    generate(e, X_POSITION, Y_POSITION, 'left', reverse);
};

export const rightInit = (e, reverse) => {
    e.queue.push('right')
    const X_POSITION = 'calc(50vw - 0.56*70vh  + 42.51vh)';
    const Y_POSITION = '70vh';
    generate(e, X_POSITION, Y_POSITION, 'right', reverse);
};

export const middleInit = (e, reverse) => {
    e.queue.push('middle')
    const X_POSITION = 'calc(50vw - 0.56*70vh + 36.54vh)';
    const Y_POSITION = '70vh';
    generate(e, X_POSITION, Y_POSITION, 'middle', reverse);
};
