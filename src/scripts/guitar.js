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

export const leftInit = (e) => {
    const X_POSITION = 'calc(5% + 30vh)';
    const Y_POSITION = '70vh';
    generate(e, X_POSITION, Y_POSITION);
};

export const rightInit = (e) => {
    const X_POSITION = 'calc(5% + 42.51vh)';
    const Y_POSITION = '70vh';
    generate(e, X_POSITION, Y_POSITION);
};

export const middleInit = (e) => {
    const X_POSITION = 'calc(5% + 36.54vh)';
    const Y_POSITION = '70vh';
    generate(e, X_POSITION, Y_POSITION);
};

export const animateMiddle = () => {
    
};
