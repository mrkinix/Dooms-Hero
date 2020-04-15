import Vue from 'vue';
import Button from '../components/button.vue';

export const generate = (e, _x, _y, pos, reverse, dataFn) => {
    const ComponentClass = Vue.extend(Button);
    const initData = dataFn() || {};
    const data = {};
    const propsData = {
        x: _x,
        y: _y,
        action: pos,
        reverse: reverse,
        id: e.created,
    };
    const propKeys = Object.keys(ComponentClass.options.props || {});

    Object.keys(initData).forEach(key => {
        if (propKeys.includes(key)) {
          propsData[key] = initData[key];
        } else {
          data[key] = initData[key];
        }
    });
    const instance = new ComponentClass({
        data,
        propsData,
        created(){
            this.$on(['destruction'], () => { e.test() })
            this.$on(['score'], (param) => { e.updatescore(param) })
        },
    });
    e.created += 1;
    instance.$mount();
    e.$refs.container.appendChild(instance.$el);

    const dataSetter = data => {
        Object.keys(data).forEach(key => {
            instance[key] = data[key];
            });
        };
    
      const unwatch = e.$watch(dataFn || {}, dataSetter);

    return {
        instance,
        update: () => dataSetter(dataFn ? dataFn() : {}),
        dispose: () => {
            unwatch();
            instance.$destroy();
        }
    };
};

export const createUi = (e) => {
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < 20; i++) {
        setTimeout(() => { e.playing -= 0.05; }, i * 60);
    }
    e.left_pos_board = '50vw - 0.56*70vh - 5%';
};

export const leftInit = (e, reverse, dataFn) => {
    e.queue.push('left')
    const X_POSITION = 'calc(50vw - 0.56*70vh + 30vh)';
    const Y_POSITION = '70vh';
    return generate(e, X_POSITION, Y_POSITION, 'left', reverse, dataFn);
};

export const rightInit = (e, reverse, dataFn) => {
    e.queue.push('right')
    const X_POSITION = 'calc(50vw - 0.56*70vh  + 42.51vh)';
    const Y_POSITION = '70vh';
    return generate(e, X_POSITION, Y_POSITION, 'right', reverse, dataFn);
};

export const middleInit = (e, reverse, dataFn) => {
    e.queue.push('middle')
    const X_POSITION = 'calc(50vw - 0.56*70vh + 36.54vh)';
    const Y_POSITION = '70vh';
    return generate(e, X_POSITION, Y_POSITION, 'middle', reverse, dataFn);
};
