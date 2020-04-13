import Vue from 'vue';
import Button from '../components/button.vue';


export const generate = (e, _x, _y) => {
    const ComponentClass = Vue.extend(Button);
    const instance = new ComponentClass({
        propsData: { aa: 'wiw', x: _x, y: _y },
    });
    instance.$slots.default = ['click me!'];
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

export const leftInit = (e) => {
    const X_POSITION = 'calc(5% + 30vh)';
    const Y_POSITION = '70vh';
    generate(e, X_POSITION, Y_POSITION);
};

export const rightInit = (e) => {
    const X_POSITION = 'calc(50vw - 0.56*70vh  + 42.51vh)';
    const Y_POSITION = '70vh';
    generate(e, X_POSITION, Y_POSITION);
};

export const middleInit = (e) => {
    const X_POSITION = 'calc(5% + 36.54vh)';
    const Y_POSITION = '70vh';
    generate(e, X_POSITION, Y_POSITION);
};
